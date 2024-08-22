import { RootStackParamList, routeNames } from '../routes/const';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import routes from '../routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackLayout() {
  const [stackScreens] = useMemo(() => {
    return [routes];
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={routeNames.Home as keyof RootStackParamList}
    >
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
