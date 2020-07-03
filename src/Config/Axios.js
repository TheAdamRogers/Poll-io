import axios from "axios";
import { Platform } from "react-native";

const url = "http://94.174.192.92:3000/";
const dev = "http://localhost:3000/";

console.log("OS: ", Platform.OS, url);

const instance = axios.create({
  baseURL: url,
  timeout: 1000
});

export default instance;
