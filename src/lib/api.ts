import axios from "axios";

// Default Settings
export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});
