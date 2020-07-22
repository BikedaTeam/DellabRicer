import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, LayoutProps, Text, Input } from '@ui-kitten/components';

export interface OrderDetailInputProps extends LayoutProps {
  hint?: string;
  value: string;
}

export const OrderDetailInput = (props: OrderDetailInputProps): React.ReactElement => {

  const { style, hint, ...layoutProps } = props;

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
        <Input style = { styles.input }
        size='small'>
        </Input>
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
  input:{
    minWidth: 200
  }
});
