import React from "react";
import { PostMDPropsType } from "../../types/PostPropsTypes";

const PostMd = ({ data }: PostMDPropsType) => {
  return (
    <div className="w-full cursor-pointer h-56 bg-tuna rounded-lg flex overflow-hidden">
      <div className="flex flex-1 flex-col text-santosGray mt-6 mx-8">
        <div className="text-xs uppercase font-bold clamp-1">{data.title1}</div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
          {data.title2}
        </div>
        <div className="text-sm mt-3 clamp-3">{data.description}</div>
      </div>
      <div className="flex flex-1 justify-center items-center min-w-max pr-3 ">
        <img src={data.img} className="w-40 h-40 rounded-full" alt="post" />
      </div>
    </div>
  );
};

export default PostMd;
