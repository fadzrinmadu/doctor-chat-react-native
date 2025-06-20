import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

function DoctorProfile() {
  const route = useRoute();
  const navigation = useNavigation();

  const doctor = route?.params?.data;

  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={doctor.fullname}
        description={doctor.category}
        photo={{ uri: doctor.photo }}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={doctor.university} />
      <ProfileItem label="Tempat Praktik" value={doctor.hospital_address} />
      <ProfileItem label="No. STR" value={doctor.str_number} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', doctor)}
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
