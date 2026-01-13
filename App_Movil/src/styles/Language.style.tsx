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
    languageCardStyle: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
    } as ViewStyle,

    currencyCardStyle: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
    } as ViewStyle,

    infoCardStyle: {
        backgroundColor: '#eff6ff',
        borderWidth: 1,
        borderColor: '#bfdbfe',
    } as ViewStyle,

    /* Secciones */
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16,
    },

    /* Listas */
    listContainer: {
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderTopWidth: 0,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    listItemSelected: {
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
    },

    /* Idioma */
    languageLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    flag: {
        fontSize: 24,
    },
    languageName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    languageNameSelected: {
        color: '#10b981',
    },

    /* Moneda */
    currencyLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    currencyIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
    },
    currencySymbol: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6b7280',
    },
    currencyInfo: {
        flex: 1,
    },
    currencyName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    currencyNameSelected: {
        color: '#10b981',
    },
    currencyCode: {
        fontSize: 13,
        color: '#6b7280',
    },

    /* Check */
    checkIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* Info */
    infoContent: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
    },
    infoIcon: {
        marginTop: 2,
    },
    infoText: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1e40af',
        marginBottom: 4,
    },
    infoSubtitle: {
        fontSize: 13,
        color: '#1d4ed8',
        lineHeight: 18,
    },

    bottomSpacer: {
        height: 40,
    },
});
