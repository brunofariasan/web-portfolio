import About from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import React from "react";

export const AboutMe: React.FC = ({}) => {
  return (
    <>
      <Header dynamicHeader informationColor="black" />
      <About />
      <Skills />
      <Footer />
    </>
  );
};
