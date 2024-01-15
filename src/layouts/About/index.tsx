import React from "react";
import AboutMe from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Curve from "@/components/micro/Curve";

export const About: React.FC = ({}) => {
  return (
    <>
      <Curve>
        <Header dynamicHeader informationColor="black" />
        <AboutMe />
        <Skills />
        <Footer />
      </Curve>
    </>
  );
};
