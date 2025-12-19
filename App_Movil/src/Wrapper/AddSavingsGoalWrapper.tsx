import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AddSavingsGoalScreen } from '../screen/AddSavingsGoalScreen';
import { createSavingsGoal } from '../api/savingsGoals';
import { Alert } from 'react-native';

export const AddSavingsGoalWrapper = () => {
    const navigation = useNavigation();

    const handleAddGoal = async (goalData: any) => {
        try {
            await createSavingsGoal(goalData);
            // Alert is handled in screen or here, but screen has it. Just navigate back.
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo crear la meta de ahorro");
        }
    };

    return (
        <AddSavingsGoalScreen
            onClose={() => navigation.goBack()}
            onAddGoal={handleAddGoal}
        />
    );
};
