import React from "react";
import { NodePerElements } from "../../../utils/arrayWithNodes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import AppLg from "./AppLG";

const AppLgNode = ({ data }) => {
  if (data) SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="h-64">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {NodePerElements(data, 2).map((e, i) => (
          <SwiperSlide key={i}>
            {e[0] && <AppLg data={e[0]} withBorder={false} />}
            {e[1] && <AppLg data={e[1]} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AppLgNode;
