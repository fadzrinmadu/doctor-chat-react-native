import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Gap, Header, List } from '../../components';

import { colors } from '../../utils';

import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { firebaseDB } from '../../config';

function ChooseDoctor() {
  const route = useRoute();
  const navigation = useNavigation();

  const [doctors, setDoctors] = useState([]);

  const { category } = route.params;

  const getDoctorByCategory = (value: string) => {
    const doctorByCategoryRef = query(
      ref(firebaseDB, 'doctors/'),
      orderByChild('category'),
      equalTo(value)
    );

    onValue(doctorByCategoryRef, (snapshot: any) => {
      const oldData = snapshot.val();
      const data: any = [];

      Object.keys(oldData).map((item: any) => {
        data.push({
          id: item,
          data: oldData[item],
        });
      });

      setDoctors(data);
    });
  };

  useEffect(() => {
    getDoctorByCategory(category);
  }, [category]);

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={20} />
      {doctors.map((item: any) => (
        <List
          type="next"
          name={item.data.fullname}
          description={item.data.gender}
          picture={{ uri: item.data.photo }}
          onPress={() => navigation.navigate('Chatting')}
        />
      ))}
    </View>
  );
}

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
