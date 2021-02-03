import React from "react";
import Sections from "../../components/Section/Sections";
import { useGetAppsListQuery, AppsNode } from "../../generated/graphql";
import Loading from "../../components/FetchingStates/Loading";
import PostMdNode from "../../components/Post/PostMd/PostMdNode";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import PostXL from "../../components/Post/PostXl/PostXL";
import AppsMdNode from "../../components/App/AppMd/AppsMdNode";
import AppLgNode from "../../components/App/AppLg/AppLgNode";
import Footer from "../../components/Footer/Footer";
const Discover = () => {
  return (
    <div className="h-full bg">
      <Sections border={false}>
        <PostXL id="1" />
      </Sections>
      <Sections border={true}>
        <PostMdNode category={2} />
      </Sections>
      <Sections border={true} title="Editors Choice">
        <AppsMdNode category={1} />
      </Sections>
      <Sections border={true} title="Do more with MacOs bigSur">
        <PostSmNode category={2} />
      </Sections>
      <Sections border={true} title="Test Apps">
        <AppLgNode category={1} />
      </Sections>
      <Footer />
    </div>
  );
};

export default Discover;
