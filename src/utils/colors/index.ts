const mainColors = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  gray1: '#7d8797',
  gray2: '#e9e9e9',
  gray3: '#edeef0',
  blue1: '#0066cb',
};

const colors: any = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disable: mainColors.gray3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    menuActive: mainColors.green1,
    menuInactive: mainColors.dark2,
    subtitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.gray1,
    },
  },
  border: mainColors.gray2,
  card: {
    light: mainColors.green2,
  },
};

export { colors };
