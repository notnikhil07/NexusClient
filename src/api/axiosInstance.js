import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nexus25-production.up.railway.app/api",
  withCredentials: true,
});

export default axiosInstance;
