import React, { useState } from "react";
import { PostNode } from "../../../generated/graphql";
import { createPortal } from "react-dom";
import PostPopUp from "../PostPopUp/PostPopUp";

const PostLg = ({ data }: { data: PostNode }) => {
  let wrapper;
  if (typeof window !== "undefined") {
    wrapper = document.getElementById("wrapper");
  }
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
        className="w-full  flex-col cursor-pointer h-80 flex overflow-hidden mt-10"
        onClick={() => {
          setAnimation(!animation);
          if (wrapper) wrapper.style.overflow = "hidden";
          setOpen(!open);
        }}
      >
        <div className="flex flex-col text-santosGray justify-start md:justify-start">
          <div className="text-xs uppercase text-dodgerBlue clamp-1">
            {data.miniTitle}
          </div>
          <div className="text-white text-sm clamp-2 overflow-ellipsis overflow-hidden">
            {data.title}
          </div>
          <div className="text-base clamp-1 md:clamp-2">{data.body}</div>
        </div>
        <div className="w-full h-full flex flex-1 justify-center items-center pr-3 ">
          <img src={imgURL} className="w-full h-full rounded-lg" alt="post" />
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
export default PostLg;
