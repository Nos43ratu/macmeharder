import React from "react";
import {
  PostLGPropsType,
  PostMDPropsType,
  PostPropsTypes,
} from "../../types/PostPropsTypes";
import PostLg from "./PostLG";
import { Swiper, SwiperSlide } from "swiper/react";
import PostMD from "./PostMD";

const Posts = ({ data }: PostPropsTypes) => {
  // if(!data){return }
  // const MD = () => {
  //     return data.map((post) => {
  //         <SwiperSlide>
  //             <PostMD data={post}/>
  //         </SwiperSlide>
  //     })
  // }
  return data ? (
    <>
      {data.map((e) => (
        <SwiperSlide>
          <PostMD data={e} />
        </SwiperSlide>
      ))}
    </>
  ) : (
    <div>cannot load</div>
  );
};

const lg = ({ data }: PostLGPropsType) => {
  return <PostLg data={data} />;
};
const md = ({ data }: PostPropsTypes) => {
  return data ? (
    <>
      {data.map((e) => (
        <SwiperSlide>
          <PostMD data={e} />
        </SwiperSlide>
      ))}
    </>
  ) : (
    <div>cannot load</div>
  );
};
Posts.lg = lg;
Posts.md = md;

export default Posts;
