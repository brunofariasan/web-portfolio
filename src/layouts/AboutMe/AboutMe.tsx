import React from "react";
import About from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Curve from "@/components/micro/Curve";

export const AboutMe: React.FC = ({}) => {
  return (
    <Curve >
      <Header dynamicHeader informationColor="black" />
      <About />
      <Skills />
      <Footer />
    </Curve>
  );
};
