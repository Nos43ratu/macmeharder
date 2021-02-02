import React from "react";
import { SectionPropsType } from "../../types/SectionsPropsTypes";
import "swiper/swiper-bundle.css";

const Sections = ({ children, border = true, title }: SectionPropsType) => {
  return (
    <>
      {title && (
        <div className="pt-2 pb-3 text-2xl md:px-10 px-4 font-bold">
          {title}
        </div>
      )}
      <div className="section relative w-full md:px-10 px-4 ">{children}</div>
      {border ? (
        <div className="border-b md:mt-10 mt-4 md:mx-10 mx-4 border-tuna" />
      ) : (
        <div className="py-5" />
      )}
    </>
  );
};
export default Sections;
