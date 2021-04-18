import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { popUpImg } from "../../utils/popUp";

const AppScreenshots = ({ data }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={true}
      breakpoints={{
        768: { slidesPerView: 2 },
      }}
    >
      {data.map((e) => (
        <SwiperSlide key={e.id}>
          <img
            src={
              "//" + (process.env.NEXT_PUBLIC_APP_URI || "") + (e.path || "")
            }
            className="h-96 w-full rounded-md object-contain cursor-pointer"
            alt="post"
            onClick={() => {
              popUpImg(
                "//" + (process.env.NEXT_PUBLIC_APP_URI || "") + (e.path || "")
              );
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AppScreenshots;
