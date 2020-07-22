import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DeliveryTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import { DeliveryScreen } from '../scenes/main';

type DeliveryNavigatorParams = {
  [AppRoute.DELIVERY]: undefined;
}

export interface DeliveryScreenProps {
  navigation: CompositeNavigationProp< DeliveryTabNavigationProp, StackNavigationProp<DeliveryTabNavigationProp, AppRoute.DELIVERY> >;
  route: RouteProp<DeliveryNavigatorParams, AppRoute.DELIVERY>;
}

const Stack = createStackNavigator<DeliveryNavigatorParams>();

export const DeliveryNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.DELIVERY} component={DeliveryScreen}/>
  </Stack.Navigator>
);
