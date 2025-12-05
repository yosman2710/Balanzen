import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 16,
        backgroundColor: '#059669',
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
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
    },
    formContent: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingBottom: 32,
    },
    field: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        color: '#475569',
        marginBottom: 6,
    },
    inputWrapper: {
        position: 'relative',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        backgroundColor: '#f8fafc',
    },
    inputErrorWrapper: {
        borderColor: '#dc2626',
        backgroundColor: '#fef2f2',
    },
    inputIcon: {
        position: 'absolute',
        left: 12,
        top: 12,
    },
    selectContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    input: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: '#0f172a',
    },
    inputBig: {
        fontSize: 22,
        fontWeight: '600',
    },
    inputError: {
        borderColor: '#dc2626',
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: '#dc2626',
    },
    helpText: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 4,
    },
    categoryPreview: {
        padding: 12,
        backgroundColor: '#f1f5f9',
        borderRadius: 12,
        marginBottom: 16,
    },
    previewTitle: {
        fontSize: 12,
        color: '#475569',
        marginBottom: 8,
    },
    previewRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    previewIcon: {
        width: 44,
        height: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    previewIconText: {
        fontSize: 20,
    },
    previewName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0f172a',
    },
    previewType: {
        fontSize: 12,
        color: '#64748b',
    },
    periodsRow: {
        flexDirection: 'row',
        gap: 8,
    },
    periodButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
    },
    periodButtonActive: {
        backgroundColor: '#10b981',
        borderColor: '#10b981',
    },
    periodButtonText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#64748b',
    },
    periodButtonTextActive: {
        color: '#ffffff',
    },
    sliderContainer: {
        marginBottom: 8,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    sliderValue: {
        alignItems: 'flex-end',
    },
    sliderValueText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#10b981',
    },
    sliderLabel: {
        fontSize: 12,
        color: '#475569',
        marginBottom: 8,
    },
    alertBox: {
        flexDirection: 'row',
        backgroundColor: '#fffbeb',
        borderWidth: 1,
        borderColor: '#fcd34d',
        borderRadius: 10,
        padding: 12,
        gap: 8,
    },
    alertText: {
        fontSize: 12,
        color: '#92400e',
        flex: 1,
    },
    summaryCard: {
        backgroundColor: '#ecfdf5',
        borderWidth: 1,
        borderColor: '#a7f3d0',
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
    },
    summaryTitle: {
        fontSize: 13,
        color: '#047857',
        fontWeight: '600',
        marginBottom: 12,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    summaryLabel: {
        fontSize: 12,
        color: '#047857',
    },
    summaryValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#065f46',
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 12,
    },
    button: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        backgroundColor: '#ffffff',
    },
    buttonOutlineText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#475569',
    },
    buttonPrimary: {
        backgroundColor: '#10b981',
    },
    buttonPrimaryText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
    },
    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(15,23,42,0.4)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    modalTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0f172a',
        marginBottom: 10,
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    modalDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    modalItemText: {
        fontSize: 14,
        color: '#0f172a',
    },
    selectText: {
        fontSize: 14,
        color: '#0f172a',
    },
    selectPlaceholder: {
        fontSize: 14,
        color: '#94a3b8',
    },

});
