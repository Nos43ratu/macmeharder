import React from "react";
import { SectionPropsType } from "../../types/SectionsPropsTypes";
import "swiper/swiper-bundle.min.css";

const Sections = ({ children, border = true, title }: SectionPropsType) => {
  return (
    <>
      {title && (
        <div className="pt-2 pb-3 text-2xl md:px-10 px-1.5 font-bold">
          {title}
        </div>
      )}
      <div className="section relative w-full px-10 ">{children}</div>
      {border ? (
        <div className="border-b mt-10 mx-10 border-tuna" />
      ) : (
        <div className="py-5" />
      )}
    </>
  );
};
export default Sections;
