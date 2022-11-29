import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTimesCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle } from 'react-icons/fa';

const SingleProduct = ({ book, setChooseProduct }) => {
  const { user } = useContext(AuthContext);

  const {
    category_name,
    description,
    img,
    location,
    originalPrice,
    posted,
    seller_name,
    title,
    yearsOfUse,
    resalePrice,
    seller_email,
    _id,
    author,
    isReported
  } = book;


  const {data: seller = []} = useQuery({
    queryKey: [`seller`, seller_email],
    queryFn: async() => {
      const res = await fetch(`https://products-resale-server.vercel.app/userbyEmail/${seller_email}`);
      const data = await res.json();
      return data;
    }
  })

  console.log(seller);


  const usedDays = (yearsOfUse) => {
    const milliSeconds = new Date().getTime() - new Date(yearsOfUse).getTime();
    return parseInt(milliSeconds / (24 * 60 * 60 * 1000));
  };

  const wishlist = {
    productId: _id,
    wishLister: user?.email,
  };

  const handleWishList = () => {
    fetch(`https://products-resale-server.vercel.app/wishlists`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${title} book is successfully added to your wishlist`);
        }
      });
  };


  const handleReportToAdmin = id => {
    fetch(`https://products-resale-server.vercel.app/products/${id}`, {
      method: `PUT`
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success(`your report has submitted successfully to the admin!`);
      }
    })
  }

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Seller : {seller_name}
              {/* {
                seller.isApproved && <FaCheckCircle className="text-sky-400"/>
              } */}
            </Link>
            <span className="text-xs dark:text-gray-400">
              published date: {posted.slice(0, 10)}
            </span>
          </div>
          <div className="flex flex-col pl-16">
            <div className="badge badge-secondary">from {location}</div>
            <span className="text-xs dark:text-gray-400">
              book used {usedDays(yearsOfUse)} days
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <img
          src={img}
          alt=""
          className="h-60 w-full mb-2 object-contain sm:h-60 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {title.length > 50 ? title.slice(0, 50) : title}
        </h2>
        <p className="text-sm dark:text-gray-400">Author: {author}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <button
            aria-label="Share this post"
            type="button"
            className="pb-3 text-start font-xl"
          >
            Original Price: <strong>${originalPrice}</strong> <br />
            Resale Price: <strong>${resalePrice}</strong>
          </button>
          <button
            aria-label="Bookmark this post"
            type="button"
            className="p-2"
          ></button>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-400">
          <label
            onClick={() => setChooseProduct(book)}
            className="btn w-full btn-primary"
            htmlFor="productBookingModal"
          >
            book now to buy
          </label>
        </div>
        <div className="btn-group w-full btn-group-vertical lg:btn-group-horizontal">
          <button
            onClick={() => handleWishList(_id)}
            className="btn ml-16 btn-primary"
          >
            <FaHeart className="text-error mx-1" />
            add to wishlist
          </button>
          <button onClick={() => handleReportToAdmin(_id)} className="btn">
            <FaTimesCircle className="text-warning mx-1" /> report to admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
