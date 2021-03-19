import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "./PostMD";
const PostMdNode = ({ data }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="h-56">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data &&
          data.map((e) => (
            <SwiperSlide key={e?.id}>
              <div key={e?.id}>
                <PostMD data={e} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PostMdNode;
