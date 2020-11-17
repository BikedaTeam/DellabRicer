import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, LayoutElement, Text, Divider } from '@ui-kitten/components';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { DelFinDetailsScreenProps } from '../../navigation/order.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { ImageOverlay } from '../../components/image-overlay.component';
import { ProgressBar } from '../../components/progress-bar.component';
import { Order } from '../../data/order.model';

import { DetailText } from './extra/text.component';

export type DelFinDetailsRouteParams = {
  order: Order;
};

export const DelFinDetailsScreen = (props: DelFinDetailsScreenProps): LayoutElement => {

  const { order } = props.route.params;
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};
  const P4 = {latitude: 37.564834, longitude: 126.977218};
  return (
    <Layout style={styles.safeArea}>
      <Toolbar
      appearance='control'
      onBackPress={props.navigation.goBack}
      />
      <Divider/>
      <View style={ styles.infoArea }>
        <DetailText
          style={styles.setting}
          hint='상호'
          value={order.stoMtlty}
        />
        <DetailText
          style={styles.setting}
          hint='도착지'
          value={order.dlvryCusAdres}
        />
        <DetailText
          style={styles.setting}
          hint='결제종류'
          value={getPaySe(order.dlvryPaySeCd)}
        />
        <DetailText
          style={styles.setting}
          hint='결제금액'
          value={ numberFormat(order.dlvryFoodAmnt) + ' 원' }
        />
        <DetailText
          style={styles.setting}
          hint='배달수수료'
          value={ numberFormat(order.dlvryAmnt) + ' 원' }
        />
        <DetailText
          style={styles.setting}
          hint='배달거리'
          value= { order.dlvryDstnc + ' Km' }
        />
      </View>
    </Layout>
  );
};

function getPaySe( paySeCd: string ) : string {
  if( paySeCd == '01')
    return '현금';
  if( paySeCd == '02')
    return '카드';
  if( paySeCd == '03')
    return '선결제';
};

function numberFormat(inputNumber:number) {
   return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  infoArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setting: {
    padding: 16,
  },
});
