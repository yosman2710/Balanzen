import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#047857', // emerald-600
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    backButtonText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        color: '#334155', // slate-700
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cbd5e1', // slate-300
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f8fafc', // slate-50
    },
    input: {
        flex: 1,
        height: 40,
        color: '#1e293b', // slate-800
        paddingLeft: 8,
    },
    inputError: {
        borderColor: '#dc2626', // red-600
    },
    icon: {
        marginRight: 8,
    },
    errorText: {
        color: '#dc2626',
        marginTop: 4,
        fontSize: 12,
    },
    passwordWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f8fafc',
    },
    flexInput: {
        flex: 1,
    },
    eyeButton: {
        padding: 8,
    },
    loginLinkContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginLink: {
        color: '#059669', // emerald-600
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#059669',
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#059669',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    registerButtonDisabled: {
        backgroundColor: '#6ee7b7',
        opacity: 0.7,
    },
    // Agregar estos estilos a tu archivo existente
    inputText: {
        flex: 1,
        fontSize: 16,
        color: '#1e293b',
    },
    placeholderText: {
        color: '#94a3b8',
    },

    loginLinkText: {
        color: '#64748b',
        fontSize: 15,
    },

});
