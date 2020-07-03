import * as firebase from "firebase";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Screens/Home";
import LoginScreen from "./src/Screens/Login";
import PollScreen from "./src/Screens/Poll";

var firebaseConfig = {
  apiKey: "AIzaSyCxoWkbdNUcks6YwEZTiXmI4iHP1xkOAOA",
  authDomain: "post-symposium.firebaseapp.com",
  databaseURL: "https://post-symposium.firebaseio.com",
  projectId: "post-symposium",
  storageBucket: "post-symposium.appspot.com",
  messagingSenderId: "497667434343",
  appId: "1:497667434343:web:6da5027c534640bef471c2",
  measurementId: "G-VQWFNJ62SP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("Firebase Initialized...");

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      title: "Login"
    },
    HomeScreen: {
      screen: HomeScreen,
      title: "Home"
    },
    PollScreen: {
      screen: PollScreen,
      title: "Poll"
    }
  },
  {
    defaultNavigationOptions: {
      title: "Poll-io",
      headerStyle: {
        backgroundColor: "#005EB8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
