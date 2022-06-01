import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, fonts } from '../../../utils';
import ButtonIconSend from './ButtonIconSend';

import IconOnly from './IconOnly';

type ButtonProps = {
  type?: string,
  title?: string,
  icon?: string,
  disable?: boolean,
  onPress?: () => void,
};

type Style = {
  container: (type: string | undefined) => ViewStyle,
  text: (type: string | undefined) => TextStyle,
};

export default function Button({
  type,
  icon,
  title,
  onPress,
  disable,
}: ButtonProps): React.ReactElement {
  if (type === 'btn-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Style>({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  }),
});
