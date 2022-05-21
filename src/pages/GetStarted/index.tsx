import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';
import { colors } from '../../utils';

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah &amp; fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontFamily: 'Nunito-SemiBold',
    lineHeight: 40,
    marginTop: 90,
  },
});
