import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full" id="wrapper">
      <Sidebar />
      <div className="layout">{children}</div>
    </div>
  );
};

export default Layout;
