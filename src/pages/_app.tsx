import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function App({ Component, pageProps, router }: any) {
  return (
    <div className="main">
      {/* <div className="header">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div> */}
      
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
