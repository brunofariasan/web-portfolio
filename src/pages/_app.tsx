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
import { GA_TRACKING_ID, pageview } from "@/lib/gtag"; 
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

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
   const nextRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    nextRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      nextRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [nextRouter.events]);

  return (
    <>
     {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
