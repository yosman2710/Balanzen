// src/screen/AddBudgetWrapper.tsx
import React, { useState, useEffect } from 'react';
import { AddBudgetScreen } from '../screen/AddBudgetScreen';
import { getCategories, CategoryDTO } from '../api/categories';
import { createBudget } from '../api/budgets';

export const AddBudgetWrapper = () => {
    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(data);
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }
    };

    const handleAddBudget = async (budget: any) => {
        try {
            // Adaptar los datos del formulario al DTO del backend
            // El formulario envía: { categoryId, amount, period, alertThreshold }
            // El backend espera: { id_categoria, monto_limite, fecha_inicio, fecha_final, alerta }

            const now = new Date();
            const startDate = now.toISOString().split('T')[0];

            // Calcular fecha final según el periodo
            const endDate = new Date();
            if (budget.period === 'weekly') {
                endDate.setDate(endDate.getDate() + 7);
            } else if (budget.period === 'monthly') {
                endDate.setMonth(endDate.getMonth() + 1);
            } else if (budget.period === 'yearly') {
                endDate.setFullYear(endDate.getFullYear() + 1);
            }

            const budgetDTO = {
                id_categoria: budget.categoryId,
                monto_limite: budget.amount,
                fecha_inicio: startDate,
                fecha_final: endDate.toISOString().split('T')[0],
                alerta: budget.alertThreshold
            };

            await createBudget(budgetDTO);
            console.log('Presupuesto creado con éxito');
            // Podrías agregar una notificación o callback aquí si es necesario
        } catch (error) {
            console.error('Error al crear presupuesto:', error);
            // Manejar error (mostrar alerta, etc.)
        }
    };

    return (
        <AddBudgetScreen
            categories={categories}
            onAddBudget={handleAddBudget}
        />
    );
};
