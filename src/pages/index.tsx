import { Home } from "@/layouts/Home";
import Head from "next/head";

export default function Page({ Component }: any) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </>
  );
}
