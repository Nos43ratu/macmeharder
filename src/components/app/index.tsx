import React from "react";
import Link from "next/link";
const App = ({ data }) => {
  return (
    <Link href={`/app/${data.id}`}>
      <div className="w-96 h-80 bg-white mr-10 mt-10 border border-gray-300 flex flex-col hover:border-gray-700 cursor-pointer  text-gray-400 hover:text-black transition-all duration-150 ease-in-out">
        <div className="max-h-24 h-24 border border-gray-300 text-2xl text-black flex items-center p-8 flex-shrink-0">
          <div>
            <img
              src={`http://macmeharder.com:8080${data?.image?.path}`}
              alt={data.name}
              className="flex-1 w-20"
            />
          </div>
          <div className="ml-5">{data.name}</div>
        </div>
        <div className="h-full text-xl border border-gray-300 p-8 clamp-2 overflow-ellipsis overflow-hidden">
          {data.subTitle}
        </div>
        <div className="h-16 border border-gray-300 px-8 py-5 flex justify-between items-center">
          <span>{data.version}</span>
          <span>{data.size}</span>
        </div>
      </div>
    </Link>
  );
};

export default App;
