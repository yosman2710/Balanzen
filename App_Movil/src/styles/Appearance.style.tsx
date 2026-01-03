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
    accentCardStyle: {
        padding: 20,
    } as ViewStyle,

    previewCardStyle: {
        overflow: 'hidden',
    } as ViewStyle,

    infoCardStyle: {
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
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

    /* Temas */
    themeList: {
        gap: 12,
    },
    themeCard: {
        borderWidth: 2,
        borderColor: 'transparent',
    },
    themeCardSelected: {
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.05)',
    },
    themeCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    themeIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
    },
    themeInfo: {
        flex: 1,
    },
    themeName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    themeDescription: {
        fontSize: 13,
        color: '#6b7280',
    },
    checkIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* Colores de acento */
    accentGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'space-between',
    },
    accentButton: {
        alignItems: 'center',
        gap: 8,
    },
    accentColor: {
        width: 56,
        height: 56,
        borderRadius: 12,
    },
    accentSelected: {
        transform: [{ scale: 1.1 }],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    accentCheckWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accentCheck: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accentName: {
        fontSize: 12,
        color: '#6b7280',
    },
    accentNameSelected: {
        color: '#111827',
        fontWeight: '600',
    },

    /* Vista previa */
    previewHeader: {
        padding: 24,
        paddingBottom: 16,
    },
    previewTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 4,
    },
    previewSubtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
    },
    previewContent: {
        padding: 16,
        gap: 12,
    },
    previewItem: {
        flexDirection: 'row',
        gap: 12,
    },
    previewIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewInfo: {
        flex: 1,
    },
    previewItemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    previewItemSubtitle: {
        fontSize: 13,
        color: '#6b7280',
    },
    previewProgress: {
        height: 8,
    },
    previewProgressTrack: {
        flex: 1,
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
    },
    previewProgressBar: {
        height: '100%',
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
        color: '#111827',
        marginBottom: 4,
    },
    infoSubtitle: {
        fontSize: 13,
        color: '#6b7280',
        lineHeight: 18,
    },

    bottomSpacer: {
        height: 40,
    },
});
