import React from "react";

const AppHead = ({ app }) => {
  return (
    <section className="flex items-center w-full justify-between border-b-2 border-gray-400 px-52 py-12">
      <div className="flex ">
        <img
          src={
            "//" +
            (process.env.NEXT_PUBLIC_APP_URI || "") +
            (app.image.path || "")
          }
          alt={app.name}
          className="w-32 h-32"
        />
        <div className="ml-5 flex flex-col justify-center">
          <h1 className="text-3xl font-black">{app.name}</h1>
          <span className="text-gray-500">{app.author}</span>
        </div>
      </div>
      <div
        onClick={() => window.open(app.source)}
        className="w-32 h-8 bg-dodgerBlue rounded-3xl text-white justify-center items-center flex  text-xl uppercase font-bold cursor-pointer"
      >
        Get
      </div>
    </section>
  );
};
export default AppHead;
