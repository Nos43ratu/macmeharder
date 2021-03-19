import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { PostNode, useGetPostListQuery } from "../../../generated/graphql";
import Loading from "../../FetchingStates/Loading";
import PostMD from "../PostMd/PostMD";
import PostLg from "./PostLG";
type Props = {
  category: number;
};
const PostLgNode = ({ category }: Props) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const { data, loading, error } = useGetPostListQuery({
    variables: {
      category,
    },
  });
  if (error) {
    return <div>ERROR</div>;
  }
  return (
    <div className="h-90">
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data?.postList &&
            data?.postList.map((e) => (
              <SwiperSlide key={e?.id}>
                <div key={e?.id}>
                  <PostLg data={e as PostNode} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default PostLgNode;
