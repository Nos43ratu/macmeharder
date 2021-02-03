import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import PostMD from "./PostMD";
import { PostNode, useGetPostListQuery } from "../../../generated/graphql";
import Loading from "../../FetchingStates/Loading";
type Props = {
  category: number;
};
const PostMdNode = ({ category }: Props) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const { data, loading, error } = useGetPostListQuery({
    variables: {
      category,
    },
  });
  if (error) {
    return <div>ERROR</div>;
  }
  if (loading || !data?.postList) {
    return <Loading />;
  }
  return data ? (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.postList &&
          data.postList.map((e) => (
            <SwiperSlide key={e?.id}>
              <div key={e?.id}>
                <PostMD data={e as PostNode} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  ) : (
    <div>cannot load</div>
  );
};

export default PostMdNode;
