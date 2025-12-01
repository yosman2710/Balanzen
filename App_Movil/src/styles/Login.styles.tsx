import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#047857', // emerald-600
        paddingHorizontal: 24,
        paddingVertical: 24,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 1,
        padding: 8,
    },
    headerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 24,
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        lineHeight: 22,
    },
    formContainer: {
        paddingHorizontal: 32,
        paddingVertical: 150,
        paddingBottom: 60,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#334155', // slate-700
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e2e8f0', // slate-200
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#f8fafc', // slate-50
        height: 60,
    },
    passwordWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e2e8f0',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#f8fafc',
        height: 60,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1e293b',
        paddingVertical: 0,
    },
    flexInput: {
        flex: 1,
    },
    icon: {
        marginRight: 12,
    },
    inputError: {
        borderColor: '#ef4444', // red-500
        backgroundColor: '#fef2f2',
    },
    eyeButton: {
        padding: 4,
    },
    errorText: {
        color: '#ef4444',
        fontSize: 14,
        marginTop: 6,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 32,
    },
    forgotPasswordText: {
        color: '#059669', // emerald-600
        fontSize: 15,
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: '#059669', // emerald-600
        borderRadius: 16,
        paddingVertical: 24,
        alignItems: 'center',
        marginBottom: 32,
        shadowColor: '#059669',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
        paddingHorizontal: 32,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#e2e8f0', // slate-200
    },
    separatorText: {
        paddingHorizontal: 16,
        color: '#64748b', // slate-500
        fontSize: 15,
    },
    registerButton: {
        borderWidth: 2,
        borderColor: '#059669',
        backgroundColor: 'transparent',
        borderRadius: 16,
        paddingVertical: 24,
        alignItems: 'center',
        marginHorizontal: 32,
        marginBottom: 40,
    },
    registerButtonText: {
        color: '#059669',
        fontSize: 18,
        fontWeight: '700',
    },
});
