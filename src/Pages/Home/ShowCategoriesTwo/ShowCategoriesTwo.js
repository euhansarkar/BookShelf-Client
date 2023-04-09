import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct from "../../Products/SingleProduct";
import "swiper/css";
import { Link } from "react-router-dom";

const ShowCategoryTwo = () => {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    fetch(`https://products-resale-server.vercel.app/products/travel`)
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);

  const categoryName = booksData[0]?.category_name;

  return (
    <>
      <div className="flex items-center justify-between flex-wrap mx-8">
        <span className="font-bold text-3xl capitalize">travel books</span>
        {categoryName && <Link className="btn text-amber-400 " to={`/category/${categoryName}`}>see more</Link>}
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
        {booksData.map((book) => (
          <SwiperSlide className="mb-20 mt-6 px-8 md:px-0 md:mx-8" key={book._id}>
            <SingleProduct book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ShowCategoryTwo;
