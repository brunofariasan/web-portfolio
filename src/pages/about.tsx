import React from "react";
import GlobalStyle from "@/globalStyles/globalStyle";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/zen-dots";
import { AboutMe } from "@/layouts/AboutMe/AboutMe";
import Curve from "@/components/micro/Curve";

const AboutPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AboutMe />
      </ThemeProvider>
    </>
  );
};

export default AboutPage;
