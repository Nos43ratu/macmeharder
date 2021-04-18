import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full h-20 bg-gray-700 text-white justify-between px-10 lg:px-48">
      <Link href="/work">
        <div className="flex items-center cursor-pointer">
          <div className="p-5 w-24 h-24">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </div>
          <h1 className="font-black text-2xl">Macmeharder</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
