import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';

type ButtonIconSendProps = {
  disable?: boolean,
  onPress: () => void,
};

function ButtonIconSend({ onPress, disable }: ButtonIconSendProps) {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDark />
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (disable: boolean) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});

export default ButtonIconSend;
