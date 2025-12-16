// src/styles/AddBudget.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    /* Header */
    header: {
        backgroundColor: '#059669',
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
        color: '#e5e7eb',
        fontSize: 14,
        marginLeft: 6,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    headerSubtitle: {
        color: '#e5e7eb',
        fontSize: 14,
    },

    /* Form */
    form: {
        flex: 1,
    },
    formContent: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        gap: 16,
    },

    /* Campos */
    field: {
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        color: '#0f172a',
        marginBottom: 6,
        fontWeight: '500',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#cbd5f5',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
    },
    inputError: {
        borderColor: '#dc2626',
    },
    inputIcon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 14,
        color: '#0f172a',
    },
    inputLarge: {
        fontSize: 20,
        fontWeight: '600',
    },
    categoryPlaceholder: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 14,
        color: '#0f172a',
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: '#dc2626',
    },
    helperText: {
        marginTop: 4,
        fontSize: 12,
        color: '#64748b',
    },

    /* Grid categorías */
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: '#f8fafc',
    },
    categoryItemActive: {
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        borderColor: '#059669',
    },
    categoryDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },
    categoryItemText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#64748b',
    },

    /* Preview categoría */
    previewCategory: {
        padding: 12,
        backgroundColor: '#f1f5f9',
        borderRadius: 12,
        marginBottom: 12,
    },
    previewLabel: {
        fontSize: 12,
        color: '#475569',
        marginBottom: 8,
    },
    previewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    previewIconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0f172a',
    },
    previewType: {
        fontSize: 12,
        color: '#64748b',
    },

    /* Slider umbral */
    sliderContainer: {
        height: 40,
        justifyContent: 'center',
    },
    sliderTrack: {
        height: 4,
        borderRadius: 2,
        backgroundColor: '#e2e8f0',
        position: 'relative',
        overflow: 'hidden',
    },
    sliderFill: {
        height: '100%',
        backgroundColor: '#059669',
        borderRadius: 2,
    },
    sliderThumb: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#059669',
        top: -8,
        borderWidth: 3,
        borderColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    sliderLabel: {
        fontSize: 12,
        color: '#64748b',
    },
    sliderValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#059669',
    },

    /* Alert box */
    alertBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fef3c7',
        borderWidth: 1,
        borderColor: '#fcd34d',
        marginTop: 8,
    },
    alertIcon: {
        marginTop: 2,
        marginRight: 6,
    },
    alertText: {
        fontSize: 12,
        color: '#92400e',
        flex: 1,
        lineHeight: 16,
    },
    alertHighlight: {
        fontWeight: '600',
    },

    /* Resumen */
    summaryCard: {
        padding: 12,
        backgroundColor: '#ecfdf5',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#bbf7d0',
    },
    summaryTitle: {
        fontSize: 13,
        color: '#059669',
        marginBottom: 8,
        fontWeight: '500',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    summaryLabel: {
        fontSize: 12,
        color: '#64748b',
    },
    summaryValue: {
        fontSize: 13,
        fontWeight: '500',
        color: '#0f172a',
    },

    /* Botones */
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
        marginBottom: 16,
    },
    buttonOutline: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#059669',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutlineText: {
        color: '#059669',
        fontWeight: '600',
        fontSize: 14,
    },
    buttonPrimary: {
        flex: 1,
        backgroundColor: '#059669',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPrimaryText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    },
});
