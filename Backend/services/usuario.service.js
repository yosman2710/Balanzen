import { getUserByIdFromDB, updateUser } from "../models/usuarios.model.js";

export const getUserByIdService = async (id) => {
    return await getUserByIdFromDB(id);
};

export const updateUserService = async (id, usuario) => {
    return await updateUser(id, usuario);
};
