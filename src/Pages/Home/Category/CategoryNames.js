import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos";
const CategoryNames = ({ category }) => {
  const { category_Name, category_id } = category;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div
      data-aos="fade-up"
      className="card w-11/12 my-6 mx-auto px-4 bg-gray-300 shadow-xl"
    >
      <div className="card-body items-center">
        <Link className="" to={`/category/${category_id}`}>
          <h2 className="card-title font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">
            {category_Name}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNames;
