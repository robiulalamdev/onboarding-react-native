import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Onboarding from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
