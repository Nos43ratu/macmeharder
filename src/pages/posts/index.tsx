import React from "react";
import Sections from "../../components/Section/Sections";
import PostLgNode from "../../components/Post/PostLg/PostLgNode";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import Footer from "../../components/Footer/Footer";
import { getPostList } from "../../utils/getStaticData";

const PostsPage = ({ data }) => {
  return (
    <div className="h-full bg">
      <h1 className="mt-10 pt-2 pb-3 text-2xl md:px-10 px-4 font-bold">Post</h1>
      <div className="border-b md:mx-10 mx-4 border-tuna" />
      <Sections>
        <PostLgNode data={data.PostLG} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <PostSmNode data={data.PostLG} />
      </Sections>
      <Footer />
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const PostLG = await getPostList(2);
  const PostSM = await getPostList(2);

  return {
    props: {
      data: {
        PostLG,
        PostSM,
      },
    },
  };
}
