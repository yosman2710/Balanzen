import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        paddingBottom: 24,
    },

    // Header
    header: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingTop: 32,
        backgroundColor: '#059669',
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
    },
    headerCardsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    headerCard: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    headerCardLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        marginBottom: 4,
    },
    headerCardAmount: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

    // Filtros
    filtersContainer: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    searchWrapper: {
        position: 'relative',
        marginBottom: 12,
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        top: 12,
    },
    searchInput: {
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        paddingLeft: 40,
        paddingRight: 12,
        backgroundColor: '#f8fafc',
        fontSize: 14,
        color: '#0f172a',
    },
    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    chip: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chipActive: {
        borderColor: '#10b981',
        backgroundColor: '#ecfdf3',
    },
    chipText: {
        fontSize: 13,
        color: '#64748b',
        fontWeight: '500',
    },
    chipTextActive: {
        color: '#059669',
    },

    // Lista
    listContainer: {
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    dateGroup: {
        marginBottom: 20,
    },
    dateLabel: {
        fontSize: 13,
        color: '#64748b',
        marginBottom: 8,
        textTransform: 'capitalize',
    },
    txCard: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 8,
    },
    txRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txIconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    txIconIncomeBg: {
        backgroundColor: '#dcfce7',
    },
    txIconExpenseBg: {
        backgroundColor: '#fee2e2',
    },
    txDescription: {
        fontSize: 14,
        color: '#0f172a',
    },
    txCategory: {
        fontSize: 12,
        color: '#64748b',
    },
    txRight: {
        alignItems: 'flex-end',
    },
    txAmount: {
        fontSize: 14,
        fontWeight: '600',
    },
    txAmountIncome: {
        color: '#16a34a',
    },
    txAmountExpense: {
        color: '#dc2626',
    },

    emptyState: {
        paddingVertical: 48,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#64748b',
    },
});
