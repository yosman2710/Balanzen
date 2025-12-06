// src/wrappers/CategoriesWrapper.tsx
import React from 'react';
import { CategoriesScreen } from '../screen/CategoriesScreen';
import { categoriesMock } from '../components/categories';
import { useNavigation } from '@react-navigation/native';

export const CategoriesWrapper = () => {
    const navigation = useNavigation<any>();

    const handleAddCategory = () => {
        navigation.navigate('AddCategory');
    };

    const handleDeleteCategory = (categoryId: string) => {
        console.log('Eliminar:', categoryId);
    };

    const handleViewCategory = (categoryId: string) => {
        console.log('Ver:', categoryId);
    };

    return (
        <CategoriesScreen
            categories={categoriesMock}
            onAddCategory={handleAddCategory}
            onDeleteCategory={handleDeleteCategory}
            onViewCategory={handleViewCategory}
            onClose={() => navigation.goBack()}
        />
    );
};
