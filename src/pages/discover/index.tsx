import React from "react";
import Sections from "../../components/Section/Sections";
import PostMdNode from "../../components/Post/PostMd/PostMdNode";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import PostXL from "../../components/Post/PostXl/PostXL";
import AppsMdNode from "../../components/App/AppMd/AppsMdNode";
import AppLgNode from "../../components/App/AppLg/AppLgNode";
import Footer from "../../components/Footer/Footer";
import { discoverData } from "../../pagesData/discoverData";

const Discover = ({ data }) => {
  return (
    <div className="h-full bg">
      <Sections border={false}>
        <PostXL data={data.PostXL.data.post} />
      </Sections>
      <Sections border={true}>
        <PostMdNode data={data.PostMD.data.postList} />
      </Sections>
      <Sections border={true} title="Editors Choice">
        <AppsMdNode data={data.AppMD.data.appsList} />
      </Sections>
      <Sections border={true} title="Do more with MacOs bigSur">
        <PostSmNode data={data.PostSM.data.postList} />
      </Sections>
      <Sections border={true} title="Test Apps">
        <AppLgNode data={data.AppLG.data.appsList} />
      </Sections>
      <Footer />
    </div>
  );
};

export default Discover;

export async function getStaticProps() {
  const { PostXL, PostMD, PostSM, AppMD, AppLG } = discoverData();
  return {
    props: {
      data: {
        PostXL,
        PostMD,
        PostSM,
        AppMD,
        AppLG,
      },
    },
  };
}
