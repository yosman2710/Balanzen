import React from 'react';
import { BudgetDetailScreen } from '../screen/BudgetDetailScreen';
import { deleteBudget } from '../api/budgets';
import { IconByName } from '../component/IconMapper';

export const BudgetDetailWrapper = () => {

    const handleDeleteBudget = async (id: string) => {
        try {
            await deleteBudget(id);
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