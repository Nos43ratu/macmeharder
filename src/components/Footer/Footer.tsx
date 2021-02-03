import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5">
      <div className="pt-2 pb-3 text-2xl md:px-10 px-4 font-bold">
        Quick Links
      </div>
      <div className="section relative w-full md:px-10 px-4 flex justify-between">
        <a
          className="text-dodgerBlue flex-1"
          href="https://vk.com/adilkairolla"
        >
          Report Problem
        </a>
        <a className="text-dodgerBlue flex-1" href="https://vk.com/kobylan99">
          Help us
        </a>
        <a className="text-dodgerBlue flex-1" href="https://vk.com/amemdmhm">
          Contact us
        </a>
      </div>
      <div className="border-b md:mt-6 mt-4 md:mx-10 mx-4 border-tuna" />
    </footer>
  );
};

export default Footer;
