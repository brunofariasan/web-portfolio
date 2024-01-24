import GlobalStyle from "@/globalStyles/globalStyle";
import "@/styles/styles.scss";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/zen-dots";
import "@/styles/styles.scss";
import "../translations/i18n";
import { theme } from "@/styles/theme";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useTranslation } from "react-i18next";

interface RouteMap {
  [key: string]: string;
  "/": string;
  "/about": string;
  "/contact": string;
  "/projects": string;
}
export default function App({ Component, pageProps, router }: any) {
  const { t } = useTranslation();
  const routes: RouteMap = {
    "/": "Home",
    "/about": "about",
    "/contact": "contact",
    "/projects": "projects",
  };

  const routeName = routes[router.route];

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>{t(routeName)}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
