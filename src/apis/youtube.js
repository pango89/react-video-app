import axios from "axios";

const KEY = "AIzaSyDJ3trqlIKuBKEP90anRpvse3dyunSAPQM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
