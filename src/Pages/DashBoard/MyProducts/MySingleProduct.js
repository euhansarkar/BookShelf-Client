import React from "react";

const mySingleProduct = ({
  product,
  index,
  handleAdvertise,
  advertised,
  setDeletingProduct,
  handleAdvertiseFalse,
}) => {
  return (
    <tr key={product?._id}>
      <th>{index + 1}</th>
      <td>{product.title}</td>
      <td>{product.resalePrice}</td>
      <td>
        {product.isPurchased === false ? (
          <strong className="font-bold">not sold</strong>
        ) : (
          <strong className="font-bold">sold</strong>
        )}
      </td>
      <td>
        {product.isAdvertise !== false ? (
          <>
            <button
              onClick={() => handleAdvertiseFalse(product._id)}
              className="btn btn-outline btn-sm btn-primary"
            >
              advertise on
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleAdvertise(product._id)}
              className="btn btn-outline btn-sm btn-secondary"
            >
              advertise off
            </button>
          </>
        )}
      </td>
      <td>{product?.isPurchased}</td>
      <td>
        <label
          onClick={() => setDeletingProduct(product)}
          htmlFor="ConfirmationModal"
          className="btn btn-xs btn-error"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default mySingleProduct;
