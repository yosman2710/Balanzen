// src/screen/AddTransactionWrapper.tsx
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AddTransactionScreen } from '../screen/AddTransactionScreen'; // tus categorías simuladas

export const AddTransactionWrapper = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <AddTransactionScreen
        />
    );
};