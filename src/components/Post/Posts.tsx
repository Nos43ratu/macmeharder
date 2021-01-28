import React from "react";
import {
  PostLGPropsType,
  PostMDPropsType,
  PostsPropsTypes,
} from "../../types/PostPropsTypes";
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
      <Swiper spaceBetween={20} slidesPerView={2} navigation>
        {data.map((e) => (
          <SwiperSlide>
            <PostMD data={e} />
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
      <Swiper spaceBetween={20} slidesPerView={5} navigation>
        {data.map((e) => (
          <SwiperSlide>
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
