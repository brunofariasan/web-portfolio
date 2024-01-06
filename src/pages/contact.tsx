import React from "react";
import GlobalStyle from "@/globalStyles/globalStyle";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/zen-dots";
import { Contact } from "@/layouts/Contact";

const ContactPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Contact />
      </ThemeProvider>
    </>
  );
};

export default ContactPage;
