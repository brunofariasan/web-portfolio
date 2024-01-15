import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Map } from "@/components/Map";
import Summary from "@/components/Summary";
import Curve from "@/components/micro/Curve";

export const Home: React.FC = ({}) => {
  return (
    <Curve>
      <Header />
      <Banner />
      <Summary />
      <Map />
      <Footer />
    </Curve>
  );
};
