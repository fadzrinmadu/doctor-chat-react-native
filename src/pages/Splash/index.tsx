import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ILLogo } from '../../assets';
import { colors } from '../../utils';

export default function Splash({ navigation }: any): React.ReactElement {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>NeoDoctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
});
