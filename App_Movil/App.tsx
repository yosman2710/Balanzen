import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { WelcomeScreen } from "./src/screen/WelcomeScreen";
import { RegisterScreen } from "./src/screen/RegisterScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { Dashboard } from "./src/screen/DashboardScreen";
import { TransactionsScreen } from "./src/screen/TransactionsScreen";
import { BudgetsScreen } from "./src/screen/BudgetsScreen";

enableScreens();



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Budgets">
        <Stack.Screen name="MainTabs" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Budgets" component={BudgetsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


