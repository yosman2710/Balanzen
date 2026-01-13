import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#16A34A', // emerald-600
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    backButtonText: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 16,
        fontWeight: '600',
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    section: {
        gap: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B', // slate-800
    },
    inputContainer: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#334155', // slate-700
    },
    passwordInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E2E8F0', // slate-200
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
    },
    inputError: {
        borderColor: '#EF4444', // red-500
    },
    inputIcon: {
        marginRight: 12,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
    },
    eyeIcon: {
        padding: 4,
    },
    errorText: {
        color: '#DC2626', // red-600
        fontSize: 14,
    },
    helperText: {
        color: '#64748B', // slate-500
        fontSize: 14,
    },
    changePasswordButton: {
        backgroundColor: '#16A34A',
        borderRadius: 12,
        paddingVertical: 24,
        marginTop: 8,
    },
    changePasswordButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    authCard: {
        borderWidth: 1,
        borderColor: '#F1F5F9', // slate-100
        borderRadius: 12,
    },
    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#F1F5F9',
    },
    toggleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueIcon: {
        backgroundColor: '#DBEAFE', // blue-100
    },
    purpleIcon: {
        backgroundColor: '#EDE9FE', // purple-100
    },
    toggleTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B', // slate-900
    },
    toggleSubtitle: {
        fontSize: 14,
        color: '#64748B', // slate-500
    },
    switchContainer: {
        width: 52,
        height: 32,
        backgroundColor: '#E2E8F0',
        borderRadius: 16,
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    switchActive: {
        backgroundColor: '#10B981', // emerald-500
    },
    switchThumb: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    switchThumbActive: {
        transform: [{ translateX: 20 }],
    },
    infoCard: {
        backgroundColor: '#EFF6FF', // blue-50
        borderColor: '#BFDBFE', // blue-200
        padding: 16,
        marginTop: 16,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    infoIcon: {
        marginTop: 2,
    },
    infoContent: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E40AF', // blue-900
        marginBottom: 4,
    },
    infoText: {
        fontSize: 14,
        color: '#1D4ED8', // blue-700
        lineHeight: 20,
    },
});
