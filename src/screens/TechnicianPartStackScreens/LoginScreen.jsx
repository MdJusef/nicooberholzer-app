import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useTheme} from '../../Context/ThemeContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* 1st Portion: Title & Subtitle */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Login to your provider account</Text>
        <Text style={styles.subtitle}>
          Please enter your email & password to continue
        </Text>
      </View>

      {/* 2nd Portion: Input Fields, Checkbox, Forgot Password, and Login Button */}
      <View style={styles.formContainer}>
        <Text style={[styles.text, {color: theme.text}]}>Email</Text>
        <TextInput
          style={[styles.input, {backgroundColor: theme.whitesmoke}]}
          placeholder="example@gmail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={theme.placeholder}
        />
        <Text style={[styles.text, {color: theme.text}]}>Password</Text>
        <TextInput
          style={[styles.input, {backgroundColor: theme.whitesmoke}]}
          placeholder="**********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme.placeholder}
        />

        <View style={styles.rowContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.link, {color: theme.blue}]}>
              Forgot Password
            </Text>
            <View style={[styles.underline, {backgroundColor: theme.blue}]} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('TechnicianBottomTab')}
          style={[styles.loginButton, {backgroundColor: theme.primary}]}>
          <Text style={[styles.loginButtonText, {color: theme.background}]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* 3rd Portion: Signup Link */}
      {/* <View style={styles.signupContainer}>
        <Text>Don’t have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: '-40%',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: '-2%',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    lineHeight: 30,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#666',
    lineHeight: 21,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,

    lineHeight: 21,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,

    lineHeight: 18,
  },
  loginButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',

    lineHeight: 24,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underline: {
    height: 1,
    marginTop: -2,
  },
});

export default LoginScreen;
