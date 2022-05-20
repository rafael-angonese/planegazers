import { useCallback, useContext, useState } from 'react';
import themeContext from './themeContext';
import { themes, Themes } from './themes';

export const useTheming = (defaultTheme: Themes = Themes.light) => {
    const [currentTheme, setTheme] = useState(themes[defaultTheme]);
    const changeTheme = useCallback(
        (theme: Themes) => setTheme(themes[theme]),
        []
    );

    return { changeTheme, currentTheme };
};

export const useThemeContext = () => {
    const themeTools = useContext(themeContext);

    return themeTools;
};
