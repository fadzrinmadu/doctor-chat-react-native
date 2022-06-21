const mainColors = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  gray1: '#7d8797',
  gray2: '#e9e9e9',
  gray3: '#edeef0',
  gray4: '#b1b7c2',
  blue1: '#0066cb',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#e06379',
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
    disable: {
      background: mainColors.gray3,
      text: mainColors.gray4,
    },
  },
  border: mainColors.gray2,
  card: {
    light: mainColors.green2,
  },
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};

export { colors };
