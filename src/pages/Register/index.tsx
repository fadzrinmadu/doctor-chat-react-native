import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, Gap, Header, Input } from '../../components';

import { colors, useForm } from '../../utils';

export default function Register() {
  const navigation = useNavigation();

  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // navigation.navigate('UploadPhoto');
  };

  return (
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
