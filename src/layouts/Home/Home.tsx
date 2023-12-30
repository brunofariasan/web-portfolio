import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SelectedProjects from "@/components/SelectedProjects";
import Summary from "@/components/Summary";
import SummaryAbout from "@/components/SummaryAbout";
import React from "react";

export const Home: React.FC = ({}) => {
  return (
    <>
      <Banner />
      <Summary />
      <SummaryAbout />
      <SelectedProjects />
      <Footer />
    </>
  );
};
