import React from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import { OrderTabNavigationProp } from './home.navigator';
import { AppRoute } from './app-routes';
import {
  OrderDetailsRouteParams,
  OrderDetailsScreen,
  OrderScreen,
  OrderTabBar,
} from '../scenes/main';
import { DoneAllIcon, GridIcon } from '../assets/icons';

type OrderNavigatorParams = {
  [AppRoute.ORDER]: undefined;
  [AppRoute.ORDER_DETAILS]: OrderDetailsRouteParams;
}

export type OrderScreenProps = MaterialTopTabBarProps & {
  navigation: OrderTabNavigationProp;
}

export interface OrderDetailsScreenProps {
  navigation: StackNavigationProp<OrderNavigatorParams, AppRoute.ORDER_DETAILS>;
  route: RouteProp<OrderNavigatorParams, AppRoute.ORDER_DETAILS>;
}

const Stack = createStackNavigator<OrderNavigatorParams>();

// FIXME: Is it possible to track swipe progress?
//
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence

export const OrderNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.ORDER} component={OrderScreen}/>
    <Stack.Screen name={AppRoute.ORDER_DETAILS} component={OrderDetailsScreen}/>
  </Stack.Navigator>
);
