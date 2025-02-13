import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import InitialScreen from '../screens/InitialScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/TechnicianPartStackScreens/LoginScreen';
import TechnicianBottomTab from './TechnicianBottomTab';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{
            headerShown: false,
            animation: 'none',
            presentation: 'transparentModal', // Fade transition effect
          }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />

        <Stack.Screen
          name="TechnicianBottomTab"
          component={TechnicianBottomTab}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
