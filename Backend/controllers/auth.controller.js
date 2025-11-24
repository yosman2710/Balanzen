import {loginUserService, registerUserService} from '../services/auth.service';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginUserService(email, password);
        res.status(200).json({
            ...user,
            message: 'Login exitoso'
        });
    } catch (err) {
        res.status(err.status || 500).json({
            error: err.message || 'Error del servidor'
        });
    }
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;
     // 👈 Asegúrate de estandarizar esto en el frontend también
    try {
        const userId = await registerUserService(name, email, password);
        res.status(201).json({ message: "Usuario creado correctamente", userId });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
    }
};