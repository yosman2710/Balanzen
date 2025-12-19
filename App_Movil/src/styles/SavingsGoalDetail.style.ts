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
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* Body */
    body: { flex: 1 },
    bodyContent: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingBottom: 32,
        gap: 16,
    },

    /* Progreso */
    progressCard: {
        backgroundColor: '#f3e8ff',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd6fe',
    },
    cardContent: { gap: 16 },
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amountRight: { alignItems: 'flex-end' },
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
    progressFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressPercent: {
        fontSize: 14,
        fontWeight: '600',
        color: '#8b5cf6',
    },
    remainingAmount: {
        fontSize: 12,
        color: '#6b7280',
    },

    /* Información */
    infoCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 16,
    },
    infoList: { gap: 12 },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    infoIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    infoContent: { flex: 1 },
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
    timeRemaining: {
        fontSize: 13,
        color: '#6b7280',
    },
    timeWarning: {
        color: '#f97316',
    },
    descriptionSection: {
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
    descriptionText: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
    },

    /* Formulario contribución */
    addFormCard: {
        backgroundColor: '#ecfdf5',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#bbf7d0',
    },
    formFields: { gap: 16 },
    field: { gap: 6 },
    label: {
        fontSize: 14,
        color: '#0f172a',
        fontWeight: '500',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
    },
    inputError: { borderColor: '#dc2626' },
    inputIcon: { marginRight: 8 },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#0f172a',
    },
    formButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    formCancel: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#059669',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    formCancelText: {
        color: '#059669',
        fontWeight: '500',
    },
    formAdd: {
        flex: 1,
        backgroundColor: '#059669',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    formAddText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    errorText: {
        fontSize: 12,
        color: '#dc2626',
    },

    /* Botón añadir */
    addButton: {
        flexDirection: 'row',
        backgroundColor: '#059669',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: { marginRight: 8 },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

    /* Contribuciones */
    contributionsSection: { marginTop: 8 },
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
    contributionsList: { gap: 8 },
    contributionCard: {
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
    contributionLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    contributionIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    contributionInfo: { flex: 1 },
    contributionAmountText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#059669',
    },
    contributionNote: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 2,
    },
    contributionRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    contributionDate: {
        fontSize: 12,
        color: '#6b7280',
    },
    deleteContribution: {
        padding: 6,
        borderRadius: 8,
        backgroundColor: 'rgba(239,68,68,0.1)',
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

    /* Eliminar meta */
    deleteGoalButton: {
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
    deleteIcon: { marginRight: 8 },
    deleteGoalText: {
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
