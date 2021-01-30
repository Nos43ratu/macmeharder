import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "../Post/PostMD";
import { AppsPropsTypes } from "../../types/AppPropsTypes";
import AppMd from "./AppMD";
import { NodePerElements } from "../../utils/ArrayWithNodes";
import { AppsNode } from "../../pages/discover/GetAppsList.generated";
import { Query } from "../../pages/app/GetAppQuery.generated";
const Apps = () => {
  return <div></div>;
};
const lg = () => {
  return <></>;
};
type appsMdType = {
  data: AppsNode[];
  loading: boolean;
};
const md = ({ data, loading }: appsMdType) => {
  let AppsNode = NodePerElements(data, 3);
  if (loading) {
    return <div>Loading</div>;
  }
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return AppsNode ? (
    <>
      <Swiper spaceBetween={20} slidesPerView={5} navigation>
        {AppsNode.map((e: AppsNode[]) => (
          <SwiperSlide>
            {e[0] && <AppMd data={e[0]} withBorder={false} />}
            {e[1] && <AppMd data={e[1]} />}
            {e[2] && <AppMd data={e[2]} />}
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
