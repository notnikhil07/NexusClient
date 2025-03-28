import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_BACKEND_API,
  withCredentials: true,
});

export default axiosInstance;
