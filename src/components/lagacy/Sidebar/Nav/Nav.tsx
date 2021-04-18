import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarItems } from "./sectionsconfig";

const Nav = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row md:flex-col h-full">
      {sidebarItems.map((item) => (
        <Link href={item.path} key={item.id}>
          <a
            className={`w-full flex items-center p-0.5 xl:px-2 xl:py-1 md:justify-start sm:mb-2 mb-0 xl:mb-0 justify-center rounded ${
              router.pathname === item.path ? `bg-shipGray` : ""
            }`}
          >
            <div>{item.icon}</div>

            <div className="ml-2 xl:block hidden">{item.name}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
