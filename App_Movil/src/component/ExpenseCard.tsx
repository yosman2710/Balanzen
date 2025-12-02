import React from 'react';
import { View, Text } from 'react-native';
import { ArrowUpRight, TrendingDown } from 'lucide-react-native';
import { Card } from './ui/Card';
import { styles } from '../styles/dashboard.style';

interface ExpenseCardProps {
    amount: number;
    change: number;
}

export const ExpenseCard: React.FC<ExpenseCardProps> = ({ amount, change }) => {
    return (
        <Card style={styles.expenseCard}>
            <View style={styles.cardIconTopRight}>
                <TrendingDown size={18} color="rgba(220,38,38,0.4)" />
            </View>

            <View style={styles.cardIconLeft}>
                <View style={styles.expenseIconCircle}>
                    <ArrowUpRight size={18} color="#dc2626" />
                </View>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.expenseLabel}>Egresos del Mes</Text>
                <Text style={styles.expenseAmount}>
                    ${amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
                <Text style={styles.cardSubPositive}>
                    {change}% vs mes anterior
                </Text>
            </View>
        </Card>
    );
};
