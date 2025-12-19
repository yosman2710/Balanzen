import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SavingsGoalDetailScreen } from '../screen/SavingsGoalDetailScreen';
import { getSavingsGoalById, addContribution, deleteContribution, deleteSavingsGoal } from '../api/savingsGoals';
import { Alert, ActivityIndicator, View } from 'react-native';
import { RootStackParamList } from '../navegation/type';

type SavingsGoalDetailRouteProp = RouteProp<RootStackParamList, 'SavingsGoalDetail'>;

export const SavingsGoalDetailWrapper = () => {
    const navigation = useNavigation();
    const route = useRoute<SavingsGoalDetailRouteProp>();
    const { id } = route.params;

    const [goal, setGoal] = useState<any>(null);
    const [contributions, setContributions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchGoalDetails = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getSavingsGoalById(id);
            // Assuming data structure: { goal: ..., contributions: ... } or flat
            // Adjust based on actual API response. Assuming data contains everything or flat object.
            // If data is just the goal with included contributions:
            setGoal(data);
            setContributions(data.contributions || []);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudieron cargar los detalles de la meta");
            navigation.goBack();
        } finally {
            setLoading(false);
        }
    }, [id, navigation]);

    useEffect(() => {
        fetchGoalDetails();
    }, [fetchGoalDetails]);

    const handleAddContribution = async (goalId: string, amount: number, note?: string) => {
        try {
            await addContribution(goalId, { amount, note });
            fetchGoalDetails(); // Refresh
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo registrar la contribución");
        }
    };

    const handleDeleteContribution = async (goalId: string, contributionId: string) => {
        try {
            await deleteContribution(goalId, contributionId);
            fetchGoalDetails(); // Refresh
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo eliminar la contribución");
        }
    };

    const handleDeleteGoal = async (goalId: string) => {
        try {
            await deleteSavingsGoal(goalId);
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo eliminar la meta");
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#7c3aed" />
            </View>
        );
    }

    if (!goal) return null;

    return (
        <SavingsGoalDetailScreen
            goal={goal}
            contributions={contributions}
            onClose={() => navigation.goBack()}
            onAddContribution={handleAddContribution}
            onDeleteContribution={handleDeleteContribution}
            onDeleteGoal={handleDeleteGoal}
        />
    );
};
