import React, { JSX, useCallback, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
    Search,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';
import { Button } from '../component/ui/Button';
import { styles } from '../styles/Transactions.style';
import { listarTransacciones } from '../api/transacciones';
import { IconByName } from '../component/IconMapper';

type TransactionType = 'ingreso' | 'gasto';

interface Transaction {
    id: string;
    type: TransactionType;
    description: string;
    amount: number;
    category: string;
    date: string; // ISO
    icon: string;
}

export function TransactionsScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<TransactionType | 'all'>('all');
    const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);

    // Datos simulados
    const loadAllTransactions = async () => {
        try {
            const data = await listarTransacciones();
            setAllTransactions(data);
        } catch (error) {
            console.error('Error al cargar transacciones:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadAllTransactions();
        }, [])
    );

    const filteredTransactions = allTransactions.filter((t) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
            t.description.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q);

        if (activeFilter === 'all') return matchesSearch;
        return matchesSearch && t.type === activeFilter;
    });

    const totalIncome = allTransactions
        .filter((t) => t.type === 'ingreso')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = allTransactions
        .filter((t) => t.type === 'gasto')
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
                            active={activeFilter === 'ingreso'}
                            onPress={() => setActiveFilter('ingreso')}
                        />
                        <FilterChip
                            label="Gastos"
                            active={activeFilter === 'gasto'}
                            onPress={() => setActiveFilter('gasto')}
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
                                    const isIncome = t.type === 'ingreso';
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
                                                        <IconByName
                                                            name={t.icon}
                                                            color={isIncome ? '#16a34a' : '#dc2626'}
                                                            size={20}
                                                        />
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
