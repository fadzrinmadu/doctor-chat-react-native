import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconStar } from '../../../assets';
import { DummyDoctor1 } from '../../../assets/dummy';
import { colors, fonts } from '../../../utils';

type DoctorProfileProps = {
  name: string,
  description: string,
  picture: ImageSourcePropType,
  onPress: () => void,
};

export default function DoctorRated({
  name,
  onPress,
  picture,
  description,
}: DoctorProfileProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={picture} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{description}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
  rate: {
    flexDirection: 'row',
  },
});
