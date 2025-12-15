import { api } from "./client";

export interface CategoryDTO {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'ingreso' | 'gasto';
    isDefault: boolean;
    transactionCount?: number;
}

export const createCategory = async (category: {
    name: string;
    icon: string;
    color: string;
    type: "ingreso" | "gasto";
}) => {
    const { data } = await api.post("/categorias", category);
    return data; // { id, name, icon, color, type }
};

export const getCategories = async () => {
    const { data } = await api.get("/categorias");
    return data; // lista de categorías
};

export const getCategoryById = async (id: string) => {
    const { data } = await api.get(`/categorias/${id}`);
    return data;
};

export const deleteCategory = async (id: string) => {
    const { data } = await api.delete(`/categorias/${id}`);
    return data; // { id, name, icon, color, type }
};

export const updateCategory = async (id: string, category: {
    name: string;
    icon: string;
    color: string;
    type: "ingreso" | "gasto";
}) => {
    const { data } = await api.put(`/categorias/${id}`, category);
    return data; // { id, name, icon, color, type }
};
