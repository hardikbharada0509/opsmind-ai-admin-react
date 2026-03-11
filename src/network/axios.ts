import axios from "axios";
import { APP_CONFIG } from "../config/app.config";

/**
 * Axios instance configured with the base app settings.
 * Since this is a UI-only panel, this mostly serves as structural proof of concept.
 */
export const apiClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Example Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Inject mock token if needed in real app
    const token = localStorage.getItem("auth_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handler mock
    console.error("API Error: ", error.response?.status);
    return Promise.reject(error);
  }
);
