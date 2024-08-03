// src/api/axiosConfig.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://95.85.121.153:3066", // Make sure this is correct
  timeout: 30000, // Increase timeout to 30 seconds
  headers: { "Content-Type": "application/json" },
});

export default api;
