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

    /* ESTILOS PARA TUS COMPONENTES Card */
    contactCardStyle: {
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb',
    } as ViewStyle,

    faqCardStyle: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        overflow: 'hidden',
    } as ViewStyle,

    resourceCardStyle: {
        borderWidth: 1,
        borderColor: '#f1f5f9',
        marginBottom: 8,
    } as ViewStyle,

    supportCardStyle: {
        backgroundColor: '#ecfdf5',
        borderWidth: 1,
        borderColor: '#bbf7d0',
    } as ViewStyle,

    /* Contacto */
    contactGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    contactIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    contactSubtitle: {
        fontSize: 12,
        color: '#6b7280',
    },

    /* FAQs */
    faqSection: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16,
    },
    faqList: { gap: 12 },
    faqHeaderTouchable: {
        padding: 0,
    },
    faqHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 12,
    },
    faqIconWrapper: {
        width: 32,
        height: 32,
        backgroundColor: '#d1fae5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    faqQuestion: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    faqAnswer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 0,
    },
    answerLine: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginLeft: 44,
        marginBottom: 12,
    },
    faqAnswerText: {
        fontSize: 13,
        color: '#6b7280',
        lineHeight: 18,
    },

    /* ✅ RESOURCES SECTION (FALTABA ESTE) */
    resourcesSection: {
        marginBottom: 24,  // ← AQUÍ ESTÁ
    },

    /* Recursos */
    resourceTouchable: {
        flexDirection: 'row',
        padding: 16,
    },
    resourceIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    resourceText: { flex: 1 },
    resourceTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    resourceSubtitle: {
        fontSize: 13,
        color: '#6b7280',
    },

    /* Soporte */
    supportTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#065f46',
        marginBottom: 6,
    },
    supportSubtitle: {
        fontSize: 13,
        color: '#047857',
        marginBottom: 16,
        lineHeight: 18,
    },

    /* ESTILOS PARA TU COMPONENTE Button */
    supportButtonStyle: {
        flexDirection: 'row',
        backgroundColor: '#059669',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
        alignSelf: 'center',
    } as ViewStyle,

    supportButtonIcon: {
        marginRight: 8,
    },
    supportButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },

    bottomSpacer: { height: 40 },
});
