import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';
import DarkProfile from './DarkProfile';

type HeaderProps = {
  photo: any,
  title: string,
  type?: string,
  description: string,
  onPress: () => void,
};

export default function Header({
  type,
  title,
  photo,
  onPress,
  description,
}: HeaderProps) {
  if (type === 'dark-profile') {
    return (
      <DarkProfile title={title} description={description} photo={photo} onPress={onPress} />
    );
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type: string) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type: string) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
