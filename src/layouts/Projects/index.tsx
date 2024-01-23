import React from "react";
import Header from "@/components/Header";
import SelectedProjects from "@/components/SelectedProjects";
import SummaryAbout from "@/components/SummaryAbout";
import Footer from "@/components/Footer";
import Curve from "@/components/micro/Curve";
import Flex from "@/components/micro/Flex";

const Projects: React.FC = () => {
  return (
    <>
      <Curve>
        <Header dynamicHeader informationColor="black" />
        <SummaryAbout />
        <SelectedProjects />
        <Footer />
      </Curve>
    </>
  );
};

export default Projects;
