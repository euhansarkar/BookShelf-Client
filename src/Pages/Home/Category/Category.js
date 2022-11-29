import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import CategoryNames from "./CategoryNames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(`https://products-resale-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <>
      <div className="mt-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categoryData.map((category) => (
            <SwiperSlide className="my-10">
              <CategoryNames category={category} key={category._id}></CategoryNames>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
