import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dashboard } from "../screen/DashboardScreen";
import { TransactionsScreen } from "../screen/TransactionsScreen";
import { BudgetsScreen } from "../screen/BudgetsScreen";
import { ProfileScreen } from "../screen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './type';
import { Platform } from "react-native";

type RootNav = NativeStackNavigationProp<RootStackParamList>;
function DashboardWrapper() {
    const navigation = useNavigation<RootNav>();

    const handleAddIncome = () => {
        navigation.navigate('AddTransaction', { defaultType: 'ingreso' });
    };

    const handleAddExpense = () => {
        navigation.navigate('AddTransaction', { defaultType: 'gasto' });
    };

    return (
        <Dashboard
            onAddIncome={handleAddIncome}
            onAddExpense={handleAddExpense}
        />
    );
}

type IconName = React.ComponentProps<typeof Ionicons>["name"];

export type TabParamList = {
    Dashboard: undefined;
    Transactions: undefined;
    Budgets: undefined;
    Profile: undefined;
};

// Use Material Top Tabs but positioned at the bottom
const Tab = createMaterialTopTabNavigator<TabParamList>();

const icons: Record<keyof TabParamList, { focused: IconName; unfocused: IconName }> = {
    Dashboard: { focused: "home", unfocused: "home-outline" },
    Transactions: { focused: "cash", unfocused: "cash-outline" },
    Budgets: { focused: "bar-chart", unfocused: "bar-chart-outline" },
    Profile: { focused: "person", unfocused: "person-outline" },
};

export function TabNavigation() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={({ route }) => ({
                swipeEnabled: true,
                tabBarShowLabel: false, // Hide text labels to look cleaner, or set to true if needed
                tabBarActiveTintColor: "#04c084ff",
                tabBarInactiveTintColor: "#95a5a6",
                tabBarIndicatorStyle: { height: 0 }, // Hide the top line indicator
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 1, // Optional: add a border to separate from content
                    borderTopColor: '#f0f0f0',
                    elevation: 8, // Shadow for Android
                    shadowOpacity: 0.1, // Shadow for iOS
                    paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Visual adjustment for safe area
                },
                tabBarIcon: ({ focused, color }) => {
                    const { focused: fIcon, unfocused: uIcon } = icons[route.name as keyof TabParamList];
                    const iconName = focused ? fIcon : uIcon;
                    // MaterialTopTabs doesn't pass 'size', so we define it manually (usually 24 or 26)
                    return <Ionicons name={iconName} size={24} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardWrapper} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Budgets" component={BudgetsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}