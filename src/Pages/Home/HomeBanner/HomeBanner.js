import React from "react";
import img1 from "../../../assets/images/banner/img1.jpg";
import img2 from "../../../assets/images/banner/img2.jpg";
import img3 from "../../../assets/images/banner/img3.jpg";
import img4 from "../../../assets/images/banner/img4.jpg";
import img5 from "../../../assets/images/banner/img5.jpg";
import BannerItem from "./BannerItem/BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";

const HomeBanner = () => {
  const bannerImg = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 1,
    },
  ];

  return (
    <>
      <div className="carousel w-full h-3/5"></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImg.map((slider) => (
          <SwiperSlide>
            <BannerItem slider={slider} key={slider.id}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeBanner;
