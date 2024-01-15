import React from "react";
import Contac from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Map } from "@/components/Map";
import Curve from "@/components/micro/Curve";

export const Contact: React.FC = ({}) => {
  return (
    <>
      <Curve>
        <Header />
        <Map />
        <Contac />
        <Footer />
      </Curve>
    </>
  );
};
