import React from "react";

const mySingleProduct = ({product, index, handleAdvertise, advertised, setDeletingProduct}) => {
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
        <button
          onClick={(e) => handleAdvertise(e.target)}
          className="btn btn-outline btn-sm btn-primary"
        >
          {advertised === true ? (
            <strong className="font-bold">turn off</strong>
          ) : (
            <strong className="font-bold">turn on</strong>
          )}
        </button>
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
