import React from "react";
import { PostSMPropsType } from "../../types/PostPropsTypes";

const PostSM = ({ data }: PostSMPropsType) => {
  return (
    <div className="w-full h-72 flex flex-col overflow-hidden ">
      <img src={data.img} className="rounded-sm object-cover h-36" alt="post" />
      <div className="flex flex-col justify-end text-santosGray mt-3">
        <div className="text-xs uppercase font-bold clamp-1">{data.title1}</div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
          {data.title2}
        </div>
        <div className="text-sm mt-2 clamp-3">{data.description}</div>
      </div>
    </div>
  );
};

export default PostSM;
