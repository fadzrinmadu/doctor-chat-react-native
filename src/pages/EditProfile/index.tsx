import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors, getData, storeData } from '../../utils';
import { ref, update } from 'firebase/database';
import { firebaseAuth, firebaseDB } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { onAuthStateChanged, updatePassword } from 'firebase/auth';

function EditProfile() {
  const navigation = useNavigation();

  const [profile, setProfile] = useState({
    uid: '',
    fullname: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  const handleUpdateProfile = () => {
    const payload = {
      fullname: profile.fullname,
      profession: profile.profession,
      email: profile.email,
      photo: photoForDB,
    };

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6 karakter',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        onAuthStateChanged(firebaseAuth, (user: any) => {
          if (user) {
            updatePassword(user, password).catch((error) => {
              showMessage({
                message: error.message,
                backgroundColor: colors.error,
                color: colors.white,
              });
            });
          }
        });
      }
    }

    const updates: any = {};
    updates[`users/${profile.uid}`] = payload;

    update(ref(firebaseDB), updates)
      .then(() => {
        storeData('user', {
          ...payload,
          uid: profile.uid,
        });
        navigation.replace('MainApp');
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const changeText = (key: string, value: string) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        if (response.didCancel || response?.error) {
          showMessage({
            message: 'oops, sepertinya anda tidak memilih fotonya?',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const photoBase64 = `data:${response?.assets[0].type};base64, ${response?.assets[0].base64}`;
          setPhotoForDB(photoBase64);

          const source = { uri: response?.assets[0]?.uri };
          setPhoto(source);
        }
      }
    );
  };

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      setPhoto({ uri: response.photo });
      setPhotoForDB(response.photo);
      setProfile(data);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile photo={photo} onPress={getImage} isRemove />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile?.fullname}
            onChangeText={(value: string) => changeText('fullname', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile?.profession}
            onChangeText={(value: string) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={(value: string) => setPassword(value)}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={handleUpdateProfile} />
        </View>
      </ScrollView>
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

export default EditProfile;
