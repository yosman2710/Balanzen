import { api } from "./client";

export const getSavingsGoalById = async (id: string) => {
    const { data } = await api.get(`/metaAhorro/${id}`);
    return data;
};

export const createSavingsGoal = async (goalData: any) => {
    const { data } = await api.post("/metaAhorro", goalData);
    return data;
};

export const deleteSavingsGoal = async (id: string) => {
    const { data } = await api.delete(`/metaAhorro/${id}`);
    return data;
};

export const addContribution = async (id: string, contributionData: any) => {
    const { data } = await api.post(`/metaAhorro/${id}/contribuciones`, contributionData);
    return data;
};

export const deleteContribution = async (goalId: string, contributionId: string) => {
    const { data } = await api.delete(`/metaAhorro/${goalId}/contribuciones/${contributionId}`);
    return data;
};
