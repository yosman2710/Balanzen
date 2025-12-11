import axios from "axios";
import { API_URL } from "../config/constants";
import { getToken } from "../utils/storage";

export const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

// Interceptor para adjuntar el token en cada request
api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
});