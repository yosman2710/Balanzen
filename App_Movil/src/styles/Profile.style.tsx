import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        paddingBottom: 24,
    },

    // Header
    header: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: '#059669',
    },
    headerCenter: {
        alignItems: 'center',
    },
    headerName: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    headerEmail: {
        marginTop: 2,
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
    },

    // Secciones
    sectionsWrapper: {
        paddingHorizontal: 24,
        paddingTop: 16,
        gap: 16,
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 6,
    },

    // Filas
    rowButton: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    rowTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0f172a',
    },
    rowSubtitle: {
        fontSize: 12,
        color: '#64748b',
    },

    // Info app
    appName: {
        fontSize: 13,
        textAlign: 'center',
        color: '#475569',
        marginBottom: 4,
    },
    appVersion: {
        fontSize: 11,
        textAlign: 'center',
        color: '#94a3b8',
    },

    // Logout
    logoutButton: {
        marginTop: 12,
        paddingVertical: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#dc2626',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#dc2626',
    },
});
