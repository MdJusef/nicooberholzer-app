import {useNavigation} from '@react-navigation/native'; 
import React, {useState, useEffect} from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
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
import {useTheme} from '../../Context/ThemeContext';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const theme = useTheme();

  const translateY = useSharedValue(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        translateY.value = withTiming(-event.endCoordinates.height / 25, { duration: 500 });
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
    transform: [{translateY: translateY.value}],
  }));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, {backgroundColor: theme.background}, animatedStyle]}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Text style={[styles.title, {color: theme.text}]}>Set a new password</Text>
            <Text style={[styles.subtitle, {color: theme.text}]}>Create a new password. Ensure that password is different from previous one.</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={[styles.text, {color: theme.text}]}>Password</Text>
            <TextInput
              style={[styles.input, {backgroundColor: theme.whitesmoke, color: theme.text}]}
              placeholder="**********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={theme.placeholder}
            />
            <Text style={[styles.text, {color: theme.text}]}>Confirm Password</Text>
            <TextInput
              style={[styles.input, {backgroundColor: theme.whitesmoke, color: theme.text}]}
              placeholder="**********"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor={theme.placeholder}
            />
            <TouchableOpacity
              onPress={() => {navigation.navigate("LoginScreen")}}
              style={[styles.updateButton, {backgroundColor: theme.primary}]}>
              <Text style={[styles.updateButtonText, {color: theme.background}]}>UPDATE PASSWORD</Text>
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
  updateButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    lineHeight: 24,
  },
});

export default ResetPasswordScreen;
