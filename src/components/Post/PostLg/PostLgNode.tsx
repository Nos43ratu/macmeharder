import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PostLg from "./PostLG";
const PostLgNode = ({ data }) => {
  return (
    <div className="h-90">
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
                <PostLg data={e} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PostLgNode;
