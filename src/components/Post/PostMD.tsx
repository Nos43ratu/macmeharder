import React from "react";
import { PostMDPropsType } from "../../types/PostPropsTypes";

const PostMd = ({ data }: PostMDPropsType) => {
  return (
    <div className="w-full cursor-pointer h-56 bg-tuna rounded-lg flex overflow-hidden">
      <div className="flex flex-1 flex-col text-santosGray md:pt-6 md:px-8 pt-3 px-3 justify-center">
        <div className="text-xs uppercase font-bold clamp-1">{data.title1}</div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
          {data.title2}
        </div>
        <div className="text-sm mt-3 clamp-3">{data.description}</div>
      </div>
      <div className="flex flex-1 justify-center items-center pr-3 ">
        <img
          src={data.img}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full"
          alt="post"
        />
      </div>
    </div>
  );
};

export default PostMd;
