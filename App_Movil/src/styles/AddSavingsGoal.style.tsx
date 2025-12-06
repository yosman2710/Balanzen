import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#6d28d9',
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingTop: 32,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 6,
    },
    backText: {
        color: '#e5e7eb',
        fontSize: 14,
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
    form: {
        flex: 1,
    },
    formContent: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        gap: 16,
    },
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
    inputWrapperError: {
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
    inputAmount: {
        fontSize: 20,
        fontWeight: '600',
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
    textAreaWrapper: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#cbd5f5',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingTop: 8,
        paddingBottom: 8,
    },
    textAreaIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    textArea: {
        paddingLeft: 28,
        minHeight: 90,
        textAlignVertical: 'top',
        fontSize: 14,
        color: '#0f172a',
    },
    counterText: {
        marginTop: 4,
        fontSize: 12,
        color: '#64748b',
        textAlign: 'right',
    },
    previewCard: {
        marginTop: 8,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e9d5ff',
        backgroundColor: '#f5f3ff',
    },
    previewTitle: {
        fontSize: 13,
        color: '#6d28d9',
        marginBottom: 6,
        fontWeight: '500',
    },
    previewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    previewLabel: {
        fontSize: 12,
        color: '#64748b',
    },
    previewValue: {
        fontSize: 13,
        color: '#0f172a',
        fontWeight: '500',
    },
    previewTime: {
        fontSize: 13,
        color: '#6d28d9',
        fontWeight: '500',
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
        marginBottom: 16,
    },
    buttonOutline: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#6b21a8',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutlineText: {
        color: '#6b21a8',
        fontWeight: '600',
        fontSize: 14,
    },
    buttonPrimary: {
        flex: 1,
        backgroundColor: '#6d28d9',
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
