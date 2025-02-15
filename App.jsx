import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/Context/ThemeContext';
import AppNavigation from './src/Navigation/AppNavigation';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
