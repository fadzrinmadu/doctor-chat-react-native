import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Gap, Header, ListDoctor } from '../../components';

import { colors } from '../../utils';

import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
} from '../../assets';

function ChooseDoctor() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={20} />
      <ListDoctor
        type="next"
        name="Alexander Jannie"
        description="Wanita"
        picture={DummyDoctor1}
      />
      <ListDoctor
        type="next"
        name="John McParker Steve"
        description="Pria"
        picture={DummyDoctor2}
      />
      <ListDoctor
        type="next"
        name="Nairobi Putri Hayza"
        description="Wanita"
        picture={DummyDoctor3}
      />
      <ListDoctor
        type="next"
        name="James Rivillia"
        description="Pria"
        picture={DummyDoctor4}
      />
      <ListDoctor
        type="next"
        name="Liu Yue Tian Park"
        description="Wanita"
        picture={DummyDoctor5}
      />
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
