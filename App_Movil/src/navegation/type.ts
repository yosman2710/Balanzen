export type RootStackParamList = {
    MainTabs: undefined;
    Register: undefined;
    Login: undefined;
    AddTransaction: { defaultType: 'ingreso' | 'gasto' };
    AddBudget: undefined;
    BudgetDetail: { id: string };
    Profile: undefined;        // ← NUEVO
    Categories: undefined;     // ← NUEVO
    CategoryDetail: { categoryId: string };
    AddCategory: undefined;
    AddSavingsGoal: undefined;
    SavingsGoalDetail: { id: string };
};