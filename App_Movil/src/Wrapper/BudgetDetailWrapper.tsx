import React from 'react';
import { BudgetDetailScreen } from '../screen/BudgetDetailScreen';
import { deleteBudget } from '../api/budgets';
import { IconByName } from '../component/IconMapper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navegation/type';

export const BudgetDetailWrapper = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleDeleteBudget = async (id: string) => {
        try {
            await deleteBudget(id);
            navigation.goBack();
        } catch (error) {
            console.error("Failed to delete budget", error);
        }
    };

    const getCategoryIcon = (iconName: string, props?: { size?: number; color?: string }) => {
        return <IconByName name={iconName} size={props?.size} color={props?.color} />;
    };

    return (
        <BudgetDetailScreen
            onDeleteBudget={handleDeleteBudget}
            getCategoryIcon={getCategoryIcon}
        />
    );
};