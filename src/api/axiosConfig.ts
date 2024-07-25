import axios from "axios";

const BASE_URL = "http://95.85.121.153:3066/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
