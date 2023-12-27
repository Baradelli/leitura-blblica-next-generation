import axios from "axios";

const http = axios.create({
  baseURL: "https://api-leituras.adcfranco.com",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    // const token = "token";

    // if (token && config.headers)
    //   config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    console.log("Error on axios interceptor");
    return Promise.reject(error);
  }
);

export { http };
