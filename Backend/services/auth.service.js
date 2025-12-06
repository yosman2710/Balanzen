import jwt from 'jsonwebtoken';
import md5 from 'md5';
import { findUserByEmail, createUsuario } from '../models/usuarios.model.js';

export const registerUserService = async (name, email, password) => {
    if (!name || !email || !password) {
        throw { status: 400, message: 'Todos los campos son requeridos' };
    }

    const existingUsers = await findUserByEmail(email);
    if (existingUsers.length > 0) {
        throw { status: 400, message: 'Correo ya registrado' };
    }

    const hashedPassword = md5(password);
    return await createUsuario(name, email, hashedPassword);
};

export const loginUserService = async (email, password) => {
    if (!email || !password) {
        throw { status: 400, message: 'Email y contraseña son requeridos' };
    }

    const users = await findUserByEmail(email);
    const hashedPassword = md5(password);

    if (users.length === 0 || users[0].password !== hashedPassword) {
        throw { status: 401, message: 'Credenciales inválidas' };
    }

    const user = users[0];

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
    };
};

