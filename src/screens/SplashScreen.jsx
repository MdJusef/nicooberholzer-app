import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Animated, {FadeIn, FadeOut, runOnJS} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import InitialAppLogo from '../assets/Icons/appLogoForInitialScreen.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../Context/ThemeContext';


const SplashScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    
    // Force the status bar background color to white and icons to black
    StatusBar.setBarStyle('dark-content'); // Black icons
    StatusBar.setBackgroundColor('#ffffff'); // White background

    // time for the splash screen to be visible
    setTimeout(() => {
      setIsVisible(false); // Start fade-out animation
    }, 2000);
  }, []);

  return (
    isVisible && (
      <SafeAreaView style={styles.safeContainer}>
        <Animated.View
          style={[styles.container, {backgroundColor: theme.background}]}
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000).withCallback(() =>
            runOnJS(navigation.replace)('InitialScreen'),
          )}>
          <InitialAppLogo width={397} height={267} />
        </Animated.View>
      </SafeAreaView>
    )
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
