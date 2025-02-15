import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../Context/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import InitialAppLogo from '../assets/Icons/appLogoForInitialScreen.svg';
import Animated, {FadeIn,FadeOut} from 'react-native-reanimated';

const InitialScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Animated.View
      style={styles.animatedContainer}
      entering={FadeIn.duration(1000)} // Apply FadeIn animation
      exiting={FadeOut.duration(1000)} // Apply FadeIn animation
    >
      <SafeAreaView
        style={[styles.container, {backgroundColor: theme.background}]}>
        {/* App Logo */}
        <InitialAppLogo width={367} height={267} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={[styles.welcomeText, {color: theme.text}]}>
          Welcome to Track'd. The worlds leading asset management and ticket
          logging platform.
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.primary}]}
          onPress={() => {navigation.navigate("SignupAsUser")}}>
          <Text style={[styles.buttonText, {color: theme.text}]}>SIGN UP AS A USER</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.primary}]}
          onPress={() => {navigation.navigate('LoginScreen')}}>
          <Text style={[styles.buttonText, {color: theme.text}]}>
            LOGIN AS A TECHNICIAN
          </Text>

        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  
  animatedContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  
  logo: {
    resizeMode: 'contain',
    marginTop: '40%',
  },
  welcomeText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginBottom: '10%',
    marginTop: '-20%',
    lineHeight:21
  },
  button: {
    width: '90%',
    paddingVertical: '3%',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: '4%',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
});
