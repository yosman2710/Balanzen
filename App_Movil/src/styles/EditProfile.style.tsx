import { StyleSheet, ViewStyle } from 'react-native';

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
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },

    content: { flex: 1 },

    /* ESTILOS PARA TU COMPONENTE Card */
    formCardStyle: {
        padding: 20,
        marginHorizontal: 24,
        marginTop: 16,
        marginBottom: 20,
    } as ViewStyle,

    /* Campos */
    field: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
    },
    inputError: {
        borderColor: '#ef4444',
        backgroundColor: '#fef2f2',
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color: '#111827',
    },
    selectWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    selectContainer: {
        flex: 1,
    },
    selectTrigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
    },
    selectPlaceholder: {
        fontSize: 16,
        color: '#6b7280',
        flex: 1,
    },
    selectIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },

    errorText: {
        fontSize: 12,
        color: '#dc2626',
        marginTop: 4,
    },

    /* Botones */
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 24,
        paddingBottom: 32,
    },
    cancelButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#6b7280',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#059669',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },

    bottomSpacer: {
        height: 40,
    },
});
