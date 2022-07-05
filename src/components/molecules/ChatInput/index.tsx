import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

type ChatInputProps = {
  value: string,
  onChangeText: () => void,
  onButtonPress: () => void,
};

function ChatInput({ value, onChangeText, onButtonPress }: ChatInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Tulis Pesan Untuk Nairobi"
      />
      <Button
        title="Send"
        type="btn-icon-send"
        value={value}
        onPress={onButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});

export default ChatInput;
