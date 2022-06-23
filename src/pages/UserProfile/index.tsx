import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ILNullPhoto } from '../../assets';
import { Header, List, Profile, Gap } from '../../components';
import { colors, getData } from '../../utils';

function UserProfile() {
  const navigation = useNavigation();

  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      data.photo = { uri: response.photo };
      setProfile(data);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          description={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        description="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        description="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        description="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        description="Last Update Yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default UserProfile;
