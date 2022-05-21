import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../utils';

type LinkProps = {
  title: string,
  size: number,
  align: string,
};

type Style = {
  text: (size: number, align: string) => ViewStyle,
};

export default function Link(props: LinkProps) {
  const { title, size, align } = props;

  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  text: (size: number, align: string) => ({
    color: colors.text.secondary,
    fontSize: size,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
