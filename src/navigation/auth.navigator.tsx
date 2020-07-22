import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { AppNavigatorParams } from './app.navigator';
import { InitPassScreen, LoginScreen } from '../scenes/auth';

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.LOGIN]: undefined;
  [AppRoute.INIT_PASS]: undefined;
}

export interface LoginScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.LOGIN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.LOGIN>;
}

export interface InitPassScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.INIT_PASS>;
  route: RouteProp<AuthNavigatorParams, AppRoute.INIT_PASS>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.LOGIN} component={LoginScreen}/>
    <Stack.Screen name={AppRoute.INIT_PASS} component={InitPassScreen}/>
  </Stack.Navigator>

);
