import axios, { type AxiosRequestConfig, type Method } from "axios";
import { APP_CONFIG } from "../config/app.config";

const axiosInstance = axios.create({
    baseURL: APP_CONFIG.API_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

const getFormData = (object: Record<string, string | Blob>): FormData => {
    const formData = new FormData();
    Object.entries(object).forEach(([key, value]) => {
        formData.append(key, value);
    });
    return formData;
};

export const APICall = async <
    TResponse = unknown,
    TBody extends Record<string, unknown> | null = Record<string, unknown>
>(
    method: Method | string,
    body?: TBody,
    url?: string,
    headers?: Record<string, string>,
    formData = false
): Promise<TResponse> => {
    const config: AxiosRequestConfig = {
        method,
        url,
        headers: headers || {},
    };

    if (body) {
        if (method.toLowerCase() === "get") {
            config.params = body;
        } else if (
            (method.toLowerCase() === "post" || method.toLowerCase() === "put") &&
            formData
        ) {
            config.data = getFormData(body as Record<string, string | Blob>);
            config.headers = {
                ...config.headers,
                "Content-Type": "multipart/form-data",
            };
        } else {
            config.data = body;
        }
    }

    try {
        const res = await axiosInstance(config);
        return res.data as TResponse;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                // if (err.response.status === 401) {
                //     throw new Error("Session expired. Please log in again.");
                // }
                if (
                    err.response.data &&
                    (err.response.data as { message?: string }).message
                ) {
                    throw new Error(
                        (err.response.data as { message?: string }).message ??
                        "Unknown error"
                    );
                }
            }
            if (err.code === "ECONNABORTED") {
                throw new Error(
                    "Request timeout. Please check your internet connection"
                );
            }
        }
        throw new Error("Something went wrong, Please try again later.");
    }
};

export default APICall;
