import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const {
    user: { displayName, email },
  } = useContext(AuthContext);
  const imgUploadKey = process.env.REACT_APP_IMGBB_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const {
      category_name,
      title,
      location,
      originalPrice,
      resalePrice,
      yearsOfUse,
      author,
      name,
      seller_name,
      seller_email,
      description,
      img,
    } = data;
    const image = data.img[0];

    const formData = new FormData();
    formData.append(`image`, image);
    const url = `https://api.imgbb.com/1/upload?&key=${imgUploadKey}`;
    fetch(url, {
      method: `POST`,
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const uploadedImg = imgData.data.url;

          const newProduct = {
            category_name,
            title,
            author,
            location,
            originalPrice: parseFloat(originalPrice),
            resalePrice: parseFloat(resalePrice),
            yearsOfUse,
            posted: new Date(),
            seller_name,
            seller_email,
            description,
            img: uploadedImg,
            isAdvertise: false,
            isPurchased: false,
            isReported: false,
          };

          fetch(`http://localhost:5000/products`, {
            method: `POST`,
            headers: {
              "Content-Type": `application/json`,
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((productsData) => {
              if (productsData.acknowledged) {
                toast.success(`new product uploaded successfully`);
                navigate(`/dashboard/myproducts`);
              }
            });
        }
      });
  };

  const { data: categoryName, isLoading } = useQuery({
    queryKey: [`category`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <h2 className="text-5xl font-bold">this is add product page</h2>
      <form
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 space-x-3 mt-8"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">select book category:</span>
          </label>
          <select
            {...register("category_name", {
              required: `book name is required`,
            })}
            className="select select-bordered w-full max-w-xs"
            type="text"
          >
            {categoryName.map((name) => (
              <option selected value={name?.category_id} key={name?._id}>
                {name?.category_Name}
              </option>
            ))}
          </select>
          <input />
          {errors?.category_name && (
            <p className="text-red-400">{errors?.category_name?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            {...register("title", {
              required: `book name is required`,
            })}
            type="text"
            placeholder="Book Name"
            className="input input-bordered w-full"
          />
          {errors?.title && (
            <p className="text-red-400">{errors?.title?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input
            {...register("author")}
            type="text"
            placeholder="Your Full Name"
            className="input input-bordered w-full"
          />
          {errors?.author && (
            <p className="text-red-400">{errors?.author?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Location</span>
          </label>
          <input
            {...register("location", {
              required: `your location is required`,
            })}
            type="text"
            placeholder="Your Location"
            className="input input-bordered w-full"
          />
          {errors?.location && (
            <p className="text-red-400">{errors?.location?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            {...register("originalPrice", {
              required: `your name is required`,
            })}
            type="text"
            placeholder="Original Price"
            className="input input-bordered w-full"
          />
          {errors?.originalPrice && (
            <p className="text-red-400">{errors?.originalPrice?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            {...register("resalePrice", {
              required: `Resale Price`,
            })}
            type="text"
            placeholder="Resale Price"
            className="input input-bordered w-full"
          />
          {errors?.resalePrice && (
            <p className="text-red-400">{errors?.resalePrice?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Original buying date</span>
          </label>
          <input
            {...register("yearsOfUse", {
              required: `Years of use required`,
            })}
            type="date"
            placeholder="Year Of Use"
            className="input input-bordered w-full"
          />
          {errors?.yearsOfUse && (
            <p className="text-red-400">{errors?.yearsOfUse?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            {...register("seller_name")}
            type="text"
            defaultValue={displayName}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            {...register("seller_email")}
            type="email"
            defaultValue={email}
            disabled
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full grid-flow-[2]">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            {...register("description", {
              required: `Product Description is required`,
            })}
            type="text"
            placeholder="write something about your product"
            className="input input-bordered w-full"
          />
          {errors?.description && (
            <p className="text-red-400">{errors.description?.message}</p>
          )}
        </div>

        <div className="form-control w-full grid-flow-[2]">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            {...register("img", {
              required: `product image is required`,
            })}
            type="file"
            placeholder="write something about your product"
            className="input input-bordered w-full"
          />
          {errors?.img && <p className="text-red-400">{errors.img?.message}</p>}
        </div>

        <div className="items-center mt-8 flex flex-col justify-center">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-primary w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
