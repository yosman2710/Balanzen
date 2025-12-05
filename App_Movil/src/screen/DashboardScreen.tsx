import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    ScrollView,
    Text,
    Dimensions,
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
    const [showMenu, setShowMenu] = useState(false);

    const currentMonth = new Date().toLocaleDateString('es-ES', { month: 'long' });
    const monthIncome = 5200.00;
    const monthExpenses = 3180.50;
    const monthBalance = monthIncome - monthExpenses;
    const incomeChange = 8;
    const expenseChange = -5;

    const savingsGoal = {
        name: 'Vacaciones de verano',
        current: 4270.30,
        target: 8000.00,
        percentage: (4270.30 / 8000.00) * 100,
    };

    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`,
        strokeWidth: 3,
        barPercentage: 0.5,
    };

    const monthlyData = {
        labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov'],
        datasets: [{ data: [1850, 1920, 1780, 2100, 2020] }],
    };

    const recentTransactions: Transaction[] = [
        {
            id: '1',
            type: 'income',
            description: 'Salario mensual',
            amount: 5200.00,
            category: 'Trabajo',
            date: '2025-11-20',
        },
        {
            id: '2',
            type: 'expense',
            description: 'Supermercado',
            amount: 120.50,
            category: 'Alimentación',
            date: '2025-11-19',
        },
        {
            id: '3',
            type: 'expense',
            description: 'Netflix',
            amount: 12.99,
            category: 'Entretenimiento',
            date: '2025-11-18',
        },
    ];

    const renderTransactionIcon = (type: string) => {
        if (type === 'income') {
            return <TrendingUp color="#10b981" size={20} />;
        }
        return <ArrowDownRight color="#ef4444" size={20} />;
    };

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
                        percentage={((monthBalance / monthIncome) * 100)}
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
                <SavingsGoalCard goal={savingsGoal} />

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
                        chartConfig={chartConfig}
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
