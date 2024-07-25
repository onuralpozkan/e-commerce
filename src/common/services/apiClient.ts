import axios from "axios";
import base from "../config/base.config";

const apiClient = axios.create({
  baseURL: base.url,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    // Add auth token or other headers here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here
    return Promise.reject(error);
  }
);

export default apiClient;
