import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconBackDark } from '../../../assets';

type IconOnlyProps = {
  onPress?: () => void,
  icon?: string,
};

export default function IconOnly({ onPress, icon }: IconOnlyProps) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }

    if (icon === 'back-light') {
      return <IconBackDark />;
    }

    return <IconBackDark />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
