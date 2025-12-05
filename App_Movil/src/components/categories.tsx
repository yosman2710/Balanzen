// src/data/categoriesMock.ts
export interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
    type: 'income' | 'expense' | 'both';
    isDefault: boolean;
}

export const categoriesMock: Category[] = [
    // INGRESOS
    {
        id: 'income-1',
        name: 'Salario',
        icon: 'Briefcase',
        color: '#10b981',
        type: 'income',
        isDefault: true,
    },
    {
        id: 'income-2',
        name: 'Freelance',
        icon: 'Laptop2',
        color: '#059669',
        type: 'income',
        isDefault: false,
    },
    {
        id: 'income-3',
        name: 'Inversiones',
        icon: 'TrendingUp',
        color: '#16a34a',
        type: 'income',
        isDefault: false,
    },

    // GASTOS - Alimentación
    {
        id: 'expense-1',
        name: 'Supermercado',
        icon: 'ShoppingCart',
        color: '#f59e0b',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 'expense-2',
        name: 'Restaurantes',
        icon: 'Utensils',
        color: '#d97706',
        type: 'expense',
        isDefault: false,
    },

    // GASTOS - Vivienda
    {
        id: 'expense-3',
        name: 'Renta',
        icon: 'Home',
        color: '#3b82f6',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 'expense-4',
        name: 'Servicios',
        icon: 'Zap',
        color: '#1d4ed8',
        type: 'expense',
        isDefault: false,
    },

    // GASTOS - Transporte
    {
        id: 'expense-5',
        name: 'Gasolina',
        icon: 'Car',
        color: '#ef4444',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 'expense-6',
        name: 'Transporte público',
        icon: 'Bus',
        color: '#dc2626',
        type: 'expense',
        isDefault: false,
    },

    // GASTOS - Entretenimiento
    {
        id: 'expense-7',
        name: 'Streaming',
        icon: 'Tv',
        color: '#8b5cf6',
        type: 'expense',
        isDefault: false,
    },
    {
        id: 'expense-8',
        name: 'Cine',
        icon: 'Clapperboard',
        color: '#7c3aed',
        type: 'expense',
        isDefault: false,
    },

    // GASTOS - Otros
    {
        id: 'expense-9',
        name: 'Salud',
        icon: 'HeartPulse',
        color: '#ec4899',
        type: 'expense',
        isDefault: true,
    },
    {
        id: 'expense-10',
        name: 'Ropa',
        icon: 'ShoppingBag',
        color: '#f472b6',
        type: 'expense',
        isDefault: false,
    },

    // AMBAS (ambos ingresos y gastos)
    {
        id: 'both-1',
        name: 'Transferencia',
        icon: 'ArrowsUpDown',
        color: '#6b7280',
        type: 'both',
        isDefault: true,
    },
    {
        id: 'both-2',
        name: 'Efectivo',
        icon: 'DollarSign',
        color: '#9ca3af',
        type: 'both',
        isDefault: false,
    },
];
