import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  type?: string,
  title: string,
  onPress?: () => void,
};

type Style = {
  container: (type: string | undefined) => ViewStyle,
  text: (type: string | undefined) => TextStyle,
};

export default function Button({
  type,
  title,
  onPress,
}: ButtonProps): React.ReactElement {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Style>({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? '#fff' : '#0bcad4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    color: type === 'secondary' ? '#0bcad4' : '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
  }),
});
