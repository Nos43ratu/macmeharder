import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import AppMd from "./AppMD";
import { NodePerElements } from "../../utils/ArrayWithNodes";
import {
  AppsNode,
  ImagesNode,
} from "../../pages/discover/GetAppsList.generated";
const Apps = () => {
  return <div></div>;
};
const lg = () => {
  return <></>;
};
type appsMdType = {
  data: AppsNode[];
};
const md = ({ data }: appsMdType) => {
  let AppsNode = NodePerElements(data, 3);
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return AppsNode ? (
    <>
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
        {AppsNode.map((e: AppsNode[], i: number) => (
          <SwiperSlide key={i}>
            {e[0] && <AppMd data={e[0]} withBorder={false} />}
            {e[1] && <AppMd data={e[1]} />}
            {e[2] && <AppMd data={e[2]} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  ) : (
    <div>cannot load</div>
  );
};
type appsImgPreview = {
  data: ImagesNode[];
};
const imgPreview = ({ data }: appsImgPreview) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  if (data.length === 0 || !data) {
    return <div></div>;
  }
  return (
    <>
      <Swiper spaceBetween={20} slidesPerView={2} navigation loop={true}>
        {data.map((e) => (
          <SwiperSlide key={e.id}>
            <img
              src={(process.env.NEXT_PUBLIC_APP_URI || "") + (e.url || "")}
              className="h-96 w-full rounded-md object-contain "
              alt="post"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
Apps.lg = lg;
Apps.md = md;
Apps.imgPreview = imgPreview;

export default Apps;
