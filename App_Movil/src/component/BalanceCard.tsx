import React from 'react';
import { View, Text } from 'react-native';
import { Wallet, DollarSign } from 'lucide-react-native';
import { Card } from './ui/Card';
import { styles } from '../styles/dashboard.style';

interface BalanceCardProps {
    amount: number;
    percentage: number;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ amount, percentage }) => {
    return (
        <Card style={styles.balanceCard}>
            <View style={styles.cardIconTopRight}>
                <DollarSign size={18} color="rgba(37,99,235,0.4)" />
            </View>

            <View style={styles.cardIconLeft}>
                <View style={styles.balanceIconCircle}>
                    <Wallet size={18} color="#2563eb" />
                </View>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.balanceLabel}>Balance Total del Mes</Text>
                <Text style={styles.balanceAmount}>
                    ${amount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Text>
                <Text style={styles.balanceSub}>
                    {percentage.toFixed(1)}% de ahorro
                </Text>
            </View>
        </Card>
    );
};
