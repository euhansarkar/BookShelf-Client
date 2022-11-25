import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ProductBookingModal = ({ chooseProduct, setChooseProduct }) => {

  const { category_name,
    description,
    img,
    location: sellerLocation,
    originalPrice,
    posted,
    price,
    sellerName,
    title,
    yearsOfUse,
    resalePrice,
    _id } = chooseProduct;
  const { user } = useContext(AuthContext);
  const {displayName, email} = user;


  const handleProductBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
        displayName,
        email,
        buyer_phone: phone,
        buyer_location: location,
        order_date: new Date(),
        product_id: _id,
    }

    fetch(`http://localhost:5000/orders`, {
        method: `POST`,
        headers: {
            "Content-Type": `application/json`
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            setChooseProduct(null);
            toast.success(`${title} is successfully on your cartlist!`)
        }
    })

  };

  return (
    <div className="text-black">
      <input
        type="checkbox"
        id="productBookingModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="productBookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{chooseProduct.title}</h3>
          <form onSubmit={handleProductBooking} className="mt-6">
            <input
              type="text"
              defaultValue={title}
              disabled
              className="input w-full input-bordered my-2"
            />
            <input
              type="text"
              defaultValue={price}
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
        </div>
      </div>
    </div>
  );
};

export default ProductBookingModal;
