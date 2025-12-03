import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screen/DashboardScreen';
import { TransactionsScreen } from '../screen/TransactionsScreen';
import { BudgetsScreen } from '../screen/BudgetsScreen';
import { ProfileScreen } from '../screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
type IconName = React.ComponentProps<typeof Ionicons>["name"];
const Tab = createBottomTabNavigator();
const icons: Record<string, { focused: IconName; unfocused: IconName }> = {
    Dashboard: { focused: "home", unfocused: "home-outline" },
    Transactions: { focused: "cash", unfocused: "cash-outline" },
    Budgets: { focused: "bar-chart", unfocused: "bar-chart-outline" },
    Profile: { focused: "person", unfocused: "person-outline" },
};
export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const iconSet = icons[route.name];
                    const iconName = focused ? iconSet.focused : iconSet.unfocused;
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >



            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Budgets" component={BudgetsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}