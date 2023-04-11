import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductBookingModal from "../../Products/ProductBookingModal/ProductBookingModal";
import SingleProduct from "../../Products/SingleProduct";
import { Helmet } from "react-helmet";

const Freatured = () => {
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
    <div className="my-6 text-center">
    <Helmet>
        <title>featured - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h2 className="text-5xl font-semibold capitalize">
        see your desire Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-20 mx-8">
        {advertisedProducts.map((book) => (
          <SingleProduct
            book={book}
            setChooseProduct={setChooseProduct}
            chooseProduct={chooseProduct}
            key={book._id}
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

export default Freatured;
