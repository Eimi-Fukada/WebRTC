/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  UIManager,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WRootToastApp } from 'react-native-smart-tip';
import Home from './src/pages/home';
import { NavigationContainer } from '@react-navigation/native';
import StackLayout from '~/layout/StackLayout';

if (Platform.OS === 'android') {
  // 安卓LayoutAnimation动画启动支持
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'transparent',
    flex: 1,
  };

  return (
    <WRootToastApp>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
          translucent={true}
        />
        <NavigationContainer>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StackLayout />
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </WRootToastApp>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
