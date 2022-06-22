import React, { useState } from 'react';
import { set, ref } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { ScrollView, StyleSheet, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Button, Gap, Header, Input, Loading } from '../../components';

import { colors, storeData, useForm } from '../../utils';
import { firebaseAuth, firebaseDB } from '../../config';

export default function Register() {
  const navigation = useNavigation();

  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    createUserWithEmailAndPassword(firebaseAuth, form.email, form.password)
      .then((userCredential: any) => {
        const data = {
          uid: userCredential.user.uid,
          fullname: form.fullname,
          profession: form.profession,
          email: form.email,
        };

        set(ref(firebaseDB, `users/${userCredential.user.uid}`), data);
        storeData('user', form);

        setLoading(false);
        setForm('reset');
        navigation.push('UploadPhoto', data);
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
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullname}
              onChangeText={(value) => setForm('fullname', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              secureTextEntry
              onChangeText={(value) => setForm('password', value)}
            />
            <Gap height={24} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
