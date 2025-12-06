export type RootStackParamList = {
    MainTabs: undefined;
    Register: undefined;
    Login: undefined;
    AddTransaction: { defaultType: 'income' | 'expense' };
    AddBudget: undefined;
    Profile: undefined;        // ← NUEVO
    Categories: undefined;     // ← NUEVO
    AddCategory: undefined;
};