import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Summary from "@/components/Summary";
import React from "react";

export const Home: React.FC = ({}) => {
  return (
    <>
      <Banner />
      <Summary />
      <Footer />
    </>
  );
};
