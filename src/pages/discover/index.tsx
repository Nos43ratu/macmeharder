import React from "react";
import Sections from "../../components/Section/Sections";
import PostMdNode from "../../components/Post/PostMd/PostMdNode";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import PostXL from "../../components/Post/PostXl/PostXL";
import AppsMdNode from "../../components/App/AppMd/AppsMdNode";
import AppLgNode from "../../components/App/AppLg/AppLgNode";
import Footer from "../../components/Footer/Footer";
import { getAppList, getPost, getPostList } from "../../utils/getStaticData";

const Discover = ({ data }) => {
  return (
    <div className="h-full">
      <Sections border={false}>
        <PostXL data={data?.PostXL} />
      </Sections>
      <Sections border={true}>
        <PostMdNode data={data?.PostMD} />
      </Sections>
      <Sections border={true} title="Editors Choice">
        <AppsMdNode data={data?.AppMD} />
      </Sections>
      <Sections border={true} title="Do more with MacOs bigSur">
        <PostSmNode data={data?.PostSM} />
      </Sections>
      <Sections border={true} title="Test Apps">
        <AppLgNode data={data?.AppLG} />
      </Sections>
      <Footer />
    </div>
  );
};

export default Discover;

export async function getStaticProps() {
  const PostXL = await getPost(1);
  const PostMD = await getPostList(2);
  const PostSM = await getPostList(1);
  const AppMD = await getAppList(1);
  const AppLG = await getAppList(1);
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
