import React from "react";
import Sections from "../../components/Section/Sections";
import {
  tempDataPostsMD,
  tempDataPostsLG,
  tempDataAppsMD,
} from "../../assets/tempData/TempPostsData";
import Posts from "../../components/Post/Posts";
import Apps from "../../components/App/Apps";
const Discover = () => {
  return (
    <div className="h-full bg">
      <Sections border={false}>
        <Posts.lg data={tempDataPostsLG} />
      </Sections>
      <Sections border={true}>
        <Posts.md data={tempDataPostsMD} />
      </Sections>
      <Sections border={true} title="Editors Choice">
        <Apps.md data={tempDataAppsMD} />
      </Sections>
      <Sections border={true} title="Do more with MacOs bigSur">
        <Posts.sm data={tempDataPostsMD} />
      </Sections>
    </div>
  );
};

export default Discover;
