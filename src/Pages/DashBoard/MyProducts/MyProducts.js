import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const { data: products = [], refetch } = useQuery({
    queryKey: [`products`, user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}}`
      );
      const data = await res.json();
      return data;
    },
  });


  const closeModal = () => {
    setDeletingProduct(null);
  };

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: `DELETE`,
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0 ){
        toast.success(`product ${product.title} deleted successfully`)
        refetch();
      }
    })
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-4"> My Products </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Products Name</th>
              <th>Price</th>
              <th>Purchase Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product?._id}>
                <th>{index + 1}</th>
                <td>{product.title}</td>
                <td>{product.resalePrice}</td>
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
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          successButtonName={`delete`}
          title={`are you sure you want to delete?`}
          message={`if you delete ${deletingProduct?.title}. we cannot recover it.`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
