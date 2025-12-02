import React, { JSX, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
} from 'react-native';
import {
    Search,
    TrendingUp,
    ShoppingCart,
    Home,
    Coffee,
    Car,
    Zap,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';
import { Button } from '../component/ui/Button';
import { styles } from '../styles/Transactions.style';

type TransactionType = 'income' | 'expense';

interface Transaction {
    id: string;
    type: TransactionType;
    description: string;
    amount: number;
    category: string;
    date: string; // ISO
    icon: JSX.Element;
}

export function TransactionsScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<TransactionType | 'all'>('all');

    // Datos simulados
    const allTransactions: Transaction[] = [
        {
            id: '1',
            type: 'income',
            description: 'Salario mensual',
            amount: 5200.0,
            category: 'Trabajo',
            date: '2025-11-20',
            icon: <TrendingUp size={20} />,
        },
        {
            id: '2',
            type: 'expense',
            description: 'Supermercado Walmart',
            amount: 120.5,
            category: 'Alimentación',
            date: '2025-11-19',
            icon: <ShoppingCart size={20} />,
        },
        {
            id: '3',
            type: 'expense',
            description: 'Renta del mes',
            amount: 800.0,
            category: 'Vivienda',
            date: '2025-11-18',
            icon: <Home size={20} />,
        },
        {
            id: '4',
            type: 'expense',
            description: 'Netflix',
            amount: 12.99,
            category: 'Entretenimiento',
            date: '2025-11-18',
            icon: <Coffee size={20} />,
        },
        {
            id: '5',
            type: 'income',
            description: 'Freelance diseño web',
            amount: 450.0,
            category: 'Trabajo',
            date: '2025-11-17',
            icon: <TrendingUp size={20} />,
        },
        {
            id: '6',
            type: 'expense',
            description: 'Gasolina',
            amount: 60.0,
            category: 'Transporte',
            date: '2025-11-16',
            icon: <Car size={20} />,
        },
        {
            id: '7',
            type: 'expense',
            description: 'Luz y agua',
            amount: 85.0,
            category: 'Servicios',
            date: '2025-11-15',
            icon: <Zap size={20} />,
        },
        {
            id: '8',
            type: 'expense',
            description: 'Restaurante',
            amount: 45.0,
            category: 'Alimentación',
            date: '2025-11-15',
            icon: <Coffee size={20} />,
        },
        {
            id: '9',
            type: 'expense',
            description: 'Supermercado Soriana',
            amount: 95.3,
            category: 'Alimentación',
            date: '2025-11-14',
            icon: <ShoppingCart size={20} />,
        },
        {
            id: '10',
            type: 'expense',
            description: 'Uber',
            amount: 18.5,
            category: 'Transporte',
            date: '2025-11-13',
            icon: <Car size={20} />,
        },
    ];

    const filteredTransactions = allTransactions.filter((t) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
            t.description.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q);

        if (activeFilter === 'all') return matchesSearch;
        return matchesSearch && t.type === activeFilter;
    });

    const totalIncome = allTransactions
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = allTransactions
        .filter((t) => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    // Agrupar por fecha formateada
    const grouped: Record<string, Transaction[]> = {};
    filteredTransactions.forEach((t) => {
        const dateLabel = new Date(t.date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        if (!grouped[dateLabel]) grouped[dateLabel] = [];
        grouped[dateLabel].push(t);
    });

    const groupedEntries = Object.entries(grouped);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header con resumen */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Movimientos</Text>

                    <View style={styles.headerCardsRow}>
                        <Card style={styles.headerCard}>
                            <Text style={styles.headerCardLabel}>Total Ingresos</Text>
                            <Text style={styles.headerCardAmount}>
                                $
                                {totalIncome.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                })}
                            </Text>
                        </Card>

                        <Card style={styles.headerCard}>
                            <Text style={styles.headerCardLabel}>Total Gastos</Text>
                            <Text style={styles.headerCardAmount}>
                                $
                                {totalExpense.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                })}
                            </Text>
                        </Card>
                    </View>
                </View>

                {/* Búsqueda y filtros */}
                <View style={styles.filtersContainer}>
                    <View style={styles.searchWrapper}>
                        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
                        <TextInput
                            placeholder="Buscar transacciones..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={styles.searchInput}
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View style={styles.tabsRow}>
                        <FilterChip
                            label="Todas"
                            active={activeFilter === 'all'}
                            onPress={() => setActiveFilter('all')}
                        />
                        <FilterChip
                            label="Ingresos"
                            active={activeFilter === 'income'}
                            onPress={() => setActiveFilter('income')}
                        />
                        <FilterChip
                            label="Gastos"
                            active={activeFilter === 'expense'}
                            onPress={() => setActiveFilter('expense')}
                        />
                    </View>
                </View>

                {/* Lista agrupada */}
                <View style={styles.listContainer}>
                    {groupedEntries.length > 0 ? (
                        groupedEntries.map(([date, txs]) => (
                            <View key={date} style={styles.dateGroup}>
                                <Text style={styles.dateLabel}>{date}</Text>

                                {txs.map((t) => {
                                    const isIncome = t.type === 'income';
                                    return (
                                        <Card key={t.id} style={styles.txCard}>
                                            <View style={styles.txRow}>
                                                <View style={styles.txLeft}>
                                                    <View
                                                        style={[
                                                            styles.txIconWrapper,
                                                            isIncome
                                                                ? styles.txIconIncomeBg
                                                                : styles.txIconExpenseBg,
                                                        ]}
                                                    >
                                                        {React.cloneElement(t.icon, {
                                                            color: isIncome ? '#16a34a' : '#dc2626',
                                                            size: 20,
                                                        })}
                                                    </View>
                                                    <View>
                                                        <Text style={styles.txDescription}>
                                                            {t.description}
                                                        </Text>
                                                        <Text style={styles.txCategory}>
                                                            {t.category}
                                                        </Text>
                                                    </View>
                                                </View>

                                                <View style={styles.txRight}>
                                                    <Text
                                                        style={[
                                                            styles.txAmount,
                                                            isIncome
                                                                ? styles.txAmountIncome
                                                                : styles.txAmountExpense,
                                                        ]}
                                                    >
                                                        {isIncome ? '+' : '-'}$
                                                        {t.amount.toLocaleString('es-ES', {
                                                            minimumFractionDigits: 2,
                                                        })}
                                                    </Text>
                                                </View>
                                            </View>
                                        </Card>
                                    );
                                })}
                            </View>
                        ))
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>
                                No se encontraron transacciones
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

interface FilterChipProps {
    label: string;
    active: boolean;
    onPress: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, active, onPress }) => {
    return (
        <Button
            onPress={onPress}
            style={[styles.chip, active && styles.chipActive]}
        >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {label}
            </Text>
        </Button>
    );
};
