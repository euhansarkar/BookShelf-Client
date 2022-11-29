import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SingleOrder from "../DashBoard/SingleOrde/SingleOrder";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";

const MyOrders = () => {
  const {
    user: { email },
  } = useContext(AuthContext);
  const [deleteOrder, setDeleteOrder] = useState(null);

  const { data: orders, isLoading, refetch } = useQuery({
    queryKey: [`orders`, email],
    queryFn: async () => {
      const res = await fetch(`https://products-resale-server-euhansarkar.vercel.app/orders?email=${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  const closeModal = () => {
    setDeleteOrder(null);
  };


  const handleDeleteOrder = (order) => {
    fetch(`https://products-resale-server-euhansarkar.vercel.app/orders/${order._id}`, {
      method: `DELETE`,
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0 ){
        toast.success(`product ${order.title} deleted successfully`)
        refetch();
      }
    })
  };
    

  return (
    <>
      <div>
        <h2 className="my-5 font-semibold text-4xl text-center">my orders</h2>
        <div className="overflow-x-auto">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Quantity</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <SingleOrder
                    setDeleteOrder={setDeleteOrder}
                    order={order}
                    key={order._id}
                    index={index}
                  ></SingleOrder>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {deleteOrder && (
          <ConfirmationModal
          successAction={handleDeleteOrder}
          modalData={deleteOrder}
          closeModal={closeModal}
          successButtonName={`delete`}
          message={`if you delete we cannot recover the data`}
            title={`are you sure you want to delete?`}
          ></ConfirmationModal>
        )}
      </div>
    </>
  );
};

export default MyOrders;
