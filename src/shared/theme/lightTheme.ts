import { DefaultTheme } from 'styled-components';
import commonTheme from './commonTheme';

const { palette } = commonTheme;

const lightTheme: DefaultTheme = {
  ...commonTheme,
  application: {
    background: palette.white,
    textColor: palette.black,
  },
};

export default lightTheme;
