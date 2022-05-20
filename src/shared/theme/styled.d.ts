import 'styled-components';

interface PalletColor {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            transparent: string
            black: string
            white: string
            whiteAlpha: PalletColor
            blackAlpha: PalletColor
            gray: PalletColor
            red: PalletColor
            orange: PalletColor
            yellow: PalletColor
            green: PalletColor
            teal: PalletColor
            blue: PalletColor
            cyan: PalletColor
            purple: PalletColor
            pink: PalletColor
        };

        fontSizes: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            "2xl": string
            "3xl": string
            "4xl": string
            "5xl": string
            "6xl": string
            "7xl": string
            "8xl": string
            "9xl": string
        };

        application: {
            background: string;
            textColor: string;
        };
    }
}
