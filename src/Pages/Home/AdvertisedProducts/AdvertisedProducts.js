import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleProduct from "../../Products/SingleProduct";
import { useState } from "react";
import ProductBookingModal from "../../Products/ProductBookingModal/ProductBookingModal";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

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
    <>
      <div className="flex items-center justify-between flex-wrap mx-8">
        <span className="font-bold text-3xl capitalize">comic books</span>
        <Link className="btn text-amber-400 " to={`/featured`}>
          see more
        </Link>
      </div>
      <Swiper
        breakpoints={{
          540: {
            width: 540,
            slidesPerView: 1,
          },
          668: {
            width: 668,
            slidesPerView: 3,
          },
          1020: {
            width: 1020,
            slidesPerView: 4,
          },
          1200: {
            width: 1200,
            slidesPerView: 5,
          },
        }}
        navigation={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {advertisedProducts.map((book) => (
          <SwiperSlide
            className="mb-20 mt-6 px-8 md:px-0 md:mx-8"
            key={book._id}
          >
            <SingleProduct
              book={book}
              chooseProduct={chooseProduct}
              setChooseProduct={setChooseProduct}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {chooseProduct && (
        <ProductBookingModal
          chooseProduct={chooseProduct}
          setChooseProduct={setChooseProduct}
        ></ProductBookingModal>
      )}
    </>
  );
};

export default AdvertisedProducts;
