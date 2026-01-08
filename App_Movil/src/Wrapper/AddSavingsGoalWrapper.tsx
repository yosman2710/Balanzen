import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AddSavingsGoalScreen } from '../screen/AddSavingsGoalScreen';
import { createSavingsGoal } from '../api/savingsGoals';
import { Alert } from 'react-native';
import { LoadingModal } from '../component/LoadingModal';

export const AddSavingsGoalWrapper = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    const handleAddGoal = async (goalData: any) => {
        try {
            setIsLoading(true);
            await createSavingsGoal(goalData);
            // Wait a bit to show completion or ensure state settles
            setTimeout(() => {
                setIsLoading(false);
                navigation.goBack();
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            Alert.alert("Error", "No se pudo crear la meta de ahorro");
        }
    };

    return (
        <>
            <AddSavingsGoalScreen
                onClose={() => navigation.goBack()}
                onAddGoal={handleAddGoal}
            />
            <LoadingModal visible={isLoading} message="Creando meta de ahorro..." />
        </>
    );
};
