import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Map } from "@/components/Map";
import Summary from "@/components/Summary";
import Head from "next/head";
import MyAnimationComponent from "@/components/Carousel copy";
import Curve from "@/components/micro/Curve";

export const Home: React.FC = ({}) => {
  return (
    <>
      <Head>
        <title>Bruno Faria</title>
      </Head>

      <Curve>
        <Header />
        <Banner />
        <Summary />
        <Map />
        <Footer />
      </Curve>
    </>
  );
};
