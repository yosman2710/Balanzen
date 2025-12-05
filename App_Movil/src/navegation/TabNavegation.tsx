import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screen/DashboardScreen";
import { TransactionsScreen } from "../screen/TransactionsScreen";
import { BudgetsScreen } from "../screen/BudgetsScreen";
import { ProfileScreen } from "../screen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './type';


type RootNav = NativeStackNavigationProp<RootStackParamList>;
function DashboardWrapper() {
    const navigation = useNavigation<RootNav>();

    const handleAddIncome = () => {
        navigation.navigate('AddTransaction', { defaultType: 'income' });
    };

    const handleAddExpense = () => {
        navigation.navigate('AddTransaction', { defaultType: 'expense' });
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

const Tab = createBottomTabNavigator<TabParamList>();

const icons: Record<keyof TabParamList, { focused: IconName; unfocused: IconName }> = {
    Dashboard: { focused: "home", unfocused: "home-outline" },
    Transactions: { focused: "cash", unfocused: "cash-outline" },
    Budgets: { focused: "bar-chart", unfocused: "bar-chart-outline" },
    Profile: { focused: "person", unfocused: "person-outline" },
};

// 🔥 Wrapper para añadir swipe
function withSwipe<P>(Component: React.ComponentType<P>, leftRoute: keyof TabParamList, rightRoute: keyof TabParamList) {
    return function SwipeWrapper(props: P & { navigation: any }) {
        const { navigation } = props;
        return (
            <GestureRecognizer
                onSwipeLeft={() => navigation.navigate(leftRoute)}
                onSwipeRight={() => navigation.navigate(rightRoute)}
                style={{ flex: 1 }}
            >
                <Component {...props} />
            </GestureRecognizer>
        );
    };
}

export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#04c084ff",
                tabBarInactiveTintColor: "#95a5a6",
                animationEnabled: true,
                tabBarIcon: ({ focused, color, size }) => {
                    const { focused: fIcon, unfocused: uIcon } = icons[route.name as keyof TabParamList];
                    const iconName = focused ? fIcon : uIcon;
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={withSwipe(DashboardWrapper, "Transactions", "Profile")} />
            <Tab.Screen name="Transactions" component={withSwipe(TransactionsScreen, "Budgets", "Dashboard")} />
            <Tab.Screen name="Budgets" component={withSwipe(BudgetsScreen, "Profile", "Transactions")} />
            <Tab.Screen name="Profile" component={withSwipe(ProfileScreen, "Dashboard", "Budgets")} />
        </Tab.Navigator>
    );
}