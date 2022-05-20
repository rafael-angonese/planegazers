import { DefaultTheme } from 'styled-components';
import commonTheme from './commonTheme';

const { palette } = commonTheme;

const darkTheme: DefaultTheme = {
  ...commonTheme,
  application: {
    background: palette.black,
    textColor: palette.white,
  },
};

export default darkTheme;
