import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    TrendingUp,
    CreditCard,
    ShoppingCart,
    Home,
    Car,
    Coffee,
    Zap,
    Heart,
    BookOpen,
    Smartphone,
    Shirt,
    Film,
    Dumbbell,
    Gift,
    Plane,
    Utensils,
    Fuel,
    Wrench,
    Briefcase,
    LineChart,
} from 'lucide-react-native';
import { styles } from '../styles/CategoryDetail.style';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navegation/type';
import { getCategoryById, type CategoryDTO } from '../api/categories';
import { getTransactionsByCategory } from '../api/transacciones';

type CategoryDetailRouteProp = RouteProp<RootStackParamList, 'CategoryDetail'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Transaction {
    id_transaccion: string;
    id_usuario: string;
    id_categoria: string;
    nombre_transaccion: string;
    monto: number;
    fecha: string;
    descripcion: string;
}

export const CategoryDetailScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<CategoryDetailRouteProp>();
    const { categoryId } = route.params;

    const [category, setCategory] = useState<CategoryDTO | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const [catData, txData] = await Promise.all([
                getCategoryById(categoryId),
                getTransactionsByCategory(categoryId)
            ]);
            setCategory(catData);
            setTransactions(txData);
        } catch (error) {
            console.error("Error loading category details:", error);
        } finally {
            setLoading(false);
        }
    }, [categoryId]);

    useEffect(() => {
        loadData();
    }, [loadData]);


    const iconMap: Record<string, React.ComponentType<any>> = {
        ShoppingCart,
        Home,
        Car,
        Coffee,
        Zap,
        Heart,
        BookOpen,
        Smartphone,
        Shirt,
        Film,
        Dumbbell,
        Gift,
        Plane,
        Utensils,
        Fuel,
        Wrench,
        TrendingUp,
        Briefcase,
        LineChart,
    };

    const IconForCategory = category ? (iconMap[category.icon] ?? ShoppingCart) : ShoppingCart;

    const totalAmount = useMemo(
        () => transactions.reduce((sum, t) => sum + Number(t.monto), 0),
        [transactions],
    );

    // Asumimos tipo basado en la categoria si no viene en transaccion (aunque deberia venir si hacemos join, pero aqui usamos endpoints separados simplificados o el que creamos devuelve raw transaction table usually)
    // El endpoint findTransaccionesByCategoriaId devuelve la tabla transacciones.
    const transactionType = category?.type || 'expense';

    const averageAmount =
        transactions.length > 0 ? totalAmount / transactions.length : 0;

    // agrupar por mes/año en formato es-ES
    const groupedTransactions = useMemo(() => {
        const groups: Record<string, Transaction[]> = {};
        for (const t of transactions) {
            const date = new Date(t.fecha);
            const monthYear = date.toLocaleDateString('es-ES', {
                month: 'long',
                year: 'numeric',
            });
            if (!groups[monthYear]) groups[monthYear] = [];
            groups[monthYear].push(t);
        }
        return groups;
    }, [transactions]);

    const groupedEntries = Object.entries(groupedTransactions);

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#10b981" />
            </View>
        );
    }

    if (!category) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Categoría no encontrada</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', marginTop: 10 }}>Volver</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View
                style={[
                    styles.header,
                    {
                        backgroundColor: category.color,
                    },
                ]}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    activeOpacity={0.8}
                >
                    <ArrowLeft size={20} color="#ffffff" />
                    <Text style={styles.backText}>Volver</Text>
                </TouchableOpacity>

                <View style={styles.headerMain}>
                    <View style={styles.headerIconWrapper}>
                        <IconForCategory size={28} color="#ffffff" />
                    </View>
                    <View>
                        <Text style={styles.headerTitle}>{category.name}</Text>
                        <Text style={styles.headerSubtitle}>
                            {transactions.length} transacciones
                        </Text>
                    </View>
                </View>

                {/* Estadísticas */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Total</Text>
                        <Text style={styles.statValue}>
                            $
                            {totalAmount.toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })}
                        </Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Promedio</Text>
                        <Text style={styles.statValue}>
                            $
                            {averageAmount.toLocaleString('es-ES', {
                                minimumFractionDigits: 2,
                            })}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Lista de transacciones */}
            <ScrollView
                style={styles.body}
                contentContainerStyle={styles.bodyContent}
                showsVerticalScrollIndicator={false}
            >
                {groupedEntries.length > 0 ? (
                    groupedEntries.map(([monthYear, monthTransactions]) => (
                        <View key={monthYear} style={styles.monthSection}>
                            <Text style={styles.monthTitle}>
                                {monthYear.charAt(0).toUpperCase() + monthYear.slice(1)}
                            </Text>
                            {monthTransactions.map(transaction => (
                                <View key={transaction.id_transaccion} style={styles.txCard}>
                                    <View style={styles.txLeft}>
                                        <View
                                            style={[
                                                styles.txIconWrapper,
                                                {
                                                    backgroundColor:
                                                        transactionType === 'income'
                                                            ? '#dcfce7'
                                                            : '#fee2e2',
                                                },
                                            ]}
                                        >
                                            {transactionType === 'income' ? (
                                                <TrendingUp size={20} color="#16a34a" />
                                            ) : (
                                                <CreditCard size={20} color="#dc2626" />
                                            )}
                                        </View>
                                        <View style={styles.txInfo}>
                                            <Text style={styles.txDescription}>
                                                {transaction.nombre_transaccion}
                                            </Text>
                                            <Text style={styles.txDate}>
                                                {new Date(
                                                    transaction.fecha,
                                                ).toLocaleDateString('es-ES', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </Text>
                                            {transaction.descripcion && (
                                                <Text style={styles.txNotes}>
                                                    {transaction.descripcion}
                                                </Text>
                                            )}
                                        </View>
                                    </View>

                                    <View style={styles.txRight}>
                                        <Text
                                            style={[
                                                styles.txAmount,
                                                transactionType === 'income'
                                                    ? styles.txAmountIncome
                                                    : styles.txAmountExpense,
                                            ]}
                                        >
                                            {transactionType === 'income' ? '+' : '-'}$
                                            {Number(transaction.monto).toLocaleString('es-ES', {
                                                minimumFractionDigits: 2,
                                            })}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <View
                            style={[
                                styles.emptyIconWrapper,
                                { backgroundColor: `${category.color}20` },
                            ]}
                        >
                            <IconForCategory size={28} color={category.color} />
                        </View>
                        <Text style={styles.emptyTitle}>
                            No hay transacciones en esta categoría
                        </Text>
                        <Text style={styles.emptySubtitle}>
                            Las transacciones que agregues aparecerán aquí
                        </Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
