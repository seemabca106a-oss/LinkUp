import axios from "axios";

const isProduction = true;
const baseURL = isProduction
  ? "https://linkup-6cql.onrender.com"
  : "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
