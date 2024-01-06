import React from "react";
import Header from "@/components/Header";
import SelectedProjects from "@/components/SelectedProjects";
import SummaryAbout from "@/components/SummaryAbout";
import Footer from "@/components/Footer";
import GlobalStyle from "@/globalStyles/globalStyle";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/zen-dots";

const Projects: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SummaryAbout />
        <SelectedProjects />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Projects;
