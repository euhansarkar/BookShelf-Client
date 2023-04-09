import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
      {categoryData.map((category) => (
        <CategoryNames category={category} key={category._id}></CategoryNames>
      ))}
    </div>
  );
};

export default Category;
