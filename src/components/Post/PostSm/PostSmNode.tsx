import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostSM from "./PostSM";

const PostSmNode = ({ data }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="h-72">
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
        {data &&
          data.map((e) => (
            <SwiperSlide key={e?.id}>
              <PostSM data={e} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PostSmNode;
