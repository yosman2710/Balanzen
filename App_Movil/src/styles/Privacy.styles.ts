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
    card: {
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
    orangeIcon: {
        backgroundColor: '#FEE2E2', // orange-100 -> red-100 para Lock
    },
    emeraldIcon: {
        backgroundColor: '#D1FAE5', // emerald-100
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
    actionRow: {
        padding: 16,
    },
    actionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
    },
    actionSubtitle: {
        fontSize: 14,
        color: '#64748B',
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
    dangerCard: {
        backgroundColor: '#FEF2F2', // red-50
        borderColor: '#FECACA', // red-200
        padding: 16,
    },
    dangerContent: {
        gap: 16,
    },
    dangerRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    dangerIcon: {
        marginTop: 2,
    },
    dangerText: {
        flex: 1,
    },
    dangerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7F1D1D', // red-900
        marginBottom: 4,
    },
    dangerDescription: {
        fontSize: 14,
        color: '#B91C1C', // red-700
        lineHeight: 20,
    },
    dangerButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: '#DC2626', // red-600
    },
    deleteButtonOutline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderWidth: 2,
        borderColor: '#DC2626',
        backgroundColor: 'rgba(220, 38, 38, 0.05)',
        paddingVertical: 24,
        borderRadius: 12,
    },
    deleteIcon: {
        marginRight: 8,
    },
    deleteButtonText: {
        color: '#DC2626',
        fontSize: 16,
        fontWeight: '600',
    },
    spacer: {
        height: 16,
    },
});
