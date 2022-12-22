import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Category.css";
import CategoryNames from "./CategoryNames";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`https://products-resale-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <>
      <Swiper 
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categoryData.map((category) => (
          <SwiperSlide className="my-20 lg:mx-8">
            <CategoryNames
              category={category}
              key={category._id}
            ></CategoryNames>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
