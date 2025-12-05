// src/screen/AddBudgetWrapper.tsx
import React from 'react';
import { AddBudgetScreen } from '../screen/AddBudgetScreen';
import { categoriesMock } from '../components/categories';

const mockAddBudget = (budget: any) => {
    console.log('Nuevo presupuesto:', budget);
    // aquí tu lógica real
};

export const AddBudgetWrapper = () => {
    return (
        <AddBudgetScreen
            categories={categoriesMock}
            onAddBudget={mockAddBudget}
        />
    );
};
