import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';

type InputProps = {
  label: string,
  value: string,
  disable?: boolean,
  onChangeText: () => void,
  secureTextEntry?: boolean,
};

export default function Input(props: InputProps) {
  const { label, value, onChangeText, secureTextEntry, disable } = props;

  const [borderColor, setBorderColor] = useState(colors.border);

  const onFocusInput = () => {
    setBorderColor(colors.tertiary);
  };

  const onBlurInput = () => {
    setBorderColor(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onBlur={onBlurInput}
        onFocus={onFocusInput}
        onChangeText={onChangeText}
        style={styles.input(borderColor)}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
  input: (borderColor: any) => ({
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 10,
    padding: 12,
  }),
});
