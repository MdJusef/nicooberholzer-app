import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import InitialScreen from '../screens/InitialScreen';
import SplashScreen from '../screens/SplashScreen';

// User side authentication screens start
import ForgotPasswordAsUser from '../screens/UserPartStackScreen/UserAuthenticationScreens/ForgotPassword';
import LoginAsUser from '../screens/UserPartStackScreen/UserAuthenticationScreens/Login';
import ResetPasswordAsUser from '../screens/UserPartStackScreen/UserAuthenticationScreens/ResetPassword';
import SignupAsUser from '../screens/UserPartStackScreen/UserAuthenticationScreens/Signup';
import VerificationAsUser from '../screens/UserPartStackScreen/UserAuthenticationScreens/Verification';
// User side authentication screens end

// User side Main screens start

import UserInitialScreen from '../screens/UserPartStackScreen/UserSideStackScreens/InitialScreen';

// User side Main screens end

// Technician side authentication screens start
import ForgotPassword from '../screens/TechnicianPartStackScreens/ForgotPassword';
import LoginScreen from '../screens/TechnicianPartStackScreens/LoginScreen';
import SetNewPassword from '../screens/TechnicianPartStackScreens/SetNewPassword';
import Verification from '../screens/TechnicianPartStackScreens/Verification';
// Technician side authentication screens start End

// Technician side Profile screens start Start
import TechnicianProfile from '../screens/TechnicianPartStackScreens/TechnicianProfile/TechnicianProfile';
// Technician side Profile screens start End

import TechnicianBottomTab from './TechnicianBottomTab';
// import Icon from 'react-native-vector-icons/Ionicons';

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

        {/* User side authentication screens start */}

        <Stack.Screen
          name="SignupAsUser"
          component={SignupAsUser}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        <Stack.Screen
          name="LoginAsUser"
          component={LoginAsUser}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />

        <Stack.Screen
          name="ForgotPasswordAsUser"
          component={ForgotPasswordAsUser}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        <Stack.Screen
          name="VerificationAsUser"
          component={VerificationAsUser}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        <Stack.Screen
          name="ResetPasswordAsUser"
          component={ResetPasswordAsUser}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        {/* User side authentication screens End */}

        {/* User side Main screens Start*/}

        <Stack.Screen
          name="UserInitialScreen"
          component={UserInitialScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />

        {/* User side Main screens End*/}

        {/* Technician side authentication screens start */}

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        <Stack.Screen
          name="SetNewPassword"
          component={SetNewPassword}
          options={{
            headerShown: true,
            animation: 'none',
            headerTitle: '', // Hide title
            headerShadowVisible: false, // Removes the bottom shadow (for native stack)
            headerStyle: {
              elevation: 0, // Removes shadow on Android
              shadowOpacity: 0, // Removes shadow on iOS
            },
          }}
        />

        {/* Technician side authentication screens End */}

        {/* // Technician side Profile screens start Start */}

        {/* // Technician side Profile screens start End */}

        <Stack.Screen
          name="TechnicianProfile"
          component={TechnicianProfile}
          options={{
            headerShown: true,
            // animation: 'none',
            // presentation: 'transparentModal',
          }}
        />

        {/* // Technician side Bottom Navigator  screen start  */}

        <Stack.Screen
          name="TechnicianBottomTab"
          component={TechnicianBottomTab}
          options={{
            headerShown: false,
            // animation: 'none',
            presentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>

      {/* // Technician side Bottom Navigator  screen End  */}
    </NavigationContainer>
  );
};

export default AppNavigation;
