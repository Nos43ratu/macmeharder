import React from "react";

const PostSM = ({ data }) => {
  const imgURL = `${process.env.NEXT_PUBLIC_APP_URI}${data?.postImages[0]?.url}`;
  return (
    <div className="w-full h-72 flex flex-col overflow-hidden">
      <img src={imgURL} className="rounded-sm object-cover h-36" alt="post" />
      <div className="flex flex-col justify-end text-santosGray mt-3">
        <div className="text-xs uppercase font-bold clamp-1">
          {data.miniTitle}
        </div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
          {data.title}
        </div>
        <div className="text-sm mt-2 clamp-3">{data.body}</div>
      </div>
    </div>
  );
};

export default PostSM;
