import React from 'react';
import { View, Text } from 'react-native';
import { ArrowDownRight, TrendingUp } from 'lucide-react-native';
import { Card } from './ui/Card';
import { styles } from '../styles/dashboard.style';

interface IncomeCardProps {
    amount: number;
    change: number;
    month: string;
}

export const IncomeCard: React.FC<IncomeCardProps> = ({ amount, change, month }) => {
    return (
        <Card style={styles.incomeCard}>
            <View style={styles.cardIconTopRight}>
                <TrendingUp size={18} color="rgba(22,163,74,0.4)" />
            </View>

            <View style={styles.cardIconLeft}>
                <View style={styles.incomeIconCircle}>
                    <ArrowDownRight size={18} color="#16a34a" />
                </View>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.cardLabel}>Ingresos del Mes</Text>
                <Text style={styles.cardAmount}>
                    ${amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
                <Text style={styles.cardSubPositive}>
                    +{change}% vs mes anterior
                </Text>
            </View>
        </Card>
    );
};
