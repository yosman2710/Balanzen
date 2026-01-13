export type RootStackParamList = {
    MainTabs: undefined;
    Register: undefined;
    Login: undefined;
    Dashboard: undefined;
    AddTransaction: { defaultType: 'ingreso' | 'gasto' };
    AddBudget: undefined;
    BudgetDetail: { id: string };
    Profile: undefined;        // ← NUEVO
    Categories: undefined;     // ← NUEVO
    CategoryDetail: { categoryId: string };
    AddCategory: undefined;
    AddSavingsGoal: undefined;
    SavingsGoalDetail: { id: string };
    Terms: undefined;
    HelpCenter: undefined;
    Appearance: undefined;
    Language: undefined;
    EditProfile: undefined;
    Security: undefined;
    Privacy: undefined;

};