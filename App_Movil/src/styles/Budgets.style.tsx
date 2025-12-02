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
        paddingTop: 32,
        paddingBottom: 16,
        backgroundColor: '#059669',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
        textTransform: 'capitalize',
    },

    // Resumen
    summaryWrapper: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    summaryCard: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#ecfdf3',
        borderWidth: 1,
        borderColor: '#a7f3d0',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryLabel: {
        fontSize: 12,
        color: '#64748b',
        marginBottom: 2,
    },
    summaryAmount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
    },
    summarySpent: {
        fontSize: 16,
        fontWeight: '600',
        color: '#059669',
    },
    summaryProgress: {
        marginTop: 4,
        marginBottom: 6,
    },
    summaryFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summaryFooterText: {
        fontSize: 12,
        color: '#64748b',
    },
    summaryFooterRemaining: {
        fontSize: 12,
        color: '#059669',
    },

    // Lista
    listWrapper: {
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    listHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    listTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#020617',
    },
    newButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#059669',
        backgroundColor: '#ecfdf3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    newButtonText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#059669',
    },

    // Tarjeta de presupuesto
    budgetCard: {
        padding: 16,
        borderRadius: 16,
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    budgetCardOver: {
        backgroundColor: '#fef2f2',
        borderWidth: 1,
        borderColor: '#fecaca',
    },
    budgetTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    budgetLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    budgetIconWrapper: {
        width: 44,
        height: 44,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    budgetName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0f172a',
    },
    budgetLabelSmall: {
        fontSize: 12,
        color: '#6b7280',
    },
    budgetMiddleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    budgetSpent: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
    },
    budgetSpentOver: {
        color: '#dc2626',
    },
    budgetOfText: {
        fontSize: 12,
        color: '#64748b',
    },
    budgetProgress: {
        marginBottom: 6,
    },
    budgetBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    budgetPercentText: {
        fontSize: 12,
        color: '#64748b',
    },
    budgetRemainingOk: {
        fontSize: 12,
        color: '#059669',
    },
    budgetRemainingOver: {
        fontSize: 12,
        color: '#dc2626',
    },

    // Alertas
    alertBoxOver: {
        marginTop: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#fee2e2',
    },
    alertBoxNear: {
        marginTop: 8,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#fffbeb',
    },
    alertTextOver: {
        fontSize: 12,
        color: '#b91c1c',
    },
    alertTextNear: {
        fontSize: 12,
        color: '#c2410c',
    },
});
