import { api } from "./client";

export type NuevaTransaccion = {
    id_categoria: number;
    nombre_transaccion: string;
    monto: number;
    fecha: string; // "YYYY-MM-DD"
    descripcion?: string;
};

export const crearTransaccion = async (payload: NuevaTransaccion) => {
    const { data } = await api.post("/transacciones", payload);
    return data; // { id: number }
};

export const listarTransacciones = async () => {
    const { data } = await api.get("/transacciones");
    return data; // Ajusta al shape de tu API
};