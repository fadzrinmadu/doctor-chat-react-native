import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

type ProfileProps = {
  name?: string,
  description?: string,
  isRemove?: boolean,
  photo: {
    uri: string,
  },
  onPress?: () => void,
};

function Profile({
  name,
  photo,
  onPress,
  isRemove,
  description,
}: ProfileProps) {
  return (
    <View style={styles.container}>
      {isRemove ? (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image style={styles.avatar} source={photo} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.borderProfile}>
          <Image style={styles.avatar} source={photo} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
      )}

      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default Profile;
