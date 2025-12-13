import { api } from "./client";

export interface CreateBudgetDTO {
    id_categoria: string;
    monto_limite: number;
    fecha_inicio: string;
    fecha_final: string;
    alerta: number;
}

export interface BudgetDTO {
    id: string;
    id_usuario: string;
    id_categoria: string;
    monto_limite: number;
    fecha_inicio: string;
    fecha_final: string;
    alerta: number;
    categoria: {
        id: string;
        name: string;
        icon: string;
        color: string;
        type: string;
    };
    gasto_actual?: number; // Backend might compute this or we calculate it
}

export const createBudget = async (budget: CreateBudgetDTO) => {
    const { data } = await api.post("/presupuestos", budget);
    return data;
};

export const getBudgets = async () => {
    const { data } = await api.get("/presupuestos");
    return data;
};

export const getBudgetById = async (id: string) => {
    // Assuming backend supports this or we filter from list
    // The route file didn't explicitly show GET /:id but valid REST likely supports specific fetch or we find it in list
    // The routes showed: delete, update, list all, list by date, list by cat. 
    // Usually update/delete take ID.
    // We will rely on getBudgets mostly.
    const { data } = await api.get(`/presupuestos`);
    // Filtering client side if needed or if backend adds specific route
    return data;
};


export interface BudgetProgressDTO {
    id: string; // id_presupuesto
    categoryId: string; // id_categoria
    category: string; // nombre_categoria
    icon: string;
    color: string;
    limit: number;
    spent: number;
    usedPercent: number;
    remaining: number;
}

export const getBudgetsWithProgress = async () => {
    const { data } = await api.get("/budget");
    return data;
};

export const deleteBudget = async (id: string) => {
    const { data } = await api.delete(`/presupuestos/${id}`);
    return data;
};

export const updateBudget = async (id: string, budget: Partial<CreateBudgetDTO>) => {
    const { data } = await api.put(`/presupuestos/${id}`, budget);
    return data;
};
