import React from "react";
import { Link } from "react-router-dom";

const CategoryNames = ({ category }) => {
  const { category_Name, category_id } = category;

  return (
    <div className="card w-full px-10 bg-sky-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{category_Name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/category/${category_id}`}><button className="btn bg-amber-400">show more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryNames;
