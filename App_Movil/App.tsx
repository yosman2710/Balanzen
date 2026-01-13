import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { WelcomeScreen } from "./src/screen/WelcomeScreen";
import { RegisterScreen } from "./src/screen/RegisterScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { AddTransactionWrapper } from "./src/Wrapper/AddTransactionWrapper";
import { AddBudgetWrapper } from "./src/Wrapper/AddBudgetWrapper";
import { AddCategoryWrapper } from "./src/Wrapper/AddCategoriesWrapper";
import { CategoriesWrapper } from "./src/Wrapper/CategoriesWrapper";
import { CategoryDetailScreen } from "./src/screen/CategoryDetailsScreen";
import { BudgetDetailWrapper } from "./src/Wrapper/BudgetDetailWrapper";
import { AddSavingsGoalWrapper } from "./src/Wrapper/AddSavingsGoalWrapper";
import { SavingsGoalDetailWrapper } from "./src/Wrapper/SavingsGoalDetailWrapper";
import { TermsScreen } from "./src/screen/TermsScreen";
import { HelpCenterScreen } from "./src/screen/HelpCenterScreen";
import { AppearanceScreen } from "./src/screen/AppearanceScreen";
import { LanguageScreen } from "./src/screen/LanguageScreen";
import { EditProfileScreen } from "./src/screen/EditProfileScreen";
import { SecurityScreen } from "./src/screen/SecurityScreen";
import { PrivacyScreen } from "./src/screen/PrivacyScreen";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "It looks like you might be using shared value's .value inside reanimated inline style"
]);
import { TabNavigation } from "./src/navegation/TabNavegation";
enableScreens();



const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right', // Default animation for all screens
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigation} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
        {/* Modal screens for creating items */}
        <Stack.Screen
          name="AddTransaction"
          component={AddTransactionWrapper}
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="AddBudget"
          component={AddBudgetWrapper}
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryWrapper}
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name="AddSavingsGoal"
          component={AddSavingsGoalWrapper}
          options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
        />

        {/* Detail screens (keep default slide_from_right) */}
        <Stack.Screen name="Categories" component={CategoriesWrapper} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
        <Stack.Screen name="BudgetDetail" component={BudgetDetailWrapper} />
        <Stack.Screen name="SavingsGoalDetail" component={SavingsGoalDetailWrapper} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}


