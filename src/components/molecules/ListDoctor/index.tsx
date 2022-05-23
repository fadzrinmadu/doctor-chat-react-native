import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { colors, fonts } from '../../../utils';

type ListDoctorProps = {
  name: string,
  description: string,
  picture: ImageSourcePropType,
};

export default function ListDoctor(props: ListDoctorProps) {
  const { name, description, picture } = props;

  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
