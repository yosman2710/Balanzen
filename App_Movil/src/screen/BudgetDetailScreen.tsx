// src/screens/BudgetDetailScreen.tsx
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    AlertCircle,
    TrendingUp,
    Calendar,
    Trash2,
    DollarSign,
    Target,
    Bell,
    ShoppingCart,
} from 'lucide-react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { styles } from '../styles/BudgetDetail.style';
import { iconMap } from '../component/IconMapper';
import { getBudgetById } from '../api/budgets';

// Defines the structure of the data returned by the API
interface BudgetData {
    budget: {
        id: string;
        categoryId: string;
        categoryName: string;
        categoryIcon: string;
        categoryColor: string;
        amount: number;
        spent: number;
        endDate: string;
        alertThreshold: number;
        startDate: string;
    };
    transactions: Array<{
        id: string;
        description: string;
        amount: number;
        date: string;
    }>;
}

interface BudgetDetailScreenProps {
    onDeleteBudget: (budgetId: string) => void;
    getCategoryIcon: (iconName: string, props?: { size?: number; color?: string }) => React.ReactNode;
}

export const BudgetDetailScreen: React.FC<BudgetDetailScreenProps> = ({
    onDeleteBudget,
    getCategoryIcon,
}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as { id: string };

    const [budgetData, setBudgetData] = useState<BudgetData | null>(null);
    const [loading, setLoading] = useState(true);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const fetchBudgetDetails = async () => {
        try {
            setLoading(true);
            const data = await getBudgetById(id);
            if (data) {
                setBudgetData(data);
            }
        } catch (error) {
            console.error("Error al obtener detalles del presupuesto:", error);
            Alert.alert("Error", "No se pudo cargar la información del presupuesto.");
            navigation.goBack();
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchBudgetDetails();
        }, [id])
    );

    const percentage = useMemo(() => {
        if (!budgetData?.budget) return 0;
        return budgetData.budget.amount > 0 ? (budgetData.budget.spent / budgetData.budget.amount) * 100 : 0;
    }, [budgetData?.budget.spent, budgetData?.budget.amount]);

    const remaining = useMemo(() => {
        if (!budgetData?.budget) return 0;
        return budgetData.budget.amount - budgetData.budget.spent;
    }, [budgetData?.budget.amount, budgetData?.budget.spent]);

    const isOverBudget = (budgetData?.budget.spent ?? 0) >= (budgetData?.budget.amount ?? 0);
    const isNearLimit = percentage >= (budgetData?.budget.alertThreshold ?? 80) && percentage < 100;

    const getPeriodText = () => {
        if (!budgetData?.budget) return '';
        const startDate = new Date(budgetData.budget.startDate);
        const endDate = new Date(budgetData.budget.endDate);
        const diffInTime = endDate.getTime() - startDate.getTime();
        const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

        if (diffInDays <= 7) return 'Semanal';
        else if (diffInDays <= 30) return 'Mensual';
        else return 'Anual';
    };

    const handleDeleteBudget = () => {
        if (!budgetData?.budget) return;
        onDeleteBudget(budgetData.budget.id);
        Alert.alert('Presupuesto eliminado', 'El presupuesto ha sido eliminado correctamente');
        setShowDeleteConfirm(false);
        navigation.goBack();
    };


    const getDefaultIcon = (iconName: string, size = 24, color = '#059669') => {
        const IconComponent = iconMap[iconName] ?? ShoppingCart;
        return <IconComponent size={size} color={color} />;
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#059669" />
            </SafeAreaView>
        );
    }

    if (!budgetData) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <ArrowLeft size={20} color="#ffffff" />
                        <Text style={styles.backText}>Volver</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text>No se pudo cargar la información.</Text>
                </View>
            </SafeAreaView>
        );
    }

    const { budget, transactions } = budgetData;

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: '#059669' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>
                <View style={styles.headerTop}>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>{budget.categoryName}</Text>
                        <Text style={styles.headerSubtitle}>Presupuesto {getPeriodText()}</Text>
                    </View>
                    <View style={[styles.headerIcon, { backgroundColor: `${budget.categoryColor}40` }]}>
                        {getCategoryIcon ? getCategoryIcon(budget.categoryIcon, { size: 24, color: budget.categoryColor }) : getDefaultIcon(budget.categoryIcon, 24, budget.categoryColor)}
                    </View>
                </View>
            </View>

            <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent} showsVerticalScrollIndicator={false}>
                {/* Estado del presupuesto */}
                <View style={[styles.statusCard, isOverBudget ? styles.statusOver : isNearLimit ? styles.statusNear : styles.statusOk]}>
                    <View style={styles.cardContent}>
                        <View style={styles.amountRow}>
                            <View>
                                <Text style={styles.labelSmall}>Gastado</Text>
                                <Text style={[styles.amountLarge, isOverBudget && styles.amountOver]}>
                                    ${budget.spent.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                </Text>
                            </View>
                            <View style={styles.amountRight}>
                                <Text style={styles.labelSmall}>Presupuesto</Text>
                                <Text style={styles.amountLarge}>
                                    ${budget.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                </Text>
                            </View>
                        </View>

                        {/* Barra de progreso */}
                        <View style={styles.progressContainer}>
                            <View style={styles.progressTrack}>
                                <View
                                    style={[
                                        styles.progressBar,
                                        {
                                            width: `${Math.min(percentage, 100)}%`,
                                            backgroundColor: isOverBudget ? '#dc2626' : isNearLimit ? '#f97316' : '#10b981',
                                        },
                                    ]}
                                />
                            </View>
                            {percentage > 100 && (
                                <View
                                    style={[
                                        styles.progressOver,
                                        { width: `${Math.min((percentage - 100) * 0.5, 50)}%` },
                                    ]}
                                />
                            )}
                        </View>

                        {/* ✅ LÍNEAS CORREGIDAS */}
                        <View style={styles.statusRow}>
                            <Text style={[
                                styles.statusPercent,
                                isOverBudget ? styles.statusOverText :
                                    isNearLimit ? styles.statusNearText :
                                        styles.statusOkText
                            ]}>
                                {percentage.toFixed(1)}% utilizado
                            </Text>
                            <Text style={[
                                styles.statusRemaining,
                                isOverBudget ? styles.statusOverText :
                                    remaining <= budget.amount * 0.1 ? styles.statusNearText :
                                        styles.statusOkText
                            ]}>
                                {isOverBudget
                                    ? `-$${Math.abs(remaining).toLocaleString('es-ES', { minimumFractionDigits: 2 })} excedido`
                                    : `$${remaining.toLocaleString('es-ES', { minimumFractionDigits: 2 })} restante`}
                            </Text>
                        </View>

                        {isOverBudget && (
                            <View style={styles.alertOver}>
                                <AlertCircle size={16} color="#dc2626" style={styles.alertIcon} />
                                <Text style={styles.alertText}>Has excedido tu presupuesto</Text>
                            </View>
                        )}

                        {isNearLimit && !isOverBudget && (
                            <View style={styles.alertNear}>
                                <AlertCircle size={16} color="#f97316" style={styles.alertIcon} />
                                <Text style={styles.alertTextNear}>Estás cerca del límite de tu presupuesto</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Configuración */}
                <View style={styles.configCard}>
                    <Text style={styles.sectionTitle}>Configuración</Text>
                    <View style={styles.infoList}>
                        <View style={styles.infoItem}>
                            <View style={[styles.infoIcon, { backgroundColor: '#dbeafe' }]}>
                                <DollarSign size={20} color="#2563eb" />
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.infoLabel}>Monto del presupuesto</Text>
                                <Text style={styles.infoValue}>
                                    ${budget.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoItem}>
                            <View style={[styles.infoIcon, { backgroundColor: '#d1fae5' }]}>
                                <Calendar size={20} color="#059669" />
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.infoLabel}>Fecha de inicio</Text>
                                <Text style={styles.infoValue}>
                                    {new Date(budget.startDate).toLocaleDateString('es-ES', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoItem}>
                            <View style={[styles.infoIcon, { backgroundColor: '#ede9fe' }]}>
                                <Target size={20} color="#7c3aed" />
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.infoLabel}>Fecha de finalización</Text>
                                <Text style={styles.infoValue}>
                                    {new Date(budget.endDate).toLocaleDateString('es-ES', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.infoItem}>
                            <View style={[styles.infoIcon, { backgroundColor: '#ffedd5' }]}>
                                <Bell size={20} color="#ea580c" />
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.infoLabel}>Umbral de alerta</Text>
                                <Text style={styles.infoValue}>{budget.alertThreshold}%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Transacciones */}
                <View style={styles.transactionsSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Transacciones ({transactions.length})</Text>
                        <Text style={styles.sectionSubtitle}>
                            Total: ${budget.spent.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                        </Text>
                    </View>

                    {transactions.length === 0 ? (
                        <View style={styles.emptyCard}>
                            <View style={styles.emptyIcon}>
                                <TrendingUp size={32} color="#9ca3af" />
                            </View>
                            <Text style={styles.emptyTitle}>Sin transacciones aún</Text>
                            <Text style={styles.emptySubtitle}>No hay gastos en esta categoría en el periodo</Text>
                        </View>
                    ) : (
                        <View style={styles.transactionsList}>
                            {transactions.map(transaction => (
                                <View key={transaction.id} style={styles.transactionCard}>
                                    <View style={styles.transactionLeft}>
                                        <View style={[styles.transactionIcon, { backgroundColor: `${budget.categoryColor}20` }]}>
                                            {getCategoryIcon ? getCategoryIcon(budget.categoryIcon, { size: 20, color: budget.categoryColor }) : getDefaultIcon(budget.categoryIcon, 20, budget.categoryColor)}
                                        </View>
                                        <View style={styles.transactionInfo}>
                                            <Text style={styles.transactionDesc}>{transaction.description}</Text>
                                            <Text style={styles.transactionDate}>
                                                {new Date(transaction.date).toLocaleDateString('es-ES', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={styles.transactionAmount}>
                                        -${transaction.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Botón eliminar */}
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => setShowDeleteConfirm(true)}
                    activeOpacity={0.85}
                >
                    <Trash2 size={18} color="#dc2626" style={styles.deleteIcon} />
                    <Text style={styles.deleteText}>Eliminar Presupuesto</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Modal confirmación */}
            <Modal visible={showDeleteConfirm} transparent animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setShowDeleteConfirm(false)}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <AlertCircle size={24} color="#dc2626" />
                            <Text style={styles.modalTitle}>¿Estás seguro?</Text>
                        </View>
                        <Text style={styles.modalDescription}>
                            Esta acción eliminará el presupuesto. No se puede deshacer.
                        </Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.modalCancel}
                                onPress={() => setShowDeleteConfirm(false)}
                            >
                                <Text style={styles.modalCancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalDelete} onPress={handleDeleteBudget}>
                                <Text style={styles.modalDeleteText}>Eliminar Presupuesto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
};
