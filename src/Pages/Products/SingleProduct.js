import React, { useContext } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

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
    isReported,
  } = book;

  console.log(typeof posted);
  // const {data: seller = []} = useQuery({
  //   queryKey: [`seller`, seller_email],
  //   queryFn: async() => {
  //     const res = await fetch(`https://products-resale-server.vercel.app/userbyEmail/${seller_email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })

  // console.log(seller);

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

  const handleReportToAdmin = (id) => {
    fetch(`https://products-resale-server.vercel.app/products/${id}`, {
      method: `PUT`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`your report has submitted successfully to the admin!`);
        }
      });
  };

  return (
    <div className="w-full h-fit">
      <div className=" group">
        <div className="text-center flex flex-col w-72 h-80 overflow-hidden shadow-md rounded-lg  relative">
          <div className="items-center">
            <div className="flex items-center justify-center mb-2">
              <img src={img} alt="" className="h-48 w-30 object-top" />
            </div>
            <h2 className="mb-1 text-xl font-semibold">
              {title.length > 50 ? title.slice(0, 50) : title}
            </h2>
            <p className="text-sm ">{author}</p>
            <p className="text-sm font-semibold mt-1">
              added on {posted.length > 12 ? posted.slice(0, 12) : posted}
            </p>

            <p>
              <strong>${resalePrice}.00</strong>
            </p>
          </div>
          <div className="absolute h-1/2 w-full bg-black/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white text-red-700 p-2 rounded-full mx-2 hover:bg-red-700 hover:text-white">
              <FaRegHeart
                onClick={() => handleWishList(_id)}
                className=" text-2xl "
              />
            </div>
            <div className="bg-white text-gray-800 p-2 rounded-full mx-2 hover:bg-gray-400 hover:text-white">
              <FaRegEye className="text-2xl" />
            </div>
            <div className="bg-white p-2 rounded-full mx-2 hover:bg-gray-400">
              <label
                htmlFor="productBookingModal"
                onClick={() => setChooseProduct(book)}
              >
              <RiShoppingCartLine className="text-gray-800 text-2xl" />
              </label>
            </div>
            <div className="bg-white p-2 rounded-full mx-2 hover:bg-gray-400">
              <MdReport
                onClick={() => handleReportToAdmin(_id)}
                className="text-gray-800 text-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
