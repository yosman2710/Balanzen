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
        marginBottom: 14,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        color: '#475569',
        marginBottom: 6,
    },

    // Tabs tipo / ingreso / gasto
    tabsRow: {
        flexDirection: 'row',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    tabActiveIncome: {
        backgroundColor: '#16a34a',
    },
    tabActiveExpense: {
        backgroundColor: '#dc2626',
    },
    tabText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#64748b',
    },
    tabTextActive: {
        color: '#ffffff',
    },

    // Inputs
    inputWrapper: {
        position: 'relative',
    },
    inputIcon: {
        position: 'absolute',
        left: 10,
        top: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: '#0f172a',
        backgroundColor: '#f8fafc',
    },
    inputBig: {
        fontSize: 22,
        fontWeight: '600',
    },
    inputError: {
        borderColor: '#dc2626',
    },
    textarea: {
        height: 80,
        textAlignVertical: 'top',
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: '#dc2626',
    },

    // Select categoría
    selectButton: {
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        backgroundColor: '#f8fafc',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    selectText: {
        fontSize: 14,
        color: '#0f172a',
    },
    selectPlaceholder: {
        fontSize: 14,
        color: '#94a3b8',
    },

    // Botones
    buttonsRow: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 10,
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
        borderColor: '#cbd5f5',
        backgroundColor: '#ffffff',
    },
    buttonOutlineText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#475569',
    },
    buttonIncome: {
        backgroundColor: '#16a34a',
    },
    buttonExpense: {
        backgroundColor: '#dc2626',
    },
    buttonPrimaryText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
    },

    // Modal categorías
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
        borderRadius: 999,
        marginRight: 10,
    },
    modalItemText: {
        fontSize: 14,
        color: '#0f172a',
    },
    // Agrega estos estilos al final de tu AddTransactionScreen.styles.ts

    inputErrorWrapper: {
        borderColor: '#dc2626',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#fef2f2',
    },

    selectContent: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
    },

});
