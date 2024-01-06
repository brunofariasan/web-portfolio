import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SelectedProjects from "@/components/SelectedProjects";
import SummaryAbout from "@/components/SummaryAbout";
import React from "react";

export const Projects: React.FC = ({}) => {
  return (
    <>
      <Header />
      <SummaryAbout />
      <SelectedProjects />
      <Footer />
    </>
  );
};
