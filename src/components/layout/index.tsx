import React, { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import Filter from "../filter";
import HeadComponent from "../head/inedx";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <HeadComponent />
      <div className="flex flex-col" id="wrapper">
        <Header />
        {router.pathname !== "/app/[id]" && <Filter />}
        {children}
      </div>
    </>
  );
};

export default Layout;
