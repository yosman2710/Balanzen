import React from 'react';
import { View, Text } from 'react-native';
import { Target } from 'lucide-react-native';
import { Card } from './ui/Card';
import { ProgressBar } from './ui/ProgressBar';
import { styles } from '../styles/dashboard.style';

interface SavingsGoal {
    name: string;
    current: number;
    target: number;
    percentage: number;
}

interface SavingsGoalCardProps {
    goal: SavingsGoal;
}

export const SavingsGoalCard: React.FC<SavingsGoalCardProps> = ({ goal }) => {
    return (
        <Card style={styles.savingsCard}>
            <View style={styles.savingsHeader}>
                <View style={styles.savingsHeaderLeft}>
                    <View style={styles.savingsIconCircle}>
                        <Target size={18} color="#7c3aed" />
                    </View>
                    <View>
                        <Text style={styles.savingsTitle}>{goal.name}</Text>
                        <Text style={styles.savingsSubtitle}>Meta de ahorro</Text>
                    </View>
                </View>
            </View>

            <View style={styles.savingsAmountsRow}>
                <Text style={styles.savingsCurrent}>
                    ${goal.current.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                </Text>
                <Text style={styles.savingsTarget}>
                    ${goal.target.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                </Text>
            </View>

            <ProgressBar value={goal.percentage} style={styles.savingsProgress} />

            <Text style={styles.savingsPercentText}>
                {goal.percentage.toFixed(1)}% completado
            </Text>
        </Card>
    );
};
