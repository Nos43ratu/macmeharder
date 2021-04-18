import React from "react";

const AppDescription = () => {
  return <div>dasadda</div>;
};

const text = ({ description }) => {
  if (!description) {
    return <div> Cannot load </div>;
  }
  return <p className="text-lg whitespace-pre-wrap">{description}</p>;
};
const info = ({ app }) => {
  if (!app) {
    return <div> Cannot load </div>;
  }
  return (
    <div className="w-full flex flex flex-col">
      <div className="flex w-full pb-10 pt-3">
        <div className="flex flex-col  flex-1 items-center">
          <h3 className="text-santosGray text-xm">Size</h3>
          <span className="text-xm">{app.size}</span>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <h3 className="text-santosGray text-xm">Category</h3>
          <span className="text-xm">{app.category}</span>
        </div>
        <div className="flex flex-1 flex-col w-full items-center">
          <h3 className="text-santosGray text-xm">Compatibility</h3>
          <span className="text-xm">{app.operatingSystem}</span>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h3 className="text-santosGray text-xm">Version</h3>
          <span className="text-xm">{app.version}</span>
        </div>
      </div>
    </div>
  );
};
AppDescription.text = text;
AppDescription.info = info;

export default AppDescription;
