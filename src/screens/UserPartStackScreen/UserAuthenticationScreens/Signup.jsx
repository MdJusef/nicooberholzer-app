import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '../../../Context/ThemeContext';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const theme = useTheme();

  const translateY = useSharedValue(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        translateY.value = withTiming(-event.endCoordinates.height / 25, {
          duration: 500,
        });
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        translateY.value = withTiming(0, { duration: 500 });
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View
        style={[styles.container, { backgroundColor: theme.background }, animatedStyle]}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          
          {/* First Part */}
          <View style={styles.headerContainer}>
            <Text style={[styles.title, { color: theme.text }]}>Sign Up to your account</Text>
            <Text style={[styles.subtitle, { color: theme.text }]}>
              Please enter your details to continue
            </Text>
          </View>
          
          {/* Second Part - Input Fields */}
          <View style={styles.formContainer}>
            <Text style={[styles.text, { color: theme.text }]}>Name</Text>
            <TextInput
              style={[styles.input, { backgroundColor: theme.whitesmoke, color: theme.text }]}
              placeholder="John Doe"
              value={name}
              onChangeText={setName}
              placeholderTextColor={theme.placeholder}
            />
            <Text style={[styles.text, { color: theme.text }]}>Email</Text>
            <TextInput
              style={[styles.input, { backgroundColor: theme.whitesmoke, color: theme.text }]}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={theme.placeholder}
            />
            <Text style={[styles.text, { color: theme.text }]}>Address</Text>
            <TextInput
              style={[styles.input, { backgroundColor: theme.whitesmoke, color: theme.text }]}
              placeholder="1234 Main St"
              value={address}
              onChangeText={setAddress}
              placeholderTextColor={theme.placeholder}
            />
            <Text style={[styles.text, { color: theme.text }]}>Password</Text>
            <TextInput
              style={[styles.input, { backgroundColor: theme.whitesmoke, color: theme.text }]}
              placeholder="**********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={theme.placeholder}
            />
            
            <TouchableOpacity
              onPress={() => navigation.navigate('UserInitialScreen')} // Update with your navigation
              style={[styles.signUpButton, { backgroundColor: theme.primary }]}>
              <Text style={[styles.buttonText, { color: theme.background }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Third Part */}
          <View style={styles.footerContainer}>
            <Text style={[styles.footerText, { color: theme.text }]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate("LoginAsUser")}}>
              <Text style={[styles.link, { color: theme.blue }]}>Log In</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: '5%',
    paddingTop: '15%',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    lineHeight: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
  },
  formContainer: {
    marginBottom: '5%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: '4%',
    marginBottom: '5%',
  },
  signUpButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 21,
  },
  link: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    lineHeight: 21,
  },
});

export default SignUpScreen;
