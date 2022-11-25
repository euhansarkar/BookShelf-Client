import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductBookingModal from "./ProductBookingModal/ProductBookingModal";

const SingleProduct = ({ book, setChooseProduct }) => {
  const {
    category_name,
    description,
    img,
    location,
    originalPrice,
    posted,
    price,
    sellerName,
    title,
    yearsOfUse,
    resalePrice,
    _id
  } = book;
  console.log(book);



  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between space-x-4">
        <div className="flex flex-col space-y-1">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
          {sellerName}
          </Link>
          <span className="text-xs dark:text-gray-400">{posted}</span>
        </div>
        <div>
          
        </div>
      </div>
      <div>
        <img
          src={img}
          alt=""
          className="object-cover w-full mb-4 h-60 md:h-52 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {title.length > 50 ? title.slice(0, 50) : title}
        </h2>
        <p className="text-sm dark:text-gray-400">
          {description.length > 100 ? description.slice(0, 100).concat(`......`) : description}
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            Original Price: <strong>${originalPrice}</strong> <br />
            Resale Price: <strong>${price}</strong>
          </button>
          <button aria-label="Bookmark this post" type="button" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current dark:text-violet-400"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-400">
          <label onClick={() => setChooseProduct(book)} className="btn btn-primary" htmlFor="productBookingModal">book now</label>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
