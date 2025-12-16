export type RootStackParamList = {
    MainTabs: undefined;
    Register: undefined;
    Login: undefined;
    AddTransaction: { defaultType: 'ingreso' | 'gasto' };
    AddBudget: undefined;
    BudgetDetail: {
        budget: {
            id: string;
            categoryName: string;
            categoryIcon: string;
            categoryColor: string;
            amount: number;
            spent: number;
            period: string;
            categoryId: string;
            alertThreshold: number;
            startDate: string;
        }
    };
    Profile: undefined;        // ← NUEVO
    Categories: undefined;     // ← NUEVO
    CategoryDetail: { categoryId: string };
    AddCategory: undefined;
};