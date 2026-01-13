import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    ScrollView,
    Text,
    Dimensions,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
    Plus,
    Target
} from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import { Button } from '../component/ui/Button';
import { Card } from '../component/ui/Card';
import { IncomeCard } from '../component/IncomeCard';
import { ExpenseCard } from '../component/ExpenseCard';
import { BalanceCard } from '../component/BalanceCard';
import { SavingsGoalCard } from '../component/SavingsGoalCard';
import { RecentTransactions } from '../component/RecentTransactions';
import { styles } from '../styles/dashboard.style';
import { getDashboardResumen, getDashboardMetaAhorro } from '../api/dashboard';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegation/type';

interface Transaction {
    id: string;
    type: 'ingreso' | 'gasto';
    name: string;
    description: string;
    amount: number;
    category: string;
    date: string;
}

interface DashboardProps {
    onAddIncome: () => void;
    onAddExpense: () => void;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function Dashboard({ onAddIncome, onAddExpense }: DashboardProps) {
    const navigation = useNavigation<NavigationProp>();

    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [monthIncome, setMonthIncome] = useState(0);
    const [monthExpenses, setMonthExpenses] = useState(0);
    const [incomeChange, setIncomeChange] = useState(0);
    const [expenseChange, setExpenseChange] = useState(0);
    const [savingsGoal, setSavingsGoal] = useState<any>(null);
    const [monthlyData, setMonthlyData] = useState<any>({
        labels: [],
        datasets: [{ data: [] }],
    });
    const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);

    const currentMonth = new Date().toLocaleDateString('es-ES', { month: 'long' });

    const fetchData = useCallback(async (isRefresh = false) => {
        try {
            if (isRefresh) {
                setRefreshing(true);
            }
            // We removed setLoading(true) here to avoid the white flash on focus

            const data = await getDashboardResumen();
            setMonthIncome(Number(data?.ingresosMes || 0));
            setMonthExpenses(Number(data?.gastosMes || 0));
            setIncomeChange(Number(data?.incomeChange || 0));
            setExpenseChange(Number(data?.expenseChange || 0));

            const last5MonthsLabels: string[] = [];
            const last5MonthsValues: number[] = [];
            const monthlyDataList = data?.monthly || [];

            for (let i = 4; i >= 0; i--) {
                const date = new Date();
                date.setDate(1);
                date.setMonth(date.getMonth() - i);

                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const key = `${year}-${month}`;

                const monthData = monthlyDataList.find((m: any) => m.mes === key);
                const value = monthData ? (Number(monthData.ingresos) - Number(monthData.gastos)) : 0;

                const monthName = date.toLocaleDateString('es-ES', { month: 'short' });
                const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

                last5MonthsLabels.push(capitalizedMonth);
                last5MonthsValues.push(value);
            }

            setMonthlyData({
                labels: last5MonthsLabels,
                datasets: [{ data: last5MonthsValues }],
            });

            setRecentTransactions(data?.recent || []);

            try {
                const metaData = await getDashboardMetaAhorro();
                // Ensure amounts are numbers (backend might return strings for decimals)
                if (metaData) {
                    metaData.currentAmount = Number(metaData.currentAmount || 0);
                    metaData.targetAmount = Number(metaData.targetAmount || 0);
                }
                setSavingsGoal(metaData);
            } catch (metaErr: any) {
                if (metaErr.response && metaErr.response.status === 404) {
                    setSavingsGoal(null);
                } else {
                    console.log('Error meta ahorro:', metaErr);
                    setSavingsGoal(null);
                }
            }

        } catch (err: any) {
            console.error("Error cargando dashboard:", err);
            setError(err?.response?.data?.error || 'Error cargando dashboard');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [fetchData])
    );

    const onRefresh = useCallback(() => {
        fetchData(true);
    }, [fetchData]);


    const monthBalance = monthIncome - monthExpenses;

    // Show initial loading only if we have no data yet (optional refinement) or strictly on first mount
    if (loading && !monthlyData.labels.length && !error) {
        return (
            <ActivityIndicator
                size="large"
                color="#047857"
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            />
        );
    }

    if (error) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>{String(error)}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#047857']} />
                }
            >
                <View style={styles.cardsContainer}>
                    <IncomeCard
                        amount={monthIncome}
                        change={incomeChange}
                        month={currentMonth}
                    />
                    <ExpenseCard
                        amount={monthExpenses}
                        change={expenseChange}
                    />
                    <BalanceCard
                        amount={monthBalance}
                        percentage={monthIncome ? ((monthBalance / monthIncome) * 100) : 0}
                    />
                </View>

                <View style={styles.actionsGrid}>
                    <Button
                        style={styles.primaryButton}
                        onPress={onAddIncome}
                    >
                        <Plus size={20} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>Ingreso</Text>
                    </Button>
                    <Button
                        style={styles.outlineButton}
                        onPress={onAddExpense}
                    >
                        <Plus size={20} color="#10b981" style={styles.icon} />
                        <Text style={styles.outlineButtonText}>Gasto</Text>
                    </Button>
                </View>

                {savingsGoal ? (
                    <SavingsGoalCard
                        goal={savingsGoal}
                        onPress={() => navigation.navigate('SavingsGoalDetail', { id: savingsGoal.id })}
                    />
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('AddSavingsGoal')}
                        style={{ marginHorizontal: 24, marginBottom: 24 }}
                    >
                        <Card style={{
                            padding: 0,
                            overflow: 'hidden',
                            borderRadius: 24,
                            borderWidth: 1,
                            borderColor: '#e9d5ff',
                            elevation: 2,
                            shadowColor: '#7c3aed',
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            shadowOffset: { width: 0, height: 4 }
                        }}>
                            <LinearGradient
                                colors={['#ffffff', '#f5f3ff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ padding: 24 }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 18,
                                        backgroundColor: '#f3e8ff',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: 16,
                                        borderWidth: 1,
                                        borderColor: '#d8b4fe'
                                    }}>
                                        <Target size={28} color="#7c3aed" />
                                    </View>
                                    <View style={{ flex: 1, marginRight: 8 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#2e1065', marginBottom: 4 }}>
                                            Metas de Ahorro
                                        </Text>
                                        <Text style={{ fontSize: 14, color: '#5b21b6', lineHeight: 20 }}>
                                            Establece una meta y comienza a ahorrar.
                                        </Text>
                                    </View>
                                    <View style={{
                                        backgroundColor: '#7c3aed',
                                        width: 36,
                                        height: 36,
                                        borderRadius: 18,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        shadowColor: '#7c3aed',
                                        shadowOpacity: 0.3,
                                        shadowRadius: 4,
                                        elevation: 4
                                    }}>
                                        <Plus size={20} color="white" />
                                    </View>
                                </View>
                            </LinearGradient>
                        </Card>
                    </TouchableOpacity>
                )}

                <Card style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <Text style={styles.chartTitle}>Balance Últimos 5 Meses</Text>
                        <Text style={styles.chartSubtitle}>Evolución del ahorro mensual</Text>
                    </View>
                    <LineChart
                        data={monthlyData}
                        width={Dimensions.get('window').width - 48}
                        height={200}
                        chartConfig={{
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
                            strokeWidth: 3,
                            barPercentage: 0.5,
                        }}
                        bezier
                        style={styles.chart}
                    />
                </Card>

                <RecentTransactions transactions={recentTransactions} />
            </ScrollView>
        </SafeAreaView>
    );
}
