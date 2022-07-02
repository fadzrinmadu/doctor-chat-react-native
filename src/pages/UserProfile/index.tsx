import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILNullPhoto } from '../../assets';
import { Header, List, Profile, Gap } from '../../components';
import { firebaseAuth } from '../../config';
import { colors, getData } from '../../utils';

function UserProfile() {
  const navigation = useNavigation();

  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    photo: ILNullPhoto,
  });

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

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
        name="Sign Out"
        description="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={handleSignOut}
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
