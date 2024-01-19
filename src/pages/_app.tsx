import GlobalStyle from "@/globalStyles/globalStyle";
import "@/styles/styles.scss";
import { theme } from "@/styles/theme";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/zen-dots";
import "@/styles/styles.scss";
import "../translations/i18n";

export default function App({ Component, pageProps, router }: any) {
  return (
    // <div className="main">
    // </div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
