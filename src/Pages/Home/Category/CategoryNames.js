import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// aos
import AOS from "aos";
import "aos/dist/aos";
const CategoryNames = ({ category }) => {
  const { category_Name, category_id } = category;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <SwiperSlide>
      <div
        data-aos="fade-up"
        className="card w-11/12 mx-auto px-4 bg-gray-800 shadow-xl"
      >
        <div className="card-body items-center">
          <h2 className="card-title text-center">{category_Name}</h2>
          <div className="card-actions justify-end">
            <Link to={`/category/${category_id}`}>
              <button className="btn btn-warning btn-sm btn-outline">
                show more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default CategoryNames;
