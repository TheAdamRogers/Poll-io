import * as firebase from "firebase";
import React, { Component } from "react";
import { CustomInput } from "../../Components/CustomInput";
import { MButton } from "../../Components/MButton";
import { Card, CenterView, ErrorText, Loader } from "./style";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorCode: "",
      loading: false
    };
  }

  handleLogin = (email, password) => {
    this.setState({
      loading: true,
      errorCode: null
    });

    setError = error => {
      this.setState({
        errorCode: error
      });
    };

    if (this.state.email && this.state.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          switch (errorCode) {
            case "auth/invalid-email":
              this.setError("Invalid Email.");
              break;
            case "auth/user-not-found":
              this.setError("Email not registered.");
              break;
            case "auth/wrong-password":
              this.setError("Incorrect Password");
              break;
            default:
              this.setError("Error.");
          }
        })
        .then(() => {
          const user = firebase.auth().currentUser;
          if (user) {
            console.log("Logged in");
            this.props.navigation.navigate("HomeScreen");
          } else {
            console.log("Dang");
          }
          this.setState({ loading: false });
        });
    } else {
      setError("Both Email and Password are required.");
      this.setState({ loading: false });
    }
  };
  
  render() {
    const { email, password, loading, errorCode } = this.state;
    firebase.auth().signOut();
    return (
      <CenterView>
        <Card padding="5%" justifyContent="space-between">
          <CustomInput
            label="Email"
            value={email}
            onChangeText={text => this.setState({ email: text })}
          ></CustomInput>
          <CustomInput
            label="Password"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            password
          ></CustomInput>
          {loading ? (
            <Loader />
          ) : (
            <MButton
              label="Login"
              onPress={() => this.handleLogin(email, password)}
            />
          )}
          {errorCode ? <ErrorText>{errorCode}</ErrorText> : null}
        </Card>
      </CenterView>
    );
  }
}

export default LoginScreen;
