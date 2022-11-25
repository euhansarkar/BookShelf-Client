import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SingleOrder from "../DashBoard/SingleOrde/SingleOrder";

const MyOrders = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const { data: orders, isLoading } = useQuery({
    queryKey: [`orders`, email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders?email=${email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }


  return (
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
              {orders.map((order) => <SingleOrder order={order} key={order._id}></SingleOrder>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
