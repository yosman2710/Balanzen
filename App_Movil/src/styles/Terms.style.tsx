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

    content: {
        flex: 1,
    },

    /* ESTILOS PARA TU COMPONENTE Card */
    updateCardStyle: {
        backgroundColor: '#eff6ff',
        borderWidth: 1,
        borderColor: '#bfdbfe',
    } as ViewStyle,

    policyCardStyle: {
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        flex: 1,
    } as ViewStyle,

    /* ✅ UPDATE TEXT (FALTABA ESTE) */
    updateText: {
        fontSize: 13,
        color: '#1e40af',
    } as ViewStyle,

    updateDate: {
        fontWeight: '600',
    },

    /* Secciones */
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 12,
    },
    sectionText: {
        fontSize: 13,
        color: '#6b7280',
        lineHeight: 18,
    },

    /* Lista */
    list: {
        marginTop: 12,
        marginLeft: 8,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet: {
        color: '#059669',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2,
        marginRight: 8,
        minWidth: 12,
    },
    listText: {
        fontSize: 13,
        color: '#6b7280',
        flex: 1,
        lineHeight: 18,
    },

    /* Contacto */
    contactEmail: {
        fontSize: 13,
        color: '#059669',
        marginTop: 8,
        fontWeight: '500',
    },

    /* Grid políticas */
    policyGrid: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
    policyIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    policyTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#111827',
        textAlign: 'center',
    },

    bottomSpacer: {
        height: 40,
    },
});

