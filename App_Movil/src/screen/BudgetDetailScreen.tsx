import React, { useState, useMemo, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
    ArrowLeft,
    AlertCircle,
    TrendingUp,
    Calendar,
    Trash2,
    DollarSign,
    Target,
    Bell,
    icons,
} from 'lucide-react-native';
import { styles } from '../styles/BudgetDetaik.style';
import { deleteBudget } from '../api/budgets';
import { getTransactionsByCategory } from '../api/transacciones';
import { RootStackParamList } from '../navegation/type';

type BudgetDetailRouteProp = RouteProp<RootStackParamList, 'BudgetDetail'>;

export const BudgetDetailScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<BudgetDetailRouteProp>();
    const { budget } = route.params;

    const [transactions, setTransactions] = useState<any[]>([]);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        if (budget.categoryId) {
            loadTransactions();
        }
    }, [budget.categoryId]);

    const loadTransactions = async () => {
        try {
            const data = await getTransactionsByCategory(budget.categoryId);
            // Assuming data is an array of transactions. 
            // We might need to filter by date if the API returns all history, 
            // but budget usually implies current month/period. 
            // For now, let's just show them or slice recent ones.
            // Also ensure the backend returns compatible shape or map it.
            setTransactions(data);
        } catch (error) {
            console.error('Error loading transactions:', error);
        }
    };

    const percentage = useMemo(
        () => (budget.amount > 0 ? (budget.spent / budget.amount) * 100 : 0),
        [budget.spent, budget.amount],
    );
    const remaining = useMemo(
        () => budget.amount - budget.spent,
        [budget.amount, budget.spent],
    );
    const isOverBudget = budget.spent >= budget.amount;
    const isNearLimit = percentage >= (budget.alertThreshold || 90) && percentage < 100;

    const getPeriodText = () => {
        switch (budget.period) {
            case 'weekly':
                return 'Semanal';
            case 'monthly':
                return 'Mensual';
            case 'yearly':
                return 'Anual';
            default:
                return 'Mensual';
        }
    };

    const handleDeleteBudget = async () => {
        try {
            await deleteBudget(budget.id);
            setShowDeleteConfirm(false);
            navigation.goBack();
        } catch (error) {
            console.error('Error deleting budget:', error);
            // Optionally show alert
        }
    };

    const getCategoryIcon = (iconName: string, props?: { size?: number; color?: string }) => {
        const Icon = icons[iconName as keyof typeof icons] || AlertCircle;
        return <Icon size={props?.size || 24} color={props?.color || '#000'} />;
    };

    const headerBg = '#059669';

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { backgroundColor: headerBg }]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    activeOpacity={0.8}
                >
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <View style={styles.headerTop}>
                    <View style={styles.headerTextBlock}>
                        <Text style={styles.headerTitle}>{budget.categoryName}</Text>
                        <Text style={styles.headerSubtitle}>
                            Presupuesto {getPeriodText()}
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.headerIconWrapper,
                            {
                                backgroundColor: `${budget.categoryColor}40`,
                            },
                        ]}
                    >
                        {getCategoryIcon(budget.categoryIcon, {
                            size: 26,
                            color: budget.categoryColor,
                        })}
                    </View>
                </View>
            </View>

            {/* Contenido */}
            <ScrollView
                style={styles.body}
                contentContainerStyle={styles.bodyContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Estado del presupuesto */}
                <View
                    style={[
                        styles.card,
                        isOverBudget
                            ? styles.cardOver
                            : isNearLimit
                                ? styles.cardNear
                                : styles.cardOk,
                    ]}
                >
                    <View style={styles.cardSection}>
                        <View style={styles.rowBetween}>
                            <View>
                                <Text style={styles.labelMuted}>Gastado</Text>
                                <Text
                                    style={[
                                        styles.amountMain,
                                        isOverBudget && { color: '#dc2626' },
                                    ]}
                                >
                                    $
                                    {budget.spent.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.labelMuted}>Presupuesto</Text>
                                <Text style={styles.amountMain}>
                                    $
                                    {budget.amount.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })}
                                </Text>
                            </View>
                        </View>

                        {/* Barra de progreso simple */}
                        <View style={styles.progressTrack}>
                            <View
                                style={[
                                    styles.progressFill,
                                    {
                                        width: `${Math.min(percentage, 100)}%`,
                                        backgroundColor: isOverBudget
                                            ? '#dc2626'
                                            : isNearLimit
                                                ? '#f97316'
                                                : '#10b981',
                                    },
                                ]}
                            />
                        </View>

                        <View style={styles.rowBetween}>
                            <Text
                                style={[
                                    styles.statusText,
                                    isOverBudget
                                        ? { color: '#dc2626' }
                                        : isNearLimit
                                            ? { color: '#f97316' }
                                            : { color: '#059669' },
                                ]}
                            >
                                {percentage.toFixed(1)}% utilizado
                            </Text>
                            <Text
                                style={[
                                    styles.statusTextSmall,
                                    isOverBudget
                                        ? { color: '#dc2626' }
                                        : remaining <= budget.amount * 0.1
                                            ? { color: '#f97316' }
                                            : { color: '#059669' },
                                ]}
                            >
                                {isOverBudget
                                    ? `-$${Math.abs(remaining).toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })} excedido`
                                    : `$${remaining.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                    })} restante`}
                            </Text>
                        </View>

                        {isOverBudget && (
                            <View style={styles.alertBoxOver}>
                                <AlertCircle size={16} color="#dc2626" style={{ marginRight: 6 }} />
                                <Text style={styles.alertTextOver}>
                                    Has excedido tu presupuesto
                                </Text>
                            </View>
                        )}

                        {isNearLimit && !isOverBudget && (
                            <View style={styles.alertBoxNear}>
                                <AlertCircle size={16} color="#f97316" style={{ marginRight: 6 }} />
                                <Text style={styles.alertTextNear}>
                                    Estás cerca del límite de tu presupuesto
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Información del presupuesto */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Configuración</Text>

                    <View style={styles.infoRow}>
                        <View style={[styles.infoIconWrapper, { backgroundColor: '#dbeafe' }]}>
                            <DollarSign size={20} color="#2563eb" />
                        </View>
                        <View style={styles.infoTextBlock}>
                            <Text style={styles.labelMuted}>Monto del presupuesto</Text>
                            <Text style={styles.infoValue}>
                                $
                                {budget.amount.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                })}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={[styles.infoIconWrapper, { backgroundColor: '#ede9fe' }]}>
                            <Calendar size={20} color="#7c3aed" />
                        </View>
                        <View style={styles.infoTextBlock}>
                            <Text style={styles.labelMuted}>Periodo</Text>
                            <Text style={styles.infoValue}>{getPeriodText()}</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={[styles.infoIconWrapper, { backgroundColor: '#ffedd5' }]}>
                            <Bell size={20} color="#ea580c" />
                        </View>
                        <View style={styles.infoTextBlock}>
                            <Text style={styles.labelMuted}>Umbral de alerta</Text>
                            <Text style={styles.infoValue}>{budget.alertThreshold ? budget.alertThreshold : 90}%</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={[styles.infoIconWrapper, { backgroundColor: '#d1fae5' }]}>
                            <Target size={20} color="#059669" />
                        </View>
                        <View style={styles.infoTextBlock}>
                            <Text style={styles.labelMuted}>Fecha de inicio</Text>
                            <Text style={styles.infoValue}>
                                {new Date(budget.startDate).toLocaleDateString('es-ES', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Transacciones */}
                <View style={styles.section}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.sectionTitle}>
                            Transacciones Recientes
                        </Text>
                        {/* We could show total spent here as well */}
                    </View>
                    {/* Note: data from backend might differ in shape, adjust below as needed */}
                    {transactions.length === 0 ? (
                        <View style={[styles.card, styles.emptyCard]}>
                            <View style={styles.emptyIconCircle}>
                                <TrendingUp size={28} color="#9ca3af" />
                            </View>
                            <Text style={styles.emptyTitle}>Sin transacciones recientes</Text>
                            <Text style={styles.emptySubtitle}>
                                No se encontraron movimientos
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.txList}>
                            {transactions.map((tx, idx) => (
                                <View key={tx.id_transaccion || idx} style={styles.txCard}>
                                    <View style={styles.txLeft}>
                                        <View
                                            style={[
                                                styles.txIconCircle,
                                                {
                                                    backgroundColor: `${budget.categoryColor}20`,
                                                },
                                            ]}
                                        >
                                            {getCategoryIcon(budget.categoryIcon, {
                                                size: 20,
                                                color: budget.categoryColor,
                                            })}
                                        </View>
                                        <View style={styles.txInfo}>
                                            <Text style={styles.txDescription}>{tx.descripcion || tx.nombre_transaccion || 'Sin descripción'}</Text>
                                            <Text style={styles.txDate}>
                                                {new Date(tx.fecha).toLocaleDateString('es-ES', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.txRight}>
                                        <Text style={styles.txAmount}>
                                            -${Number(tx.monto).toLocaleString('es-ES', {
                                                minimumFractionDigits: 2,
                                            })}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Eliminar presupuesto */}
                <View style={styles.deleteSection}>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => setShowDeleteConfirm(true)}
                        activeOpacity={0.85}
                    >
                        <Trash2 size={18} color="#dc2626" style={{ marginRight: 6 }} />
                        <Text style={styles.deleteButtonText}>Eliminar Presupuesto</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal de confirmación */}
            <Modal
                visible={showDeleteConfirm}
                transparent
                animationType="fade"
                onRequestClose={() => setShowDeleteConfirm(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <View style={styles.modalHeader}>
                            <AlertCircle size={22} color="#dc2626" />
                            <Text style={styles.modalTitle}>¿Estás seguro?</Text>
                        </View>
                        <Text style={styles.modalText}>
                            Esta acción eliminará el presupuesto. No se puede deshacer.
                        </Text>
                        <View style={styles.modalButtonsRow}>
                            <TouchableOpacity
                                style={styles.modalCancel}
                                onPress={() => setShowDeleteConfirm(false)}
                            >
                                <Text style={styles.modalCancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalDelete}
                                onPress={handleDeleteBudget}
                            >
                                <Text style={styles.modalDeleteText}>Eliminar Presupuesto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};
