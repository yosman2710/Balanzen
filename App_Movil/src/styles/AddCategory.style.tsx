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
        paddingVertical: 4,
        paddingHorizontal: 4,
        marginBottom: 12,
    },
    backText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff',
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
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        color: '#475569',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginLeft: 12,
    },
    input: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: '#0f172a',
    },
    inputError: {
        borderColor: '#dc2626',
    },
    errorText: {
        marginTop: 4,
        fontSize: 12,
        color: '#dc2626',
    },
    typeButtons: {
        flexDirection: 'row',
        gap: 8,
    },
    typeButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
    },
    typeButtonActive: {
        backgroundColor: '#10b981',
        borderColor: '#10b981',
    },
    typeButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#64748b',
    },
    typeButtonTextActive: {
        color: '#ffffff',
    },
    iconGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    iconButton: {
        width: 56,
        height: 56,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#e2e8f0',
        backgroundColor: '#f8fafc',
    },
    iconButtonActive: {
        borderColor: '#10b981',
        backgroundColor: '#ecfdf5',
    },
    iconEmoji: {
        fontSize: 24,
    },
    colorGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    colorButton: {
        width: 56,
        height: 56,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    colorButtonActive: {
        borderColor: '#0f172a',
        borderWidth: 3,
        transform: [{ scale: 1.1 }],
    },
    colorSwatch: {
        width: 32,
        height: 32,
        borderRadius: 8,
    },
    colorCheck: {
        position: 'absolute',
    },
    previewCard: {
        backgroundColor: '#f1f5f9',
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
    },
    previewTitle: {
        fontSize: 12,
        color: '#475569',
        marginBottom: 12,
    },
    previewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    previewIcon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewIconText: {
        fontSize: 20,
        fontWeight: '700',
    },
    previewName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0f172a',
    },
    previewType: {
        fontSize: 12,
        color: '#64748b',
    },
    buttonsRow: {
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        backgroundColor: '#ffffff',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 14,
    },
    buttonOutlineText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#475569',
    },
    buttonPrimary: {
        backgroundColor: '#10b981',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 14,
    },
    buttonPrimaryText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
    },
    iconLabel: {
        fontSize: 10,
        color: '#64748b',
        marginTop: 4,
        textAlign: 'center',
    },
    previewIconReal: {
        width: 24,
        height: 24,
    },

});
