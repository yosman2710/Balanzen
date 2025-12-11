import { useCallback, useState } from "react";
import { crearTransaccion, listarTransacciones, NuevaTransaccion } from "../api/transacciones";

export const useTransacciones = () => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAll = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await listarTransacciones();
            setItems(data);
        } catch (e: any) {
            setError(e?.response?.data?.error || "Error al listar transacciones");
        } finally {
            setLoading(false);
        }
    }, []);

    const create = useCallback(async (payload: NuevaTransaccion) => {
        setLoading(true);
        setError(null);
        try {
            const res = await crearTransaccion(payload);
            await fetchAll();
            return res;
        } catch (e: any) {
            setError(e?.response?.data?.error || "Error al crear transacción");
            throw e;
        } finally {
            setLoading(false);
        }
    }, [fetchAll]);

    return { items, loading, error, fetchAll, create };
};