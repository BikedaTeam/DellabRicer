import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DelFinTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import { DelFinScreen } from '../scenes/main';

type DelFinNavigatorParams = {
  [AppRoute.DEL_FIN]: undefined;
}

export interface DelFinScreenProps {
  navigation: CompositeNavigationProp< DelFinTabNavigationProp, StackNavigationProp<DelFinNavigatorParams, AppRoute.DEL_FIN> >;
  route: RouteProp<DelFinNavigatorParams, AppRoute.DEL_FIN>;
}

const Stack = createStackNavigator<DelFinNavigatorParams>();

export const DelFinNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.DEL_FIN} component={DelFinScreen}/>
  </Stack.Navigator>
);
