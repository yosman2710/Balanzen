import { api } from "./client";

export const getDashboardResumen = async () => {
    const { data } = await api.get("/dashboard"); // 👈 tu endpoint backend
    return data;
};

export const getDashboardMetaAhorro = async () => {
    const { data } = await api.get("/dashboard/metaAhorro"); // 👈 tu endpoint backend
    return data;
};