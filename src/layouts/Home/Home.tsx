import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Map } from "@/components/Map";
import SelectedProjects from "@/components/SelectedProjects";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";
import SummaryAbout from "@/components/SummaryAbout";
import React from "react";

export const Home: React.FC = ({}) => {
  return (
    <>
    <Header />
      <Banner />
      <Summary />
      <SummaryAbout />
      <AboutMe />
      <Skills />
      <SelectedProjects />
      <Map />
      <Contact />
      <Footer />
    </>
  );
};
