import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarItems } from "./sectionsconfig";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      {sidebarItems.map((item) => (
        <Link href={item.path} key={item.id}>
          <a
            className={`w-full flex items-center p-0.5 xl:px-2 xl:py-1 rounded ${
              router.pathname === item.path ? `bg-shipGray` : ""
            }`}
          >
            {item.icon}
            <div className="ml-2 xl:block hidden">{item.name}</div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Nav;
