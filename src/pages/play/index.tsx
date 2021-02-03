import React from "react";
import Sections from "../../components/Section/Sections";
import PostLgNode from "../../components/Post/PostLg/PostLgNode";
import AppLgNode from "../../components/App/AppLg/AppLgNode";
import PostSmNode from "../../components/Post/PostSm/PostSmNode";
import Footer from "../../components/Footer/Footer";

const Play = () => {
  return (
    <div className="h-full bg">
      <div className="mt-10 pt-2 pb-3 text-2xl md:px-10 px-4 font-bold">
        Play
      </div>
      <div className="border-b md:mx-10 mx-4 border-tuna" />
      <Sections>
        <PostLgNode category={2} />
      </Sections>
      <Sections title="Edit photos and images">
        <AppLgNode category={1} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <AppLgNode category={1} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <PostSmNode category={2} />
      </Sections>
      <Sections title="Create Design Masterpiece">
        <AppLgNode category={1} />
      </Sections>
      <Footer />
    </div>
  );
};

export default Play;
