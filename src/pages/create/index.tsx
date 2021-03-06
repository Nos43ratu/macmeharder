import React from "react";
import Sections from "../../components/Section/Sections";
import PostLgNode from "../../components/Post/PostLg/PostLgNode";
import AppLgNode from "../../components/App/AppLg/AppLgNode";
import Footer from "../../components/Footer/Footer";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import { getAppList, getPostList } from "../../utils/getStaticData";

const Create = ({ data }) => {
  return (
    <div className="h-full bg">
      <h1 className="mt-10 pt-2 pb-3 text-2xl md:px-10 px-4 font-bold">
        Create
      </h1>
      <div className="border-b md:mx-10 mx-4 border-tuna" />
      <Sections>
        <PostLgNode data={data?.PostLG} />
      </Sections>
      <Sections title="Edit photos and images">
        <AppLgNode data={data?.AppLG1} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <AppLgNode data={data?.AppLG2} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <PostSmNode data={data?.PostSM} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <AppLgNode data={data?.AppLG3} />
      </Sections>
      <Footer />
    </div>
  );
};

export default Create;
export async function getStaticProps() {
  const PostLG = await getPostList(2);
  const AppLG1 = await getAppList(2);
  const AppLG2 = await getAppList(2);
  const AppLG3 = await getAppList(2);
  const PostSM = await getPostList(2);

  return {
    props: {
      data: {
        PostLG,
        AppLG3,
        AppLG1,
        AppLG2,
        PostSM,
      },
    },
  };
}
