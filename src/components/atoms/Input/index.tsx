import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputProps = {
  label: string,
};

export default function Input(props: InputProps) {
  const { label } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#7d8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    padding: 12,
  },
});
