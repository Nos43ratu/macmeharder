import React from "react";
import { PostLGPropsType } from "../../types/PostPropsTypes";
const PostLg = ({ data }: PostLGPropsType) => {
  return (
    <div className="w-full h-96 flex overflow-hidden relative">
      <div className="w-full md:w-max rounded-bl-lg bg-shipGray bg-opacity-75 flex flex-1 flex-col text-santosGray pt-12 px-8 absolute h-full">
        <div className="text-xs uppercase font-bold clamp-1 ">
          {data.title1}
        </div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden mt-3">
          {data.title2}
        </div>
        <div className="text-sm mt-3 clamp-3">{data.description}</div>
      </div>
      <img
        className="w-full rounded-b-lg object-cover "
        src={data.img}
        alt="Picture of the author"
      />
    </div>
  );
};

export default PostLg;
