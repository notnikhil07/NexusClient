import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_API,
  withCredentials: true,
});

export default axiosInstance;
