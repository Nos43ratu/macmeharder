import React from "react";
import { AppsNode } from "../../generated/graphql";

const AppDescription = () => {
  return <div>dasadda</div>;
};
type AppDescriptionText = {
  description: string | undefined | null;
};
const text = ({ description }: AppDescriptionText) => {
  if (!description) {
    return <div> Cannot load </div>;
  }
  return <div className="text-lg">{description}</div>;
};
type AppDescriptionInfo = {
  app: AppsNode | undefined | null;
};
const info = ({ app }: AppDescriptionInfo) => {
  if (!app) {
    return <div> Cannot load </div>;
  }
  return (
    <div className="w-full flex pb-9 mb-3 flex flex-col">
      <div className="flex w-full pb-10 pt-3">
        <div className="flex flex-col flex-1">
          <div className="text-santosGray text-xm">Provider</div>
          <div className="text-xm">{app.developer}</div>
        </div>
        <div className="flex flex-col  flex-1">
          <div className="text-santosGray text-xm">Size</div>
          <div className="text-xm">{app.size} MB</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-santosGray text-xm">Category</div>
          <div className="text-xm">{app.category.name}</div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col w-full">
          <div className="text-santosGray text-xm">Compatibility</div>
          <div className="text-xm">{app.compatibility}</div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="text-santosGray text-xm">Languages</div>
          <div className="text-xm">{app.language}</div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-santosGray text-xm">Aeg Rating</div>
          <div className="text-xm">{app.age}+</div>
        </div>
      </div>
    </div>
  );
};
AppDescription.text = text;
AppDescription.info = info;

export default AppDescription;
