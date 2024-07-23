import axios from "axios";

const DashboardApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {},
});

export default DashboardApi;
