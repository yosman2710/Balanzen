import { useState, useEffect } from "react";
import { getDashboardResumen } from "../api/dashboard";

export const useDashboard = () => {
    const [resumen, setResumen] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getDashboardResumen();
                setResumen(data);
            } catch (err: any) {
                setError(err?.response?.data?.error || "Error cargando dashboard");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { resumen, loading, error };
};