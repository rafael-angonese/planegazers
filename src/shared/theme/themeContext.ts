import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { Themes, themes } from './themes';

const themeContext = createContext<{
  changeTheme: (theme: Themes) => void;
  currentTheme: DefaultTheme;
}>({ currentTheme: themes[Themes.light], changeTheme: () => {} });

export default themeContext;
