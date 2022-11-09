import axios from "axios";

//insert your Twitch API key into this variable for the project to works
let API_KEY = "79zq3jeq2mn89vscgvhvj776536zi5";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;
