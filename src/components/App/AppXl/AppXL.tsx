import React from "react";
import { AppsNode } from "../../../generated/graphql";
type AppXlPropsType = {
  app?: AppsNode;
};
const AppXl = ({ app }: AppXlPropsType) => {
  if (!app) {
    return <div>Cant load image</div>;
  }
  return (
    <div className="flex h-32 pb-4 items-center overflow-hidden border-b border-tuna">
      <img
        // src={"https://macme.herokuapp.com" + app?.appImages[0]?.url}
        alt=""
        className="w-24 h-24 rounded-lg"
      />

      <div className="justify-end flex flex-col items-center ml-8  h-full justify-between">
        <div className="leading-tight flex flex-col flex-auto end">
          <div className="text-xl font-bold clamp-1">{app?.title}</div>
          <div className="clamp-1 text-xm text-santosGray">
            {app?.developer}
          </div>
          <div className="clamp-1 text-xs text-santosGray">
            {app?.category.name}
          </div>
        </div>
        <div className="w-16 h-6 bg-dodgerBlue rounded-3xl text-white justify-center items-center flex  text-xs uppercase font-bold cursor-pointer">
          Get
        </div>
      </div>
    </div>
  );
};

export default AppXl;
