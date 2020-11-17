import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, LayoutProps, Text } from '@ui-kitten/components';

export interface DetailTextProps extends LayoutProps {
  hint?: string;
  value: string;
}

export const DetailText = (props: DetailTextProps): React.ReactElement => {

  const { style, hint, value, ...layoutProps } = props;

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
        <Text category='s1'>
          {value}
        </Text>
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
});
