import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  // withCredentials: true,
  timeout: 2000,
});

export default api;

export const scheduleApi = axios.create({
  baseURL:
    "https://hstqzhnctxsartnez2avr2pdga0adzri.lambda-url.ap-northeast-2.on.aws",
  timeout: 2000,
});

export const mealApi = axios.create({
  baseURL:
    "https://7wyimmh5vj3uovr7exs3oewe640lahmh.lambda-url.ap-northeast-2.on.aws",
  timeout: 2000,
});
