import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

type ListProps = {
  name: string,
  description: string,
  picture?: ImageSourcePropType,
  type?: string,
  icon?: string,
  onPress?: () => void,
};

function List(props: ListProps) {
  const { name, description, picture, type, icon, onPress } = props;

  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }

    if (icon === 'language') {
      return <IconLanguage />;
    }

    if (icon === 'rate') {
      return <IconRate />;
    }

    if (icon === 'help') {
      return <IconHelp />;
    }

    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={picture} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
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
    textTransform: 'capitalize',
  },
});

export default List;
