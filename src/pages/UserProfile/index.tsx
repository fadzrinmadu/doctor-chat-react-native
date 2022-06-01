import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, List, Profile, Gap } from '../../components';
import { colors } from '../../utils';

function UserProfile() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Shayna Melinda" description="Product Designer" />
      <Gap height={14} />
      <List
        name="Edit Profile"
        description="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Edit Profile"
        description="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        description="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Edit Profile"
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
