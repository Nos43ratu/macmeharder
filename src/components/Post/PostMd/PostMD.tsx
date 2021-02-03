import React, { useState } from "react";
import { createPortal } from "react-dom";
import PostPopUp from "../PostPopUp/PostPopUp";
import { PostNode } from "../../../generated/graphql";

const PostMd = ({ data }: { data: PostNode }) => {
  const wrapper = document.getElementById("wrapper");
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const close = () => {
    setAnimation(!animation);
    const popup = document.getElementById("popUp");
    if (popup !== null)
      popup.onanimationend = () => {
        setOpen(!open);
      };
  };
  const imgURL = `${process.env.NEXT_PUBLIC_APP_URI}${data?.postImages[0]?.url}`;
  return (
    <>
      <div
        className="w-full cursor-pointer h-56 bg-tuna rounded-lg flex overflow-hidden"
        onClick={() => {
          setAnimation(!animation);
          if (wrapper) wrapper.style.overflow = "hidden";
          setOpen(!open);
        }}
      >
        <div className="flex flex-1 flex-col text-santosGray md:pt-6 md:px-8 pt-3 px-3 justify-center md:justify-start">
          <div className="text-xs uppercase font-bold clamp-1">
            {data.miniTitle}
          </div>
          <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden">
            {data.title}
          </div>
          <div className="text-sm mt-3 clamp-3">{data.body}</div>
        </div>
        <div className="flex flex-1 justify-center items-center pr-3 ">
          <img
            src={imgURL}
            className="w-24 h-24 md:w-40 md:h-40 rounded-full"
            alt="post"
          />
        </div>
      </div>
      {open &&
        wrapper &&
        createPortal(
          <div
            className={`fixed w-full h-full top-0 left-0 z-10 animate-${
              animation ? "right" : "left"
            }-slide `}
            id="popUp"
          >
            <div
              className={`animate-${
                animation ? "right" : "left"
              }-slide fixed z-20 left-0 top-0 flex justify-center rounded cursor-pointer items-center fill-current text-santosGray transform rotate-180 w-4 h-4 bg-santosGray bg-opacity-25 ml-12 mt-5`}
              onClick={() => {
                close();
                if (wrapper) wrapper.style.overflow = "visible";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </div>
            <PostPopUp close="asd" />
          </div>,
          wrapper
        )}
    </>
  );
};

export default PostMd;
