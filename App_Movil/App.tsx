import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { WelcomeScreen } from "./src/screen/WelcomeScreen";
import { RegisterScreen } from "./src/screen/RegisterScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { AddTransactionWrapper } from "./src/Wrapper/AddTransactionWrapper";
import { AddBudgetWrapper } from "./src/Wrapper/AddBudgetWrapper";

import { TabNavigation } from "./src/navegation/TabNavegation";
enableScreens();



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddTransaction" component={AddTransactionWrapper} options={{ headerShown: false }} />
        <Stack.Screen name="AddBudget" component={AddBudgetWrapper} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


