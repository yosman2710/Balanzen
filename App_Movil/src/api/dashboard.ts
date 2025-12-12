import { api } from "./client";

export const getDashboardResumen = async () => {
    const { data } = await api.get("/dashboard/resumen"); // 👈 tu endpoint backend
    return data;
};