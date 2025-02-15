import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useTheme} from '../../../Context/ThemeContext';

const LoginScreenForUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
        translateY.value = withTiming(0, {duration: 500});
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View
        style={[
          styles.container,
          {backgroundColor: theme.background},
          animatedStyle,
        ]}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Text style={[styles.title, {color: theme.text}]}>
            Login to your account
            </Text>
            <Text style={[styles.subtitle, {color: theme.text}]}>
              Please enter your email & password to continue
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={[styles.text, {color: theme.text}]}>Email</Text>
            <TextInput
              style={[
                styles.input,
                {backgroundColor: theme.whitesmoke, color: theme.text},
              ]}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={theme.placeholder}
            />
            <Text style={[styles.text, {color: theme.text}]}>Password</Text>
            <TextInput
              style={[
                styles.input,
                {backgroundColor: theme.whitesmoke, color: theme.text},
              ]}
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
                <Text style={{color: theme.text}}>Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPasswordAsUser')}>
                <Text style={[styles.link, {color: theme.blue}]}>
                  Forgot Password
                </Text>
                <View
                  style={[styles.underline, {backgroundColor: theme.blue}]}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserInitialScreen')}
              style={[styles.loginButton, {backgroundColor: theme.primary}]}>
              <Text style={[styles.loginButtonText, {color: theme.background}]}>
                Login
              </Text>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%',
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
  underline: {
    height: 1,
    marginTop: -2,
  },
});

export default LoginScreenForUser;
