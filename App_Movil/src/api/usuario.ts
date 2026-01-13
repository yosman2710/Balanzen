import { api } from "./client";

export type Usuario = {
    id: number;
    nombre: string;
    email: string;
    password: string;
    fecha_nacimiento: string;
    genero: string;
    pais: string;
};
export type UsuarioResponse = {
    nombre: string;
    email: string;
    fecha_nacimiento: string;
    genero: string;
    pais: string;
};

export const getUserById = async (userId: string) => {
    const { data } = await api.get(`/usuario/${userId}`);
    return data;
};

export const updateUsuario = async (userId: string, usuario: UsuarioResponse) => {
    console.log('Actualizando usuario:', usuario);
    const { data } = await api.put(`/usuario/${userId}`, usuario);
    return data;
};