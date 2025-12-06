import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: '#059669',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
    },
    headerCount: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    addButtonText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: '600',
        color: '#059669',
    },
    searchContainer: {
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        top: 14,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        borderRadius: 12,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: 'rgba(255,255,255,0.95)',
        fontSize: 14,
    },
    listContainer: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: 24,
    },
    section: {},
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionIndicator: {
        width: 4,
        height: 20,
        borderRadius: 2,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0f172a',
        marginLeft: 8,
    },
    sectionBadge: {
        fontSize: 12,
        color: '#64748b',
        marginLeft: 'auto',
    },
    categoryCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    categoryContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    categoryIconText: {
        fontSize: 18,
        fontWeight: '700',
    },
    categoryInfo: {
        flex: 1,
    },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0f172a',
    },
    defaultBadge: {
        fontSize: 10,
        backgroundColor: '#dbeafe',
        color: '#2563eb',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginLeft: 6,
    },
    categoryCount: {
        fontSize: 12,
        color: '#64748b',
    },
    categoryActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    deleteButton: {
        padding: 6,
        borderRadius: 8,
        backgroundColor: '#fef2f2',
    },
    emptyState: {
        alignItems: 'center',
        paddingVertical: 48,
    },
    emptyText: {
        fontSize: 14,
        color: '#64748b',
        marginBottom: 8,
    },
    clearButton: {
        paddingVertical: 6,
    },
    clearButtonText: {
        fontSize: 14,
        color: '#059669',
    },
    // Alert Modal
    alertOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContent: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        width: '85%',
        maxWidth: 400,
    },
    alertHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f172a',
    },
    alertDescription: {
        fontSize: 14,
        color: '#475569',
        marginBottom: 8,
        lineHeight: 20,
    },
    alertWarning: {
        backgroundColor: '#fef3c7',
        color: '#92400e',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f59e0b',
        fontSize: 12,
        marginBottom: 16,
    },
    alertButtons: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'flex-end',
    },
    alertButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    alertCancel: {
        borderWidth: 1,
        borderColor: '#d1d5db',
    },
    alertCancelText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#475569',
    },
    alertDelete: {
        backgroundColor: '#dc2626',
    },
    alertDeleteText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
    },
    // BackButton styles
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 4,
        marginBottom: 12,
        borderRadius: 8,
    },
    backText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff',
    },

});
