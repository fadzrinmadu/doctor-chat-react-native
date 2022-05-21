import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors } from '../../../utils';

import IconOnly from './IconOnly';

type ButtonProps = {
  type?: string,
  title?: string,
  icon?: string,
  onPress?: () => void,
};

type Style = {
  container: (type: string | undefined) => ViewStyle,
  text: (type: string | undefined) => TextStyle,
};

export default function Button({
  type,
  title,
  icon,
  onPress,
}: ButtonProps): React.ReactElement {
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
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
  }),
});
