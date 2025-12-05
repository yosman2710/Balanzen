import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { icons } from 'lucide-react-native';
import { Card } from '../component/ui/Card';
import { Button } from '../component/ui/Button';
import { ProgressBar } from '../component/ui/ProgressBar';
import { styles } from '../styles/Budgets.style';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navegation/type'; // ajusta la ruta

type RootNav = NativeStackNavigationProp<RootStackParamList>;
interface Budget {
    id: string;
    name: string;
    iconName: keyof typeof icons | string; // <- acepta string de BD
    iconBgColor: string;
    spent: number;
    budget: number;
}



export function BudgetsScreen() {
    const navigation = useNavigation<RootNav>();
    const currentMonth = new Date().toLocaleDateString('es-ES', { month: 'long' });

    // Datos simulados como si vinieran de la base de datos
    const budgets: Budget[] = [
        {
            id: '1',
            name: 'Alimentación',
            iconName: 'ShoppingCart',
            iconBgColor: '#fde68a', // amarillo
            spent: 850,
            budget: 1000,
        },
        {
            id: '2',
            name: 'Vivienda',
            iconName: 'House',
            iconBgColor: '#bae6fd', // azul claro
            spent: 1200,
            budget: 1200,
        },
        {
            id: '3',
            name: 'Transporte',
            iconName: 'Car',
            iconBgColor: '#c7d2fe', // violeta claro
            spent: 145,
            budget: 200,
        },
        {
            id: '4',
            name: 'Entretenimiento',
            iconName: 'Coffee',
            iconBgColor: '#fbcfe8', // rosa claro
            spent: 280,
            budget: 400,
        },
        {
            id: '5',
            name: 'Servicios',
            iconName: 'Zap',
            iconBgColor: '#fef08a', // amarillo fuerte
            spent: 280,
            budget: 300,
        },
    ];

    const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
    const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
    const percentageUsed = (totalSpent / totalBudget) * 100;
    const totalRemaining = totalBudget - totalSpent;

    const getPercentage = (spent: number, budget: number) =>
        (spent / budget) * 100;

    const isOverBudget = (spent: number, budget: number) => spent >= budget;

    const isNearLimit = (spent: number, budget: number) => {
        const p = getPercentage(spent, budget);
        return p >= 90 && p < 100;
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
                        const IconComponent = icons[b.iconName as keyof typeof icons];
                        const percentage = getPercentage(b.spent, b.budget);
                        const over = isOverBudget(b.spent, b.budget);
                        const near = isNearLimit(b.spent, b.budget);
                        const remaining = b.budget - b.spent;

                        const remainingLabel = over
                            ? `-$${Math.abs(remaining).toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })} excedido`
                            : `$${remaining.toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })} restante`;

                        return (
                            <Card
                                key={b.id}
                                style={[styles.budgetCard, over && styles.budgetCardOver]}
                            >
                                <View style={styles.budgetTopRow}>
                                    <View style={styles.budgetLeft}>
                                        <View
                                            style={[
                                                styles.budgetIconWrapper,
                                                { backgroundColor: b.iconBgColor },
                                            ]}
                                        >
                                            {IconComponent && (
                                                <IconComponent
                                                    size={22}
                                                    color={over ? '#dc2626' : '#059669'}
                                                />
                                            )}
                                        </View>
                                        <View>
                                            <Text style={styles.budgetName}>{b.name}</Text>
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
                                        {b.budget.toLocaleString('es-ES', {
                                            minimumFractionDigits: 2,
                                        })}
                                    </Text>
                                </View>

                                <ProgressBar
                                    value={Math.min(percentage, 100)}
                                    style={styles.budgetProgress}
                                />

                                <View style={styles.budgetBottomRow}>
                                    <Text style={styles.budgetPercentText}>
                                        {percentage.toFixed(0)}% utilizado
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

                                {near && !over && (
                                    <View style={styles.alertBoxNear}>
                                        <Text style={styles.alertTextNear}>
                                            Estás cerca del límite de tu presupuesto
                                        </Text>
                                    </View>
                                )}
                            </Card>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
