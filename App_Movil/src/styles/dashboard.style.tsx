import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#f8fafc',
  },
  cardsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  outlineButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#10b981',
    backgroundColor: 'transparent',
    paddingVertical: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  outlineButtonText: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
  chartCard: {
    padding: 20,
    marginBottom: 24,
  },
  chartHeader: {
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 8,
  }, incomeCard: {
    backgroundColor: '#ecfdf3',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#bbf7d0',
    overflow: 'hidden',
    marginBottom: 12,
  },
  expenseCard: {
    backgroundColor: '#fff7ed',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fed7aa',
    overflow: 'hidden',
    marginBottom: 12,
  },
  balanceCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    overflow: 'hidden',
    marginBottom: 12,
  },
  cardIconTopRight: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  cardIconLeft: {
    position: 'absolute',
    top: 14,
    left: 16,
  },
  incomeIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expenseIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#fee2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    marginTop: 40,
  },
  cardLabel: {
    fontSize: 13,
    color: '#166534',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#022c22',
    marginBottom: 4,
  },
  cardSubPositive: {
    fontSize: 12,
    color: '#16a34a',
  },
  expenseLabel: {
    fontSize: 13,
    color: '#b91c1c',
    marginBottom: 4,
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7f1d1d',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#1d4ed8',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  balanceSub: {
    fontSize: 12,
    color: '#2563eb',
  },

  // Savings card
  savingsCard: {
    backgroundColor: '#faf5ff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9d5ff',
    marginBottom: 16,
  },
  savingsHeader: {
    marginBottom: 12,
  },
  savingsHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  savingsIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#ede9fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savingsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  savingsSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  savingsAmountsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  savingsCurrent: {
    fontSize: 14,
    color: '#111827',
  },
  savingsTarget: {
    fontSize: 14,
    color: '#111827',
  },
  savingsProgress: {
    marginTop: 4,
    marginBottom: 6,
  },
  savingsPercentText: {
    fontSize: 12,
    color: '#7c3aed',
  },

  // Transacciones recientes
  txSection: {
    marginTop: 8,
    marginBottom: 24,
  },
  txHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  txTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  txSeeAll: {
    fontSize: 12,
    color: '#10b981',
  },
  txCard: {
    padding: 12,
    borderRadius: 12,
  },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  txIconIncome: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txIconExpense: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#fee2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txDescription: {
    fontSize: 14,
    color: '#0f172a',
  },
  txCategory: {
    fontSize: 12,
    color: '#6b7280',
  },
  txRight: {
    alignItems: 'flex-end',
  },
  txAmountIncome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  txAmountExpense: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc2626',
  },
  txDate: {
    fontSize: 12,
    color: '#6b7280',
  },
});