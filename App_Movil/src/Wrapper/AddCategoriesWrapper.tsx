// src/wrappers/AddCategoryWrapper.tsx
import React from 'react';
import { AddCategoryScreen } from '../screen/AddCategoryScreen';
import { useNavigation } from '@react-navigation/native';

export const AddCategoryWrapper = () => {
    const navigation = useNavigation<any>();

    const handleAddCategory = (category: any) => {
        console.log('Nueva categoría:', category);
        navigation.goBack(); // ← Regresa a Categories
    };

    return (
        <AddCategoryScreen
            onClose={() => navigation.goBack()}
            onAddCategory={handleAddCategory}
        />
    );
};
