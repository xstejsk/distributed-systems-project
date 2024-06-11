import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://34.34.162.227:8080",
});

export default axiosInstance;
