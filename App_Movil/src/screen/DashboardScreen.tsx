import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    ScrollView,
    Text,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import {
    TrendingUp,
    ArrowDownRight,
    Plus
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
import { getDashboardResumen, getDashboardMetaAhorro } from '../api/dashboard'; // 👈 tu cliente axios con interceptor

interface Transaction {
    id: string;
    type: 'income' | 'expense';
    description: string;
    amount: number;
    category: string;
    date: string;
}

interface DashboardProps {
    onAddIncome: () => void;
    onAddExpense: () => void;
}

export function Dashboard({ onAddIncome, onAddExpense }: DashboardProps) {
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // 1. Obtener Resumen Dashboard
                // getDashboardResumen devuelve la data directamente (sin envoltorio "data" extra)
                const data = await getDashboardResumen();

                setMonthIncome(Number(data.ingresosMes));
                setMonthExpenses(Number(data.gastosMes));
                setIncomeChange(Number(data.incomeChange || 0));
                setExpenseChange(Number(data.expenseChange || 0));

                // Generar los últimos 5 meses
                const last5MonthsLabels: string[] = [];
                const last5MonthsValues: number[] = [];

                for (let i = 4; i >= 0; i--) {
                    const date = new Date();
                    date.setDate(1);
                    date.setMonth(date.getMonth() - i);

                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const key = `${year}-${month}`;

                    const monthData = data.monthly.find((m: any) => m.mes === key);
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

                setRecentTransactions(data.recent);

                // 2. Obtener Meta de Ahorro (Manejo de error independiente 404)
                try {
                    const metaData = await getDashboardMetaAhorro();
                    setSavingsGoal(metaData);
                } catch (metaErr: any) {
                    if (metaErr.response && metaErr.response.status === 404) {
                        setSavingsGoal(null);
                    } else {
                        console.log('Error meta ahorro:', metaErr);
                    }
                }

            } catch (err: any) {
                console.error("Error cargando dashboard:", err);
                setError(err?.response?.data?.error || 'Error cargando dashboard');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const monthBalance = monthIncome - monthExpenses;

    if (loading) return <ActivityIndicator size="large" color="#047857" />;
    if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Tarjetas principales */}
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

                {/* Acciones rápidas */}
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

                {/* Meta de ahorro */}
                {savingsGoal && <SavingsGoalCard goal={savingsGoal} />}

                {/* Gráfica */}
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

                {/* Transacciones recientes */}
                <RecentTransactions transactions={recentTransactions} />
            </ScrollView>
        </SafeAreaView>
    );
}