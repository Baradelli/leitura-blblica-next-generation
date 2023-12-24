import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3333",
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
