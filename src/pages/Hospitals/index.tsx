import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILHospitalBG } from '../../assets';
import ListHospital from '../../components/molecules/ListHospital';
import { colors, fonts } from '../../utils';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    marginTop: -30,
    paddingTop: 30,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  desc: {
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[300],
  },
});
