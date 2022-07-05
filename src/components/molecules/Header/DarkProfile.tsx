import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor9 } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

type DarkProfileProps = {
  photo: any,
  title: string,
  description: string,
  onPress: () => void,
};

function DarkProfile({ title, description, photo, onPress }: DarkProfileProps) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Image style={styles.image} source={{ uri: photo }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subtitle,
    textTransform: 'capitalize',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});

export default DarkProfile;
