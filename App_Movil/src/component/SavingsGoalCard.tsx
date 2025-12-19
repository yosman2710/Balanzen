import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Target } from 'lucide-react-native';
import { Card } from './ui/Card';
import { LinearGradient } from 'expo-linear-gradient';

interface SavingsGoal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
}

interface SavingsGoalCardProps {
    goal: SavingsGoal;
    onPress?: () => void;
}

export const SavingsGoalCard: React.FC<SavingsGoalCardProps> = ({ goal, onPress }) => {
    // Calculate percentage, cap at 100 for storage/display if needed
    const percentage = goal.targetAmount > 0
        ? Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)
        : 0;

    // Wrapper component to handle onPress if provided, otherwise View
    const Wrapper = onPress ? TouchableOpacity : View;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.9} style={{ marginBottom: 24, marginHorizontal: 24 }}>
            <Card
                style={{
                    padding: 0,
                    overflow: 'hidden',
                    borderColor: '#ddd6fe',
                    borderWidth: 1,
                    borderRadius: 16
                }}
            >
                <LinearGradient
                    colors={['#f5f3ff', '#faf5ff']}
                    style={{ padding: 20, gap: 20 }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                backgroundColor: '#ede9fe',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Target size={20} color="#7c3aed" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#0f172a' }}>{goal.name}</Text>
                                <Text style={{ fontSize: 14, color: '#475569' }}>Meta de ahorro</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#7c3aed', fontSize: 14, fontWeight: '500' }}>
                            Ver detalles
                        </Text>
                    </View>

                    <View style={{ gap: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, color: '#475569' }}>
                                ${goal.currentAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                            </Text>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#0f172a' }}>
                                ${goal.targetAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                            </Text>
                        </View>

                        {/* Custom Progress Bar */}
                        <View style={{ height: 12, backgroundColor: '#ddd6fe', borderRadius: 999, overflow: 'hidden' }}>
                            <View style={{
                                height: '100%',
                                width: `${percentage}%`,
                                backgroundColor: '#7c3aed',
                                borderRadius: 999
                            }} />
                        </View>

                        <Text style={{ fontSize: 14, color: '#7c3aed' }}>
                            {percentage.toFixed(1)}% completado
                        </Text>
                    </View>
                </LinearGradient>
            </Card>
        </Wrapper>
    );
};
