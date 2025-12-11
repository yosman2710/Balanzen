import { useState } from "react";
import { login as loginApi, logout as logoutApi } from "../api/auth";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const user = await loginApi(email, password);
            return user;
        } catch (e: any) {
            setError(e?.response?.data?.error || "Error al iniciar sesión");
            throw e;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        await logoutApi();
    };

    return { login, logout, loading, error };
};