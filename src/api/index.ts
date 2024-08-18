import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/",
  // withCredentials: true,
  timeout: 2000,
});

export default api;

export const mainNoticeApi = axios.create({
  baseURL:
    "https://5gpavi6uqkokyzlttsdlh5kmou0esqet.lambda-url.ap-northeast-2.on.aws",
  timeout: 2000,
});

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

export const noticeApi = axios.create({
  baseURL:
    "https://gckdhv3vvkl2mqjh4g4gcrxekq0ujies.lambda-url.ap-northeast-2.on.aws",
  timeout: 2000,
});

export const searchNoticeApi = axios.create({
  baseURL:
    "https://7phscebpuxusoffphqhdanyk5q0ycpwn.lambda-url.ap-northeast-2.on.aws",
  timeout: 2000,
});

export const hotIssueApi = axios.create({
  baseURL:
    "https://isdam547nizk7am7yxkltjfzbq0gpwfq.lambda-url.ap-northeast-2.on.aws/",
  timeout: 2000,
});
