import React, { useState } from 'react';
import { BudgetDetailScreen } from '../screen/BudgetDetailScreen';
import { deleteBudget } from '../api/budgets';
import { IconByName } from '../component/IconMapper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navegation/type';
import { LoadingModal } from '../component/LoadingModal';
import { Alert } from 'react-native';

export const BudgetDetailWrapper = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteBudget = async (id: string) => {
        try {
            setIsLoading(true);
            await deleteBudget(id);
            setTimeout(() => {
                setIsLoading(false);
                navigation.goBack();
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            console.error("Failed to delete budget", error);
            Alert.alert("Error", "No se pudo eliminar el presupuesto");
        }
    };

    const getCategoryIcon = (iconName: string, props?: { size?: number; color?: string }) => {
        return <IconByName name={iconName} size={props?.size} color={props?.color} />;
    };

    return (
        <>
            <BudgetDetailScreen
                onDeleteBudget={handleDeleteBudget}
                getCategoryIcon={getCategoryIcon}
            />
            <LoadingModal visible={isLoading} message="Eliminando presupuesto..." />
        </>
    );
};