import React from "react";
import Contac from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Map } from "@/components/Map";

export const Contact: React.FC = ({}) => {
  return (
    <>
      <Header />
      <Map />
      <Contac />
      <Footer />
    </>
  );
};
