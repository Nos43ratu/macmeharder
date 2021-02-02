import React from "react";
import Icon from "../../../ui/Icon";

const Search = () => {
  return (
    <div className="flex w-full bg-tuna items-center rounded mb-4 px-2 py-1 mt-10">
      <div>
        <Icon
          name="search"
          className="opacity-50"
          fill="#FFFFFF"
          width={"14"}
          height={"14"}
        />
      </div>
      <div className="flex items-center ml-1">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none placeholder-white text-sm"
        />
      </div>
    </div>
  );
};

export default Search;
