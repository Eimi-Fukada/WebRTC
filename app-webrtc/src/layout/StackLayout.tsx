import { RootStackParamList, routeNames } from '../routes/const';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext, useMemo } from 'react';
import routes from '../routes';
import GlobalContext from '../contexts/global.context';
import images from '~/assets/icon-image/images';
import TabBar from '../components/tabBar';
import Home from '../pages/home';
import Mine from '../pages/mine';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabScreen() {
  const context = useContext(GlobalContext);
  const data = [
    {
      key: 'tabHome',
      text: '首页',
      image: images.icon1,
      imageSelected: images.icon1,
      url: routeNames.Home,
    },
    {
      key: 'tabUser',
      text: '我的',
      image: images.icon2,
      imageSelected: images.icon2,
      url: routeNames.Mine,
    },
  ];
  const tabsScreens = [
    {
      name: routeNames.Home,
      component: Home,
    },
    {
      name: routeNames.Mine,
      component: Mine,
    },
  ];

  return (
    <Tab.Navigator
      tabBar={({ state, navigation }) => (
        <TabBar
          path={state.routeNames[state.index]}
          data={data}
          onChange={(tab) => {
            navigation.navigate(tab.url);
          }}
        />
      )}
    >
      {tabsScreens.map((value) => (
        <Tab.Screen
          key={value.name}
          name={value.name}
          component={value.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
export default function StackLayout() {
  const context = useContext(GlobalContext);
  const { data: tabs } = context.tab;

  const [stackScreens] = useMemo(() => {
    const tabUrls = tabs.map((tab) => tab.url);
    return [routes.filter((route) => tabUrls.indexOf(route.name) === -1)];
  }, [tabs]);

  return (
    <Stack.Navigator
      initialRouteName={routeNames.Home as keyof RootStackParamList}
    >
      <Stack.Screen
        name="_tab"
        component={TabScreen}
        options={{
          headerShown: false,
        }}
      />
      {stackScreens.map((value) => (
        <Stack.Screen
          key={value.name}
          name={value.name as keyof RootStackParamList}
          component={value.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
