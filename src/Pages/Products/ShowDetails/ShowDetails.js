import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
  const {
    author,
    category_name,
    description,
    img,
    isAdvertise,
    isPurchased,
    location,
    originalPrice,
    posted,
    resalePrice,
    seller_name,
    title,
    yearsOfUse,
    _id,
  } = useLoaderData();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/3 lg:h-96">
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Nike Air"
          />
        </div>
        <div className="w-full md:w-2/3 py-10">
          <div className="md:ml-40">
            <h1 className="text-gray-700 uppercase text-2xl lg:text-3xl mb-5">{title}</h1>
            <div className="mt-2">
                by <span className="font-semibold text-xl">{author}</span>
            </div>
            <div className="mt-2 flex flex-col">
            <h2 className="text-gray-600 capitalize font-bold text-xl">original price :  <span className="text-2xl font-bold text-yellow-600">
                ${originalPrice}
              </span></h2>
              <h2 className="text-gray-600 capitalize font-bold text-xl">previous price :  <span className="text-2xl font-bold text-sky-500">
                ${resalePrice}
              </span></h2>
            </div>
            <div className="mt-0">
                <span className="text-gray-600">location: {location}</span>
            </div>
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Quantity:
              </label>
              <input
                className="form-input rounded-md shadow-sm mt-1 block w-full"
                id="count"
                type="number"
                value="1"
              />
            </div>
            <div className="flex items-center mt-6">
              <button className="bg-purple-700 py-2 px-4 text-white rounded-md">
                Buy Now
              </button>
              <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-purple-200 focus:outline-none">
                Add to Cart
              </button>
            </div>
            <p className="text-gray-600 mt-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
