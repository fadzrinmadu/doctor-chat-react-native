import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ILLogo } from '../../assets';

export default function Splash({ navigation }: any): React.ReactElement {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Neo Doctor</Text>
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
