import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductSummery from "../ProductSummery/ProductSummery";
import Modal from "react-modal";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ShowDetails = () => {
  const details = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const {user} = useContext(AuthContext);
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  const handleProductBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
        displayName: user?.displayName,
        email: user?.email,
        buyer_phone: phone,
        buyer_location: location,
        order_date: new Date(),
        product_id: _id,
        isPaid: false,
    }

    fetch(`https://products-resale-server.vercel.app/orders`, {
        method: `POST`,
        headers: {
            "Content-Type": `application/json`
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            setIsOpen(false);
            toast.success(`${title} is successfully on your cartlist!`)
        }
    })

  };

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
              <div className="mt-2 flex items-center flex-wrap gap-6">
                <button
                  className="btn btn-sm  bg-amber-500"
                  onClick={() => setCount(count + 1)}
                >
                  decrement
                </button>
                <h2 className="font-3xl px-4 border border-amber-400">
                  {count}
                </h2>
                <button
                  onClick={() => setCount(count - 1)}
                  className="btn btn-sm 
                bg-amber-500"
                >
                  decrement
                </button>
              </div>
              <div className="flex items-center mt-6 relative">
                <button
                  onClick={openModal}
                  className="bg-purple-700 py-2 px-4 text-white rounded-md capitalize"
                >
                  add to cart
                </button>
                <Modal
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  className="absolute top-1/4 left-1/2 w-1/3 h-1/2 bg-white"
                >
                  <form onSubmit={handleProductBooking} className="mt-6">
                    <input
                      type="text"
                      defaultValue={title}
                      disabled
                      className="input  w-full input-bordered my-2"
                    />
                    <input
                      type="text"
                      defaultValue={resalePrice}
                      disabled
                      className="input w-full input-bordered my-2"
                    />
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                      className="input w-full input-bordered my-2"
                    />
                    <input
                      type="text"
                      defaultValue={user?.email}
                      disabled
                      className="input w-full input-bordered my-2"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="your phone number"
                      className="input w-full input-bordered my-2"
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="your meeting location"
                      className="input w-full input-bordered my-2"
                    />
                    <br />
                    <input
                      type="submit"
                      value="submit"
                      className="btn btn-accent w-full mt-4"
                    />
                  </form>
                  <button onClick={closeModal}>close</button>
                </Modal>
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
