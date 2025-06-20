import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconDoctor,
  IconMessages,
  IconHospitals,
  IconDoctorActive,
  IconMessagesActive,
  IconHospitalsActive,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

type TabItemProps = {
  title: string,
  active: boolean,
  onPress: () => void,
  onLongPress: () => void,
};

export default function TabItem(props: TabItemProps) {
  const { title, active, onPress, onLongPress } = props;

  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }

    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }

    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }

    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active: boolean) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
