import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { AccInfoScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';

import { MenuText } from './extra/menu-text.component';
import { MenuInput } from './extra/menu-input.component';
import { AccInfoData } from './data/accInfoData';

const accInfoData: AccInfoData = AccInfoData.jenniferGreen();

export const AccInfoScreen = (props: AccInfoScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='계정 정보'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <MenuText
      style={styles.setting}
      hint='아이디'
      value={accInfoData.id}
    />
    <MenuText
      style={styles.setting}
      hint='이름'
      value={accInfoData.name}
    />
    <MenuText
      style={styles.setting}
      hint='연락처'
      value={accInfoData.phone}
    />
    <MenuText
      style={styles.setting}
      hint='소속'
      value={accInfoData.dept}
    />
    <MenuInput
      style={styles.setting}
      hint='소속'
    />
    <Button
      style={styles.doneButton}
      /*onPress={onDoneButtonPress}*/
      >
      비밀번호 변경
    </Button>
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
  setting: {
    padding: 16,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});
