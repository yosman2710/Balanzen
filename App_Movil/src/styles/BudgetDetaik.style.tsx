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
    headerTextBlock: {
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
    headerIconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 14,
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

    /* Cards base */
    card: {
        borderRadius: 16,
        padding: 16,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    cardSection: {
        gap: 12,
    },

    /* Estado del presupuesto */
    cardOver: {
        backgroundColor: '#fef2f2',
        borderColor: '#fecaca',
    },
    cardNear: {
        backgroundColor: '#fffbeb',
        borderColor: '#fed7aa',
    },
    cardOk: {
        backgroundColor: '#ecfdf5',
        borderColor: '#bbf7d0',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelMuted: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 2,
    },
    amountMain: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },

    progressTrack: {
        height: 10,
        borderRadius: 999,
        backgroundColor: '#e5e7eb',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 999,
    },

    statusText: {
        fontSize: 13,
        fontWeight: '500',
    },
    statusTextSmall: {
        fontSize: 12,
    },

    alertBoxOver: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fee2e2',
    },
    alertTextOver: {
        fontSize: 12,
        color: '#b91c1c',
        flex: 1,
    },
    alertBoxNear: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffedd5',
    },
    alertTextNear: {
        fontSize: 12,
        color: '#c2410c',
        flex: 1,
    },

    /* Configuración */
    cardTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    infoIconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    infoTextBlock: {
        flex: 1,
    },
    infoValue: {
        fontSize: 14,
        color: '#111827',
    },

    /* Sección transacciones */
    section: {
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0f172a',
    },
    sectionSubtitle: {
        fontSize: 12,
        color: '#6b7280',
    },
    txList: {
        marginTop: 8,
        gap: 8,
    },
    txCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOpacity: 0.03,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
    },
    txLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    txIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    txInfo: {
        flex: 1,
    },
    txDescription: {
        fontSize: 14,
        color: '#111827',
    },
    txDate: {
        fontSize: 12,
        color: '#6b7280',
    },
    txRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    txAmount: {
        fontSize: 14,
        fontWeight: '600',
        color: '#dc2626',
    },

    /* Empty state transacciones */
    emptyCard: {
        alignItems: 'center',
        paddingVertical: 28,
    },
    emptyIconCircle: {
        width: 64,
        height: 64,
        borderRadius: 999,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    emptyTitle: {
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 4,
    },
    emptySubtitle: {
        fontSize: 13,
        color: '#9ca3af',
    },

    /* Eliminar presupuesto */
    deleteSection: {
        marginTop: 16,
        marginBottom: 8,
    },
    deleteButton: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dc2626',
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#dc2626',
    },

    /* Modal confirmación */
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(15,23,42,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    modalCard: {
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#ffffff',
        padding: 18,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    modalText: {
        fontSize: 13,
        color: '#4b5563',
        marginBottom: 16,
    },
    modalButtonsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
    modalCancel: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d1d5db',
    },
    modalCancelText: {
        fontSize: 13,
        color: '#374151',
    },
    modalDelete: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#dc2626',
    },
    modalDeleteText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#ffffff',
    },
});
