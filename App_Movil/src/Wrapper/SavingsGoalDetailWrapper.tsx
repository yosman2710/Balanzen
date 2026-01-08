import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SavingsGoalDetailScreen } from '../screen/SavingsGoalDetailScreen';
import { getSavingsGoalById, addContribution, deleteContribution, deleteSavingsGoal } from '../api/savingsGoals';
import { Alert, ActivityIndicator, View, Text } from 'react-native';
import { RootStackParamList } from '../navegation/type';
import { LoadingModal } from '../component/LoadingModal';

type SavingsGoalDetailRouteProp = RouteProp<RootStackParamList, 'SavingsGoalDetail'>;


export const SavingsGoalDetailWrapper = () => {
    const navigation = useNavigation();
    const route = useRoute<SavingsGoalDetailRouteProp>();
    const { id } = route.params;

    const [goal, setGoal] = useState<any>(null);
    const [contributions, setContributions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false); // For delete/update actions

    const fetchGoalDetails = useCallback(async () => {
        try {
            setLoading(true);
            const data = await getSavingsGoalById(id);
            console.log("Goal Data:", JSON.stringify(data));

            // Handle potential nested structures
            const goalObj = data.goal || data.metaAhorro || data;
            const contribs = data.contributions || data.contribuciones || [];

            setGoal(goalObj);
            setContributions(contribs);
        } catch (error) {
            console.error("Fetch Error:", error);
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
            setProcessing(true);
            await addContribution(goalId, { amount, note });
            await fetchGoalDetails(); // Refresh
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo registrar la contribución");
        } finally {
            setProcessing(false);
        }
    };

    const handleDeleteContribution = async (goalId: string, contributionId: string) => {
        try {
            setProcessing(true);
            await deleteContribution(goalId, contributionId);
            await fetchGoalDetails(); // Refresh
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "No se pudo eliminar la contribución");
        } finally {
            setProcessing(false);
        }
    };

    const handleDeleteGoal = async (goalId: string) => {
        try {
            setProcessing(true);
            await deleteSavingsGoal(goalId);
            setTimeout(() => {
                setProcessing(false);
                navigation.goBack();
            }, 1000);
        } catch (error) {
            setProcessing(false);
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

    if (!goal) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No se encontró la información de la meta.</Text>
            </View>
        );
    }

    return (
        <>
            <SavingsGoalDetailScreen
                goal={goal}
                contributions={contributions}
                onClose={() => navigation.goBack()}
                onAddContribution={handleAddContribution}
                onDeleteContribution={handleDeleteContribution}
                onDeleteGoal={handleDeleteGoal}
            />
            <LoadingModal visible={processing} message="Procesando..." />
        </>
    );
};
