import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ILLogo } from '../../assets';
import { firebaseAuth } from '../../config';
import { colors, fonts } from '../../utils';

export default function Splash({ navigation }: any): React.ReactElement {
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    // pembersihan fungsi unsubscribe
    return () => unsubscribe();
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
    fontFamily: fonts.primary[600],
    marginTop: 20,
  },
});
