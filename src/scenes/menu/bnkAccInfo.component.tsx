import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Divider, Layout, Text, Button } from '@ui-kitten/components';
import { BnkAccInfoScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';
import { MenuText } from './extra/menu-text.component';
import { MenuInput } from './extra/menu-input.component';
import { MenuSelect } from './extra/menu-select.component';

export const BnkAccInfoScreen = (props: BnkAccInfoScreenProps): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='계좌 정보'
      onBackPress={props.navigation.goBack}
    />
    <Divider/>
    <ScrollView>
      <MenuSelect
        style={styles.setting}
        hint='은행'
      />
      <MenuInput
        style={styles.setting}
        hint='계좌번호'
      />
      <MenuInput
        style={styles.setting}
        hint='예금주'
      />
      <Button
        style={styles.doneButton}
        /*onPress={onDoneButtonPress}*/
        >
        저장
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
