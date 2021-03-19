import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  useGetAppsListQuery,
  AppsNode,
  PostNode,
} from "../../../generated/graphql";
import { NodePerElements } from "../../../utils/ArrayWithNodes";
import AppMd from "./AppMD";
import Loading from "../../FetchingStates/Loading";

type Props = {
  data: AppsNode[];
};

const AppsMdNode = ({ data }: Props) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="h-48">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {NodePerElements(data, 3).map((e: AppsNode[], i: number) => (
          <SwiperSlide key={i}>
            {e[0] && <AppMd data={e[0]} withBorder={false} />}
            {e[1] && <AppMd data={e[1]} />}
            {e[2] && <AppMd data={e[2]} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppsMdNode;
