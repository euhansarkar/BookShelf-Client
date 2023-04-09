import React, { useContext } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const SingleProduct = ({ book, setChooseProduct, chooseProduct }) => {
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
    isReported,
  } = book;

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
        if (data.acknowledged) {
          toast.success(`${title} book is successfully added to your wishlist`);
        }
      });
  };

  const handleReportToAdmin = (id) => {
    fetch(`https://products-resale-server.vercel.app/products/${id}`, {
      method: `PUT`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`your report has submitted successfully to the admin!`);
        }
      });
  };

  return (
    <>
      <div className="w-full h-fit bg-slate-300 rounded-md">
        <div className=" group">
          <div className="text-center flex flex-col w-full h-80 overflow-hidden shadow-md rounded-lg  relative">
            <div className="items-center">
              <div className="flex items-center px-5 justify-center mb-2">
                <img
                  src={img}
                  alt={title}
                  className="h-48 w-30 object-top pt-6"
                />
              </div>
              <h2 className="mb-1 text-md px-3 font-bold">
                {title.length > 50 ? title.slice(0, 50) : title}
              </h2>
              <p className="text-sm ">{author}</p>
              <p>
                <strong>price: ${resalePrice}.00</strong>
              </p>
            </div>
            <div className="absolute h-3/5 w-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white text-red-700 p-2 rounded-full mx-2 hover:bg-red-700 hover:text-white">
                <FaRegHeart
                  onClick={() => handleWishList(_id)}
                  className="add-wishlist text-2xl cursor-pointer"
                  data-tooltip-content="add to wishlist"
                />
              </div>
              <div className="bg-white text-gray-800 p-2 rounded-full mx-2 hover:bg-gray-400 hover:text-white">
                <Link to={`/products/${_id}`}>
                  <FaRegEye className="see-now cursor-pointer text-2xl" data-tooltip-content="see details now" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-full mx-2 hover:bg-gray-400">
                <label
                  htmlFor="productBookingModal"
                  onClick={() => setChooseProduct(book)}
                >
                  <RiShoppingCartLine
                    data-tooltip-content="add to cart"
                    className="text-gray-800 cursor-pointer text-2xl add-cart"
                  />
                </label>
              </div>
              <div className="bg-white p-2 rounded-full mx-2 hover:bg-gray-400">
                <MdReport
                  data-tooltip-content="report now"
                  onClick={() => handleReportToAdmin(_id)}
                  className="text-gray-800 text-2xl report-now cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip anchorSelect=".add-wishlist"/>
      <Tooltip anchorSelect=".see-now"/>
      <Tooltip anchorSelect=".add-cart"/>
      <Tooltip anchorSelect=".report-now"/>
    </>
  );
};

export default SingleProduct;
