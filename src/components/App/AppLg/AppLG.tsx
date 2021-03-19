import React from "react";
import Link from "next/link";

const AppLg = ({ data, withBorder = true }) => {
  return (
    <Link href={`/app/${data.id}`}>
      <div className="flex items-center overflow-hidden cursor-pointer">
        <div className="w-24">
          <img
            src={
              (process.env.NEXT_PUBLIC_APP_URI || "") +
              (data?.appAvatar[0]?.url || "")
            }
            alt=""
            className="rounded-lg"
          />
        </div>
        <div
          className={`flex flex-col items-start ml-5 justify-between py-5 w-full h-32 ${
            withBorder ? "border-t border-tuna" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-lg clamp-1">{data.title} 7</h2>
            <p className="clamp-1 text-sm text-santosGray">
              {data.description}
            </p>
          </div>
          <div className="ml-2 bg-iron rounded-3xl text-dodgerBlue py-0.5 px-5 text-xs uppercase font-bold cursor-pointer">
            Get
          </div>
        </div>
      </div>
    </Link>
  );
};
export default AppLg;
