import React from "react";
import { useGetPostQuery } from "../../../generated/graphql";
import Loading from "../../FetchingStates/Loading";
type Props = {
  id: string;
};
const PostXL = ({ id }: Props) => {
  const { data, loading, error } = useGetPostQuery({
    variables: {
      id,
    },
  });
  if (error) {
    return <div>ERROR</div>;
  }
  if (loading || !data) {
    return <Loading />;
  }

  const post = data.post;
  const imgURL = `${process.env.NEXT_PUBLIC_APP_URI}${post?.postImages[0]?.url}`;
  return (
    <div className="w-full h-96 flex overflow-hidden relative">
      <div className="w-full md:w-max rounded-bl-lg bg-shipGray bg-opacity-75 flex flex-1 flex-col text-santosGray pt-12 px-8 absolute h-full">
        <div className="text-xs uppercase font-bold clamp-1 ">
          {post?.miniTitle}
        </div>
        <div className="text-white text-2xl clamp-2 overflow-ellipsis overflow-hidden mt-3">
          {post?.title}
        </div>
        <div className="text-sm mt-3 clamp-3">{post?.body}</div>
      </div>
      <img
        className="w-full rounded-b-lg object-cover "
        src={imgURL}
        alt="Picture of the author"
      />
    </div>
  );
};

export default PostXL;
