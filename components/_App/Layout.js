import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>6figure-earner - Get several different types of education to take your level to another place</title>
        
      </Head>

      {children}

      <Toaster position="top-right" />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />

     
     
    </>
  );
};

export default Layout;
