import axios from "axios";

const api = axios.create({
  baseURL: "http://95.85.121.153:3066/",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

export default api;
