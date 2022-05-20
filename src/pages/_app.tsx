import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Themes } from "../shared/theme/themes";
import { useTheming } from "../shared/theme/useThemeing";
import ThemeContext from "../shared/theme/themeContext";

import "../styles/globals.css";
import GlobalStyles from "../shared/theme/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const themingValue = useTheming(Themes.dark);

  return (
    <>
      <ThemeContext.Provider value={themingValue}>
        <ThemeProvider theme={themingValue.currentTheme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
