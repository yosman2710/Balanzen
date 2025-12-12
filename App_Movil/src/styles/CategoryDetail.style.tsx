// styles/CategoryDetail.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

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
        marginLeft: 6,
        color: '#e5e7eb',
        fontSize: 14,
    },
    headerMain: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    headerIconWrapper: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 2,
    },
    headerSubtitle: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },

    statsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    statCard: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.12)',
        padding: 12,
    },
    statLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
        marginBottom: 4,
    },
    statValue: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

    body: {
        flex: 1,
    },
    bodyContent: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingBottom: 32,
    },

    monthSection: {
        marginBottom: 16,
    },
    monthTitle: {
        fontSize: 14,
        color: '#4b5563',
        fontWeight: '600',
        marginBottom: 8,
        textTransform: 'capitalize',
    },

    txCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        marginBottom: 6,
        shadowColor: '#000000',
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
    },
    txLeft: {
        flexDirection: 'row',
        flex: 1,
        gap: 10,
    },
    txIconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txInfo: {
        flex: 1,
    },
    txDescription: {
        fontSize: 14,
        color: '#111827',
    },
    txDate: {
        fontSize: 12,
        color: '#6b7280',
    },
    txNotes: {
        marginTop: 2,
        fontSize: 12,
        color: '#9ca3af',
    },

    txRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: 8,
    },
    txAmount: {
        fontSize: 14,
        fontWeight: '600',
    },
    txAmountIncome: {
        color: '#16a34a',
    },
    txAmountExpense: {
        color: '#dc2626',
    },

    emptyState: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyIconWrapper: {
        width: 64,
        height: 64,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    emptyTitle: {
        fontSize: 15,
        color: '#6b7280',
        marginBottom: 4,
    },
    emptySubtitle: {
        fontSize: 13,
        color: '#9ca3af',
        textAlign: 'center',
    },
});
