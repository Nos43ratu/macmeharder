import React from "react";
import Search from "./Search/Search";
import Nav from "./Nav/Nav";

const Sidebar = () => {
  return (
    <div className="xl:w-64 w-12">
      <div className="xl:w-64 w-12 h-screen bg-balticSea fixed flex flex-col justify-between text-white border-r border-black">
        <nav className="m-3">
          <Search />
          <Nav />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
