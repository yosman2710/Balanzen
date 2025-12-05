// src/screen/AddTransactionWrapper.tsx
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AddTransactionScreen } from '../screen/AddTransactionScreen';
import { categoriesMock } from '../components/categories'; // tus categorías simuladas
// Mock handler - cámbialo por tu lógica real después
const mockAddTransaction = (transaction: any) => {
    console.log('Nueva transacción:', transaction);
    // aquí guardas en Redux/DB/localStorage
};

export const AddTransactionWrapper = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <AddTransactionScreen
            categories={categoriesMock}
            onAddTransaction={mockAddTransaction}
        />
    );
};
