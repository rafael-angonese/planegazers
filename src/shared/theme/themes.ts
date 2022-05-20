import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

export enum Themes {
    light,
    dark,
}

export const themes = { [Themes.light]: lightTheme, [Themes.dark]: darkTheme };
