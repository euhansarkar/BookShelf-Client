import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

console.log(stripePromise);
const Payment = () => {
  const orderData = useLoaderData();

  const { data: product = [] } = useQuery({
    queryKey: [`order`, orderData?.product_id],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/${orderData?.product_id}`
      );
      const data = await res.json();
      return data;
    },

  });



  return (
    <div>
      <h2 className="my-5 font-bold text-primary text-3xl text-center">
        payment for {product.title}
      </h2>
      <p className="text-2xl text-center">
        please pay <strong>${product?.resalePrice}</strong> to purchase the
        product
      </p>
      <div className="w-80 mx-20 my-20">
        <Elements stripe={stripePromise}>
          <CheckOutForm product={product}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
