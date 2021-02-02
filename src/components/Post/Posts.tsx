import React from "react";
import { PostLGPropsType, PostsPropsTypes } from "../../types/PostPropsTypes";
import PostLg from "./PostLG";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "./PostMD";
import PostSM from "./PostSM";

const Posts = ({ data }: any) => {
  return data ? (
    <>
      <div>{data}</div>
    </>
  ) : (
    <div>cannot load</div>
  );
};

const lg = ({ data }: PostLGPropsType) => {
  return <PostLg data={data} />;
};
const md = ({ data }: PostsPropsTypes) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return data ? (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          1024: { slidesPerView: 2 },
        }}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <div key={e.id}>
              <PostMD data={e} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    <div>cannot load</div>
  );
};
const sm = ({ data }: PostsPropsTypes) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return data ? (
    <>
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
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <PostSM data={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    <div>cannot load</div>
  );
};
Posts.lg = lg;
Posts.md = md;
Posts.sm = sm;

export default Posts;
