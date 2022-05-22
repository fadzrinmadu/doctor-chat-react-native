const mainColors = {
  green1: '#0bcad4',
  green2: '#edfcfd',
  dark1: '#112340',
  dark2: '#495A75',
  gray1: '#7d8797',
  gray2: '#e9e9e9',
};

const colors: any = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    menuActive: mainColors.green1,
    menuInactive: mainColors.dark2,
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
