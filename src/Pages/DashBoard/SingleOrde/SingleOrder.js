import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const SingleOrder = ({ order, index, setDeleteOrder }) => {
  const { _id, product_id, isPaid } = order;

  const { data: product = [] } = useQuery({
    queryKey: [`order`, product_id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${product_id}`);
      const data = await res.json();
      return data;
    },
  });

  const { title, resalePrice,} = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{resalePrice}</td>
      <td>{1}</td>
      <td>
        {(order.isPaid === false) ? (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-primary btn-sm">Pay</button>
          </Link>
        ) : (
          <span className="text-green-500 ml-4"><strong>Paid</strong></span>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteOrder(order)}
          htmlFor="ConfirmationModal"
          className="btn btn-xs btn-error"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default SingleOrder;
