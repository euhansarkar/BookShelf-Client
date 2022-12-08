import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import MySingleProduct from "./MySingleProduct";

const MyProducts = () => {
  const [advertised, setAdvertised] = useState(false);
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);
  
  const { data: products = [], refetch } = useQuery({
    queryKey: [`products`, user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/productsme?email=${user?.email}}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: `DELETE`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`product ${product.title} deleted successfully`);
          refetch();
        }
      });
  };

  const handleAdvertise = (id) => {
    if (id) {
      setAdvertised(!advertised);
    }
    fetch(``);
  };

  console.log(advertised);

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
              <th>Advertise Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MySingleProduct
                product={product}
                key={product._id}
                handleAdvertise={handleAdvertise}
                advertised={advertised}
                index={index}
                setDeletingProduct={setDeletingProduct}
              ></MySingleProduct>
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
