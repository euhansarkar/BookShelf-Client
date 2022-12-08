import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import CategoryNames from "./CategoryNames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Category.css";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
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
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper px-10"
      >
        {categoryData.map((category) => (
          <SwiperSlide className="my-20">
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
