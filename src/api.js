import axios from "axios";

//insert your Twitch API key into this variable for the project to works
let API_KEY = "n9e2o2yya2xg2ykzxmqv80tsut3ppl";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;
