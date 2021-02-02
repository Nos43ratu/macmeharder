import React from "react";
import Search from "./Search/Search";
import Nav from "./Nav/Nav";

const Sidebar = () => {
  return (
    <div className="xl:w-64 md:w-12 md:block md:relative absolute z-20 md:z-0">
      <div className="xl:w-64 md:w-12 w-full md:h-screen h-14 bottom-0 bg-balticSea fixed flex flex-col justify-between text-white border-r border-black">
        <nav className="md:m-3 m-0 h-full">
          <Search />
          <Nav />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
