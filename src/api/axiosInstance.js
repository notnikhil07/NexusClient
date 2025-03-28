import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nexus25.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
