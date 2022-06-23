import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Gap, Input, Link, Loading } from '../../components';
import { ILLogo } from '../../assets';
import { colors, fonts, storeData, useForm } from '../../utils';
import { firebaseAuth, firebaseDB } from '../../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { showMessage } from 'react-native-flash-message';

export default function Login() {
  const navigation = useNavigation();

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(firebaseAuth, form.email, form.password)
      .then((userCredential) => {
        onValue(
          ref(firebaseDB, `/users/${userCredential.user.uid}`),
          (snapshot) => {
            if (snapshot.val()) {
              storeData('user', snapshot.val());
              setLoading(false);
              navigation.replace('MainApp');
            }
          }
        );
      })
      .catch((error: any) => {
        showMessage({
          message: error.message,
          backgroundColor: colors.error,
          color: colors.white,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value: string) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            secureTextEntry
            label="Password"
            value={form.password}
            onChangeText={(value: string) => setForm('password', value)}
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} align="left" />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>

      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
