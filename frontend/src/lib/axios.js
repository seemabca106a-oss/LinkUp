import axios from "axios";

const isProduction = false;
const baseURL = isProduction
  ? "deployment-url/api"
  : "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
