import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  // withCredentials: true,
  timeout: 2000,
});

export default api;
