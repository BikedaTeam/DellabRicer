import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { WithdrawalScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';

import { MenuText } from './extra/menu-text.component';
import { MenuInput } from './extra/menu-input.component';

export const WithdrawalScreen = (props: WithdrawalScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='포인트 출금'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <ScrollView>
      <MenuText
        style ={styles.setting}
        hint  ='출금 최소금액'
        value ='10,000'
      />
      <MenuText
        style ={styles.setting}
        hint  ='은행'
        value ='부산'
      />
      <MenuText
        style ={styles.setting}
        hint  ='계좌번호'
        value ='000-000-00000-00'
      />
      <MenuText
        style ={styles.setting}
        hint  ='예금주'
        value ='홍배달'
      />
      <MenuInput
        style ={styles.setting}
        hint  ='출금액'
      />
      <Button
        style={styles.doneButton}
        /*onPress={onDoneButtonPress}*/
        >
        출금
      </Button>
    </ScrollView>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  setting: {
    padding: 16,
  },
});
