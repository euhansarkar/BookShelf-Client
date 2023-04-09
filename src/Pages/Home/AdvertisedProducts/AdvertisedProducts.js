import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleProduct from "../../Products/SingleProduct";
import { useState } from "react";
import ProductBookingModal from "../../Products/ProductBookingModal/ProductBookingModal";

const AdvertisedProducts = () => {
  const [chooseProduct, setChooseProduct] = useState(null);

  const { data: advertisedProducts, isLoading } = useQuery({
    queryKey: [`advertisedProducts`],
    queryFn: async () => {
      const res = await fetch(
        `https://products-resale-server.vercel.app/advertiseproducts`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return `loading`;
  }

  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl text-center capitalize">
        featured products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-12 w-11/12 mx-auto">
        {advertisedProducts.map((book) => (
          <SingleProduct
            book={book}
            key={book._id}
            setChooseProduct={setChooseProduct}
          ></SingleProduct>
        ))}
      </div>
      {chooseProduct && (
        <ProductBookingModal
          chooseProduct={chooseProduct}
          setChooseProduct={setChooseProduct}
        ></ProductBookingModal>
      )}
    </div>
  );
};

export default AdvertisedProducts;
