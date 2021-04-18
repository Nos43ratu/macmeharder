import React from "react";
import Link from "next/link";
const AppMd = ({ data, withBorder = true }) => {
  return (
    <Link href={`/app/${data.id}`}>
      <div className="flex items-center overflow-hidden cursor-pointer">
        <img
          // src={``}
          alt=""
          className="w-10 h-10 rounded-lg"
        />
        <div
          className={`flex items-center ml-2 h-16 justify-between ${
            withBorder ? "border-t border-tuna" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-sm clamp-1">{data.title} 7</h2>
            <p className="clamp-1 text-xs text-santosGray">
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

export default AppMd;
