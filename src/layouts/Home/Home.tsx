import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import SummaryAbout from "@/components/SummaryAbout";
import React from "react";

export const Home: React.FC = ({}) => {
  return (
    <>
      <Banner />
      <Summary />
      <SummaryAbout />
      <AboutMe />
      <Skills />
      <SelectedProjects />
      <Footer />
    </>
  );
};
