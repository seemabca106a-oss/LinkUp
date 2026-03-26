import axios from "axios";

const isProduction = true;
const baseURL = isProduction
  ? "deployment-url/api"
  : "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
