import { api } from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken, removeToken } from "../utils/storage";

type LoginResponse = {
    id: number;
    nombre: string;
    email: string;
    token: string;
};

export const login = async (email: string, password: string) => {
    const { data } = await api.post<LoginResponse>("/auth/login", { email, password });
    await setToken(data.token);
    return data;
};



export const register = async (payload: {
    nombre: string;
    email: string;
    password: string;
    genero?: string;
    fecha_nacimiento?: string;
    pais?: string;
}) => {
    const { data } = await api.post("/auth/register", payload);
    // Si tu backend devuelve un token al registrarse, lo guardamos
    if (data.token) {
        await AsyncStorage.setItem("token", data.token);
    }
    return data; // { id, nombre, email, token? }
};

export const logout = async () => {
    await removeToken();
};