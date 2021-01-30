import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "../Post/PostMD";
import { AppsPropsTypes } from "../../types/AppPropsTypes";
import AppMd from "./AppMD";
import { NodePerElements } from "../../utils/ArrayWithNodes";
import { AppsNode } from "../../pages/discover/GetAppsList.generated";
const Apps = () => {
  return <div></div>;
};
const lg = () => {
  return <></>;
};
const md = ({ data }: any) => {
  let AppsNode = NodePerElements(data, 3);
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return AppsNode ? (
    <>
      <Swiper spaceBetween={20} slidesPerView={5} navigation>
        {AppsNode.map((e: AppsNode[]) => (
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
