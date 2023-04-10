import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductSummery from "../ProductSummery/ProductSummery";

const ShowDetails = () => {
  const details = useLoaderData();
  const [count, setCount] = useState(0);
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
  } = details;

  return (
    <>
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/3 lg:h-96">
            <img
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src={img}
              alt={title}
            />
          </div>
          <div className="w-full md:w-2/3 py-10">
            <div className="md:ml-40">
              <h1 className="text-gray-700 uppercase text-2xl lg:text-3xl mb-5">
                {title}
              </h1>
              <div className="mt-2">
                by <span className="font-semibold text-xl">{author}</span>
              </div>
              <div className="mt-2 flex flex-col">
                <h2 className="text-gray-600 capitalize font-bold text-xl">
                  original price :{" "}
                  <span className="text-2xl font-bold text-yellow-600">
                    ${originalPrice}
                  </span>
                </h2>
                <h2 className="text-gray-600 capitalize font-bold text-xl">
                  previous price :{" "}
                  <span className="text-2xl font-bold text-sky-500">
                    ${resalePrice}
                  </span>
                </h2>
              </div>
              <div className="mt-0">
                <span className="text-gray-600">location: {location}</span>
              </div>
              <div className="mt-2 flex items-center gap-6">
                <button
                  className="btn btn-sm  bg-amber-500"
                  onClick={() => setCount(count + 1)}
                >
                  decrement
                </button>
                <h2 className="font-3xl">{count}</h2>
                <button
                  onClick={() => setCount(count - 1)}
                  className="btn btn-sm 
                bg-amber-500"
                >
                  decrement
                </button>
              </div>
              <div className="flex items-center mt-6">
                <button className="bg-purple-700 py-2 px-4 text-white rounded-md capitalize">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSummery details={details} />
    </>
  );
};

export default ShowDetails;
