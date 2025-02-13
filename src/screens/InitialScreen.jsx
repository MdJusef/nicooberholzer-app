import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../Context/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import InitialAppLogo from '../assets/Icons/appLogoForInitialScreen.svg';
import Animated, {FadeIn} from 'react-native-reanimated';

const InitialScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Animated.View
      style={styles.animatedContainer}
      entering={FadeIn.duration(1000)} // Apply FadeIn animation
    >
      <SafeAreaView
        style={[styles.container, {backgroundColor: theme.background}]}>
        {/* App Logo */}
        <InitialAppLogo width={397} height={267} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={[styles.welcomeText, {color: theme.text}]}>
          Welcome to Track'd. The worlds leading asset management and ticket
          logging platform.
        </Text>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, {borderWidth: 1, borderColor: theme.primary}]}
          onPress={() => {}}>
          <Text style={styles.buttonText}>SIGN UP AS A USER</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, {borderWidth: 1, borderColor: theme.primary}]}
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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  animatedContainer: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',

    marginTop: '40%',
  },
  welcomeText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginBottom: '10%',
    marginTop: '-17%',
  },
  button: {
    width: '80%',
    paddingVertical: '3%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: '3%',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
});
