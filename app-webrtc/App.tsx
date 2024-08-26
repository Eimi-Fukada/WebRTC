/**
 *                            _ooOoo_
 *                           o8888888o
 *                           88' . '88
 *                           (| -_- |)
 *                            O\ = /O
 *                        ____/`---'\____
 *                      .   ' \\| |// `.
 *                       / \\||| : |||// \
 *                     / _||||| -:- |||||- \
 *                       | | \\\ - /// | |
 *                     | \_| ''\---/'' | |
 *                      \ .-\__ `-` ___/-. /
 *                   ___`. .' /--.--\ `. . __
 *                .'' '< `.___\_<|>_/___.' >'''.
 *               | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *                 \ \ `-. \_ __\ /__ _/ .-` / /
 *         ======`-.____`-.___\_____/___.-`____.-'======
 *                            `=---='
 *
 *         .............................................
 *                  佛祖保佑             永无BUG
 *          佛曰:
 *                  写字楼里写字间，写字间里程序员；
 *                  程序人员写程序，又拿程序换酒钱。
 *                  酒醒只在网上坐，酒醉还来网下眠；
 *                  酒醉酒醒日复日，网上网下年复年。
 *                  但愿老死电脑间，不愿鞠躬老板前；
 *                  奔驰宝马贵者趣，公交自行程序员。
 *                  别人笑我忒疯癫，我笑自己命太贱；
 *                  不见满街漂亮妹，哪个归得程序员？
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
import GlobalContext, { IGlobalContext } from '~/contexts/global.context.ts';
import Welcome from './src/pages/welcome';
import { useCallBackState } from '~/hooks/useCallBackState';

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

  const [globalContenxt, setGlobalContenxt] = useCallBackState<
    Omit<IGlobalContext, 'dispatch'>
  >({
    name: '',
    tab: {
      defaultColor: 'rgba(118, 118, 118, 1.00)',
      activeColor: '#333333',
      data: [],
    },
  });

  const dispatch = <T extends keyof IGlobalContext>(
    key: T,
    value: IGlobalContext[T]
  ) => {
    setGlobalContenxt({
      [key]: value,
    });
  };

  return (
    <WRootToastApp>
      <Welcome>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            translucent={true}
          />
          <NavigationContainer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <GlobalContext.Provider value={{ ...globalContenxt, dispatch }}>
                <StackLayout />
              </GlobalContext.Provider>
            </View>
          </NavigationContainer>
        </SafeAreaView>
      </Welcome>
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
