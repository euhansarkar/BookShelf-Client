import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckOutForm = ({ product, orderData }) => {
  const [cardError, setCardError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [transectionId, setTransectionId] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { resalePrice } = product;
  const { displayName, email, _id } = orderData;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://products-resale-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
      },
      body: JSON.stringify({ price: resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log([`error`], error);
      setCardError(error.message);
    } else {
      setCardError(``);
    }

    setSuccess(``);
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log(paymentIntent);

    if (paymentIntent.status === `succeeded`) {
      setSuccess(`Congrats! your payment has been successful`);
      setTransectionId(`your transection number is : ${paymentIntent.id}`);

      const payment = {
        orderId: _id,
        biller_name: displayName,
        biller_email: email,
        billing_amount: resalePrice,
        transectionId: paymentIntent.id,
      };

      fetch(`https://products-resale-server.vercel.app/payments`, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          ;
          if(data.insertedId){
            toast.success(`your payment has been successfully completed`);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm my-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">
            {success} <br />
            <strong>{transectionId}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
