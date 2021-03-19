import React from "react";

const PostXL = ({ data }) => {
  return (
    <div className="w-full h-96 flex overflow-hidden relative">
      <div className="w-full md:w-max rounded-bl-lg bg-shipGray bg-opacity-75 flex flex-1 flex-col text-santosGray pt-12 px-8 absolute h-full">
        <h2 className="text-xs uppercase font-bold clamp-1 ">
          {data?.miniTitle}
        </h2>
        <h1 className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden mt-3">
          {data?.title}
        </h1>
        <p className="text-sm mt-3 clamp-3">{data?.body}</p>
      </div>
      <img
        className="w-full rounded-b-lg object-cover "
        src={`${process.env.NEXT_PUBLIC_APP_URI}${data?.postImages[0]?.url}`}
        alt="Picture of the author"
      />
    </div>
  );
};

export default PostXL;
