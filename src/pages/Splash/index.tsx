import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ILLogo } from '../../assets';

export default function Splash(): React.ReactElement {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#112340',
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
});
