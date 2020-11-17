import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DeliveryTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import { DeliveryDetailsRouteParams, DeliveryDetailsScreen, DeliveryScreen  } from '../scenes/main';

type DeliveryNavigatorParams = {
  [AppRoute.DELIVERY]: undefined;
  [AppRoute.DELIVERY_DETAILS]: DeliveryDetailsRouteParams;
}

export interface DeliveryScreenProps {
  navigation: CompositeNavigationProp< DeliveryTabNavigationProp, StackNavigationProp<DeliveryTabNavigationProp, AppRoute.DELIVERY> >;
  route: RouteProp<DeliveryNavigatorParams, AppRoute.DELIVERY>;
}

const Stack = createStackNavigator<DeliveryNavigatorParams>();

export const DeliveryNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.DELIVERY} component={DeliveryScreen}/>
    <Stack.Screen name={AppRoute.DELIVERY_DETAILS} component={DeliveryDetailsScreen}/>
  </Stack.Navigator>
);
