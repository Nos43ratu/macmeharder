import React from "react";

const AppDescription = () => {
  return <div>dasadda</div>;
};

const text = ({ description }) => {
  if (!description) {
    return <div> Cannot load </div>;
  }
  return <p className="text-lg">{description}</p>;
};
const info = ({ app }) => {
  if (!app) {
    return <div> Cannot load </div>;
  }
  return (
    <div className="w-full flex pb-9 mb-3 flex flex-col">
      <div className="flex w-full pb-10 pt-3">
        <div className="flex flex-col flex-1">
          <h3 className="text-santosGray text-xm">Provider</h3>
          <span className="text-xm">{app.developer}</span>
        </div>
        <div className="flex flex-col  flex-1">
          <h3 className="text-santosGray text-xm">Size</h3>
          <span className="text-xm">{app.size} MB</span>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-santosGray text-xm">Category</h3>
          <span className="text-xm">{app.category.name}</span>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col w-full">
          <h3 className="text-santosGray text-xm">Compatibility</h3>
          <span className="text-xm">{app.compatibility}</span>
        </div>
        <div className="flex flex-1 flex-col ">
          <h3 className="text-santosGray text-xm">Languages</h3>
          <span className="text-xm">{app.language}</span>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-santosGray text-xm">Aeg Rating</h3>
          <span className="text-xm">{app.age}+</span>
        </div>
      </div>
    </div>
  );
};
AppDescription.text = text;
AppDescription.info = info;

export default AppDescription;
