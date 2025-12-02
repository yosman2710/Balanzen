import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { TrendingUp, CreditCard } from 'lucide-react-native';
import { Card } from './ui/Card';
import { styles } from '../styles/dashboard.style';

interface Transaction {
    id: string;
    type: 'income' | 'expense';
    description: string;
    amount: number;
    category: string;
    date: string;
}

interface RecentTransactionsProps {
    transactions: Transaction[];
    onSeeAll?: () => void;
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
    transactions,
    onSeeAll,
}) => {
    const renderItem = ({ item }: { item: Transaction }) => {
        const isIncome = item.type === 'income';
        const amountColor = isIncome ? styles.txAmountIncome : styles.txAmountExpense;
        const iconContainerStyle = isIncome
            ? styles.txIconIncome
            : styles.txIconExpense;

        return (
            <Card style={styles.txCard}>
                <View style={styles.txRow}>
                    <View style={styles.txLeft}>
                        <View style={iconContainerStyle}>
                            {isIncome ? (
                                <TrendingUp size={18} color="#16a34a" />
                            ) : (
                                <CreditCard size={18} color="#dc2626" />
                            )}
                        </View>
                        <View>
                            <Text style={styles.txDescription}>{item.description}</Text>
                            <Text style={styles.txCategory}>{item.category}</Text>
                        </View>
                    </View>
                    <View style={styles.txRight}>
                        <Text style={amountColor}>
                            {isIncome ? '+' : '-'}$
                            {item.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                        </Text>
                        <Text style={styles.txDate}>
                            {new Date(item.date).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'short',
                            })}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    };

    return (
        <View style={styles.txSection}>
            <View style={styles.txHeader}>
                <Text style={styles.txTitle}>Transacciones Recientes</Text>
                <TouchableOpacity onPress={onSeeAll}>
                    <Text style={styles.txSeeAll}>Ver todas</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                scrollEnabled={false}
            />
        </View>
    );
};
