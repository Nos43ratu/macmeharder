import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>macmeharder</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Download apps for mac" />
        <meta
          name="keywords"
          content="игры, приложения, бесплатно, загрузить, mac, ios, macOs, macinstosh"
        />
        <meta property="og:title " content="Dow" />
        <meta property="og:title" content="Macmeharder free mac apps" />
        <meta property="og:description" content="Download apps for mac" />
        <meta
          property="og:image"
          content="https://sun9-60.userapi.com/impg/V9i4d8kdkVMoMIoESPgRMaLv8-kScFZPIY_Zng/FeGAGggoyVE.jpg?size=512x512&quality=96&sign=243711088b4a086fa8842c24470e1958&type=album"
        />
      </Head>
      <div className="flex w-full h-full" id="wrapper">
        <Sidebar />
        <div className="layout">{children}</div>
      </div>
    </>
  );
};

export default Layout;
