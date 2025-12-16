// src/styles/BudgetDetail.style.ts
// src/styles/BudgetDetail.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    /* Header */
    header: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    backText: {
        marginLeft: 6,
        color: '#e5e7eb',
        fontSize: 14,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    headerText: {
        flex: 1,
        paddingRight: 12,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 2,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },
    headerIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* Body */
    body: {
        flex: 1,
    },
    bodyContent: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingBottom: 32,
        gap: 16,
    },

    /* Estado del presupuesto */
    statusCard: {
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
    },
    statusOver: {
        backgroundColor: '#fef2f2',
        borderColor: '#fecaca',
    },
    statusNear: {
        backgroundColor: '#fffbeb',
        borderColor: '#fed7aa',
    },
    statusOk: {
        backgroundColor: '#ecfdf5',
        borderColor: '#bbf7d0',
    },
    cardContent: {
        gap: 16,
    },
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amountRight: {
        alignItems: 'flex-end',
    },
    labelSmall: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 4,
    },
    amountLarge: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
    },
    amountOver: {
        color: '#dc2626',
    },

    progressContainer: {
        position: 'relative',
    },
    progressTrack: {
        height: 12,
        borderRadius: 6,
        backgroundColor: '#e5e7eb',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 6,
    },
    progressOver: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 12,
        backgroundColor: '#dc2626',
        borderRadius: 6,
    },

    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusPercent: {
        fontSize: 14,
        fontWeight: '600',
    },
    statusRemaining: {
        fontSize: 12,
    },
    statusOverText: {
        color: '#dc2626',
    },
    statusNearText: {
        color: '#f97316',
    },
    statusOkText: {
        color: '#059669',
    },

    alertOver: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        padding: 12,
        backgroundColor: 'rgba(239,68,68,0.1)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(239,68,68,0.2)',
    },
    alertNear: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        padding: 12,
        backgroundColor: 'rgba(249,115,22,0.1)',
        borderRadius: 10,
        borderColor: 'rgba(249,115,22,0.2)',
    },
    alertIcon: {
        marginTop: 2,
    },
    alertText: {
        fontSize: 13,
        color: '#dc2626',
        flex: 1,
    },
    alertTextNear: {
        fontSize: 13,
        color: '#f97316',
        flex: 1,
    },

    /* Configuración */
    configCard: {
        borderRadius: 16,
        padding: 20,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 16,
    },
    infoList: {
        gap: 12,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },

    /* Transacciones */
    transactionsSection: {
        marginTop: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionSubtitle: {
        fontSize: 13,
        color: '#6b7280',
    },
    transactionsList: {
        gap: 8,
    },
    transactionCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    transactionLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionDesc: {
        fontSize: 14,
        fontWeight: '500',
        color: '#111827',
        marginBottom: 2,
    },
    transactionDate: {
        fontSize: 12,
        color: '#6b7280',
    },
    transactionAmount: {
        fontSize: 15,
        fontWeight: '600',
        color: '#dc2626',
    },

    /* Empty state */
    emptyCard: {
        alignItems: 'center',
        paddingVertical: 32,
        paddingHorizontal: 24,
        borderRadius: 16,
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    emptyIcon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#f1f5f9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    emptyTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#475569',
        marginBottom: 4,
    },
    emptySubtitle: {
        fontSize: 13,
        color: '#94a3b8',
        textAlign: 'center',
    },

    /* Eliminar */
    deleteButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dc2626',
        backgroundColor: 'rgba(239,68,68,0.05)',
        marginTop: 8,
    },
    deleteIcon: {
        marginRight: 8,
    },
    deleteText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#dc2626',
    },

    /* Modal */
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        width: '100%',
        maxWidth: 340,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    modalDescription: {
        fontSize: 14,
        color: '#6b7280',
        lineHeight: 20,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'flex-end',
    },
    modalCancel: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d1d5db',
    },
    modalCancelText: {
        fontSize: 14,
        color: '#374151',
        fontWeight: '500',
    },
    modalDelete: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#dc2626',
    },
    modalDeleteText: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '600',
    },
});
