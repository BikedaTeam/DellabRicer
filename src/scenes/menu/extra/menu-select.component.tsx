import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, LayoutProps, Text, Select, SelectItem, IndexPath } from '@ui-kitten/components';

import { SelectBox } from './select-box.component';

export interface MenuSelectProps extends LayoutProps {
  hint?: string;
  value: string;
}

export const MenuSelect = (props: MenuSelectProps): React.ReactElement => {

  const { style, hint, value, ...layoutProps } = props;
  const bnkCode = [ '부산', '경남', '우리', '신한', '카카오뱅크', '국민' ];

  const renderHintElement = (): React.ReactElement => (
    <Text
      appearance='hint'
      category='s1'>
      {hint}
    </Text>
  );

  return (
    <React.Fragment>
      <Layout
        level='1'
        {...layoutProps}
        style={[styles.container, style]}>
        {hint && renderHintElement()}
      <SelectBox
      item={bnkCode}/>
      </Layout>
      <Divider/>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  select:{
    minWidth: 200
  }
});
