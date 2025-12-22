// src/wrappers/AddCategoryWrapper.tsx
import React from 'react';
import { AddCategoryScreen } from '../screen/AddCategoryScreen';
import { useNavigation } from '@react-navigation/native';
import { createCategory } from '../api/categories';

export const AddCategoryWrapper = () => {
    const navigation = useNavigation<any>();

    const handleAddCategory = (category: any) => {
        console.log('Nueva categoría:', category);
        createCategory(category);
        navigation.goBack(); // ← Regresa a Categories
    };

    return (
        <AddCategoryScreen
            onClose={() => navigation.goBack()}
            onAddCategory={handleAddCategory}
        />
    );
};
