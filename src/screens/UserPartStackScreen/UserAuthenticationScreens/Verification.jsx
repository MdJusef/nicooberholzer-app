import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useTheme} from '../../../Context/ThemeContext';

const VerificationCodeScreenUser = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();
  const theme = useTheme();
  const translateY = useSharedValue(0);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) inputs.current[index + 1].focus();
  };

  const handleBackspace = index => {
    if (index > 0 && !code[index]) inputs.current[index - 1].focus();
  };

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
        <View style={styles.headerContainer}>
          <Text style={[styles.title, {color: theme.text}]}>
            Verification Code
          </Text>
          <Text style={[styles.subtitle, {color: theme.text}]}>
            We sent a 6-digit verification code to example@gmail.com
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={[
                styles.inputBox,
                {color: theme.text, borderColor: theme.text},
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={value => handleChange(value, index)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') handleBackspace(index);
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.verifyButton, {backgroundColor: theme.primary}]}
          onPress={()=>{navigation.navigate("ResetPasswordAsUser")}}
          
          >
          <Text style={[styles.verifyButtonText, {color: theme.background}]}>
            VERIFY CODE
          </Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={[styles.text, {color: theme.text}]}>
            Don’t receive an email?
          </Text>
          <TouchableOpacity>
            <Text style={[styles.link, {color: theme.blue}]}

            
            
            > Send again</Text>
            <View style={[styles.underline, {backgroundColor: theme.blue}]} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  verifyButton: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    fontSize: 14,
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  underline: {
    height: 1,
    marginTop: -2,
  },
});

export default VerificationCodeScreenUser;
