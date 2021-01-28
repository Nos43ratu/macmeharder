import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SectionPropsType } from "../../types/SectionsPropsTypes";
import Posts from "../Post/Posts";
import "swiper/swiper-bundle.min.css";

const Sections = ({
  children,
  border = true,
  swipe = true,
  title,
}: SectionPropsType) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  if (!swipe) {
    return (
      <>
        <div className="section relative w-full px-10 ">{children}</div>
        {border ? (
          <div className="border-b mt-10 mx-10 border-tuna" />
        ) : (
          <div className="py-5" />
        )}
      </>
    );
  }
  return (
    <>
      {title && (
        <div className="pt-2 pb-3 text-2xl px-10 font-bold">{title}</div>
      )}
      <div className="section relative w-full px-10 ">
        <Swiper spaceBetween={20} slidesPerView={3} navigation>
          {children}
          <div>hui</div>
        </Swiper>
      </div>
      {border ? (
        <div className="border-b mt-10 mx-10 border-tuna" />
      ) : (
        <div className="py-5" />
      )}
    </>
  );
};
// const posts = () => {
//   return <Posts />;
// };
// Sections.posts = posts;
export default Sections;
