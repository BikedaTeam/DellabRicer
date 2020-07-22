import React from 'react';
import { StyleSheet } from 'react-native';
import { Select, SelectElement, SelectProps, IndexPath, SelectItem } from '@ui-kitten/components';

export interface SelectShowcaseProps{
  item: string;
}

export const SelectBox = (props:SelectShowcaseProps): SelectElement => {

  const bnkCode = props.item;


  const renderOption = (title) => (
      <SelectItem title={title}/>
    );

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = bnkCode[selectedIndex.row];

  return (
    <Select
      selectedIndex={selectedIndex}
      placeholder='Default'
      style={styles.select}
      value={displayValue}
      onSelect={index => setSelectedIndex(index)}
      size='small'
    >
    {bnkCode.map(renderOption)}
    </Select>
  );
};

const styles = StyleSheet.create({
  select: {
    width: 200,
  },
});
