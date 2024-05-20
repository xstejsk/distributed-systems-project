import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:8080",
});

export default axiosInstance;
