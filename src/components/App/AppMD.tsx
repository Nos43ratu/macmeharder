import React from "react";
import { AppMDMDPropsType } from "../../types/AppPropsTypes";
import Link from "next/link";
import { AppsNode } from "../../generated/graphql";
export type appmd = {
  data: AppsNode;
  withBorder?: boolean;
};

const AppMd = ({ data, withBorder = true }: appmd) => {
  return (
    <Link href={`/app/${data.id}`}>
      <div className="flex items-center overflow-hidden cursor-pointer">
        <img
          src={
            (process.env.NEXT_PUBLIC_APP_URI || "") +
            (data?.appImages[0]?.url || "")
          }
          alt=""
          className="w-10 h-10 rounded-lg"
        />
        <div
          className={`flex items-center ml-2 h-16 justify-between ${
            withBorder ? "border-t border-tuna" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <div className="text-sm clamp-1">{data.title} 7</div>
            <div className="clamp-1 text-xs text-santosGray">
              {data.description}
            </div>
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
