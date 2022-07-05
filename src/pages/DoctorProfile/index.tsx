import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

function DoctorProfile() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    fullname,
    category,
    university,
    hospital_address,
    str_number,
    photo,
  } = route?.params?.data;

  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name={fullname} description={category} photo={{ uri: photo }} />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={university} />
      <ProfileItem label="Tempat Praktik" value={hospital_address} />
      <ProfileItem label="No. STR" value={str_number} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingTop: 23,
    paddingHorizontal: 40,
  },
});

export default DoctorProfile;
