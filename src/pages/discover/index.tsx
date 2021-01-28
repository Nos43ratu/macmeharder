import React from "react";
import Sections from "../../components/Section/Sections";
import PostMd from "../../components/Post/PostMD";
import PostSm from "../../components/Post/PostSM";
import PostLg from "../../components/Post/PostLG";
import {
  tempDataPostsMD,
  tempDataPostsLG,
} from "../../assets/tempData/TempPostsData";
import Posts from "../../components/Post/Posts";
const Discover = () => {
  return (
    <div className="h-full bg">
      <Sections swipe={false} border={false}>
        <Posts.lg data={tempDataPostsLG} />
      </Sections>
      <Sections swipe={true} border={true}>
        <Posts data={tempDataPostsMD} />
      </Sections>
      {/*<Sections swipe={true}>*/}
      {/*  <Posts data={tempDataPostsMD} />*/}
      {/*</Sections>*/}
      {/*<Section type="post-lg" border={false} />*/}
      {/*<Section type="post-md" />*/}
      {/*<Section type="app-lg" title="Editor's Choice" />*/}
      {/*<Section type="app-md" title="Updated for Big Sur" />*/}
      {/*<Section type="post-sm" title="Updated for Big Sur" />*/}
      {/*<Section type="post-sm" />*/}
      {/*<Section type="app-md" />*/}
    </div>
  );
};

export default Discover;
