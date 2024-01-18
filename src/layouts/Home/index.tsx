import React, { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Curve from "@/components/micro/Curve";
import { Slide } from "@/components/Slider";

export const Home: React.FC = ({}) => {
  return (
    <>
      <Curve>
        <Header />
        <Banner />
      </Curve>
      <Summary />
      <Slide />
      <Footer />
    </>
  );
};
