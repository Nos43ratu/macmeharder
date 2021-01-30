import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "../Post/PostMD";
import { AppsPropsTypes } from "../../types/AppPropsTypes";
import AppMd from "./AppMD";
const Apps = () => {
  return <div></div>;
};
const lg = () => {
  return <></>;
};
const md = ({ data }: AppsPropsTypes) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return data ? (
    <>
      <Swiper spaceBetween={20} slidesPerView={5} navigation>
        {data.map((e) => (
          <SwiperSlide>
            <AppMd data={e[0]} />
            <AppMd data={e[1]} />
            <AppMd data={e[2]} withBorder={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    <div>cannot load</div>
  );
};
Apps.lg = lg;
Apps.md = md;

export default Apps;
