import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomInput } from "../../Components/CustomInput";
import { MButton } from "../../Components/MButton";
import instance from "../../Config/Axios";
import { Card, Container, Line } from "./style";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: "",
      password: "",
      passwordRequired: false,
      error: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {"    "}
            Log Out
          </Text>
        </TouchableOpacity>
      )
    };
  };

  checkQuestionID = id => {
    const { passwordRequired, password } = this.state;
    if (id != 0)
      instance
        .get("/question/" + id, {
          params: {
            password: password
          }
        })
        .then(response => {
          if (response.data[0] === "N") {
            return this.setState({
              error: "No poll with that ID found."
            });
          }
          if (response.data === "Password incorrect") {
            return this.setState({
              passwordRequired: true
            });
          } else {
            // handle success
            instance
              .get("/patient/" + response.data.PatientNHSNo)
              .then(response2 => {
                this.props.navigation.navigate("PollScreen", {
                  pollData: response.data,
                  patientData: response2.data
                });
              })
              .catch(error => console.log(error));
          }
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
  };

  render() {
    const testArray = ["1", "2", "3", "4", "5"];
    const { questionID, password, passwordRequired } = this.state;
    return (
      <Container>
        <Card>
          <Text>Enter the poll ID.</Text>
          <Line />
          <CustomInput
            label="Poll ID"
            width={"100%"}
            value={questionID}
            onChangeText={text =>
              this.setState({
                passwordRequired: false,
                error: "",
                questionID: text
              })
            }
          ></CustomInput>
          {passwordRequired ? (
            <>
              <CustomInput
                label="Password"
                width={"100%"}
                value={password}
                onChangeText={text =>
                  this.setState({
                    password: text
                  })
                }
              ></CustomInput>
              <Text style={{ color: "red" }}>Password Required</Text>
            </>
          ) : null}
          {this.state.error !== "" ? (
            <>
              <Text style={{ color: "red" }}>{this.state.error}</Text>
            </>
          ) : null}
          <View style={{ padding: "5%" }}>
            <MButton
              label="Search Poll"
              onPress={() => this.checkQuestionID(questionID)}
            ></MButton>
          </View>
        </Card>
      </Container>
    );
  }
}

export default HomeScreen;
