import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { icons, AlertCircle } from 'lucide-react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card } from '../component/ui/Card';
import { Button } from '../component/ui/Button';
import { ProgressBar } from '../component/ui/ProgressBar';
import { styles } from '../styles/Budgets.style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navegation/type';
import { getBudgetsWithProgress, BudgetProgressDTO } from '../api/budgets';

type RootNav = NativeStackNavigationProp<RootStackParamList>;

export function BudgetsScreen() {
    const navigation = useNavigation<RootNav>();
    const currentMonth = new Date().toLocaleDateString('es-ES', { month: 'long' });
    const [budgets, setBudgets] = useState<BudgetProgressDTO[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadBudgets = async () => {
        try {
            const data = await getBudgetsWithProgress();
            setBudgets(data);
        } catch (error) {
            console.error('Error loading budgets:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadBudgets();
        }, [])
    );

    const onRefresh = async () => {
        setRefreshing(true);
        await loadBudgets();
        setRefreshing(false);
    };

    const totalBudget = budgets.reduce((sum, b) => sum + b.limit, 0);
    const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
    const percentageUsed = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
    const totalRemaining = totalBudget - totalSpent;

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Presupuestos</Text>
                    <Text style={styles.headerSubtitle}>{currentMonth} 2025</Text>
                </View>

                {/* Resumen general */}
                <View style={styles.summaryWrapper}>
                    <Card style={styles.summaryCard}>
                        <View style={styles.summaryRow}>
                            <View>
                                <Text style={styles.summaryLabel}>Presupuesto Total</Text>
                                <Text style={styles.summaryAmount}>
                                    $
                                    {totalBudget.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.summaryLabel}>Gastado</Text>
                                <Text style={styles.summarySpent}>
                                    $
                                    {totalSpent.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })}
                                </Text>
                            </View>
                        </View>

                        <ProgressBar
                            value={percentageUsed}
                            style={styles.summaryProgress}
                        />

                        <View style={styles.summaryFooterRow}>
                            <Text style={styles.summaryFooterText}>
                                {percentageUsed.toFixed(1)}% utilizado
                            </Text>
                            <Text style={styles.summaryFooterRemaining}>
                                $
                                {totalRemaining.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                })}{' '}
                                restante
                            </Text>
                        </View>
                    </Card>
                </View>

                {/* Lista por categoría */}
                <View style={styles.listWrapper}>
                    <View style={styles.listHeaderRow}>
                        <Text style={styles.listTitle}>Por Categoría</Text>
                        <Button onPress={() => navigation.navigate('AddBudget')} style={styles.newButton}>
                            <Text style={styles.newButtonText}>Nuevo</Text>
                        </Button>
                    </View>

                    {budgets.map((b) => {
                        // Cast icon name securely
                        const iconName = b.icon as keyof typeof icons;
                        const IconComponent = icons[iconName] || AlertCircle; // Fallback

                        const over = b.spent >= b.limit;
                        const near = !over && b.usedPercent >= 90;

                        const remainingLabel = over
                            ? `-$${Math.abs(b.remaining).toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })} excedido`
                            : `$${b.remaining.toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })} restante`;

                        return (
                            <TouchableOpacity
                                key={b.id}
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('BudgetDetail', {
                                        budget: {
                                            id: b.id,
                                            categoryName: b.category,
                                            categoryIcon: b.icon,
                                            categoryColor: b.color,
                                            amount: b.limit,
                                            spent: b.spent,
                                            period: 'monthly',
                                            categoryId: b.categoryId,
                                            alertThreshold: 0,
                                            startDate: new Date().toISOString()
                                        }
                                    });
                                }}
                            >
                                <Card style={[styles.budgetCard, over && styles.budgetCardOver]}>
                                    <View style={styles.budgetTopRow}>
                                        <View style={styles.budgetLeft}>
                                            <View
                                                style={[
                                                    styles.budgetIconWrapper,
                                                    { backgroundColor: `${b.color}20` },
                                                ]}
                                            >
                                                <IconComponent
                                                    size={22}
                                                    color={b.color}
                                                />
                                            </View>
                                            <View>
                                                <Text style={styles.budgetName}>{b.category}</Text>
                                                <Text style={styles.budgetLabelSmall}>Gastado</Text>
                                            </View>
                                        </View>
                                        {over && (
                                            <Text style={{ color: '#dc2626', fontSize: 18 }}>!</Text>
                                        )}
                                    </View>

                                    <View style={styles.budgetMiddleRow}>
                                        <Text
                                            style={[
                                                styles.budgetSpent,
                                                over && styles.budgetSpentOver,
                                            ]}
                                        >
                                            $
                                            {b.spent.toLocaleString('es-ES', {
                                                minimumFractionDigits: 2,
                                            })}
                                        </Text>
                                        <Text style={styles.budgetOfText}>
                                            de $
                                            {b.limit.toLocaleString('es-ES', {
                                                minimumFractionDigits: 2,
                                            })}
                                        </Text>
                                    </View>

                                    <ProgressBar
                                        value={Math.min(b.usedPercent, 100)}
                                        style={styles.budgetProgress}
                                    />

                                    <View style={styles.budgetBottomRow}>
                                        <Text style={styles.budgetPercentText}>
                                            {b.usedPercent.toFixed(0)}% utilizado
                                        </Text>
                                        <Text
                                            style={
                                                over
                                                    ? styles.budgetRemainingOver
                                                    : styles.budgetRemainingOk
                                            }
                                        >
                                            {remainingLabel}
                                        </Text>
                                    </View>

                                    {over && (
                                        <View style={styles.alertBoxOver}>
                                            <Text style={styles.alertTextOver}>
                                                Estás excediendo tu presupuesto
                                            </Text>
                                        </View>
                                    )}

                                    {near && (
                                        <View style={styles.alertBoxNear}>
                                            <Text style={styles.alertTextNear}>
                                                Estás cerca del límite de tu presupuesto
                                            </Text>
                                        </View>
                                    )}
                                </Card>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
