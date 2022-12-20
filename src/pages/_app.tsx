import type { AppProps } from "next/app";
import React from "react";
import Footer from "src/components/footer";
import Header from "src/components/header";
import "../styles/globals.css";
import emailJS from "@emailjs/browser";

emailJS.init("b7lFwEVCfmAWecktK");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
