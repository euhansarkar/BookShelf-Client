import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const WishLists = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const {
    data: wishlists,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [`wishlists`, email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/wishlists?email=${email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  

  if(isLoading){
    return `loading`
  }
  console.log(wishlists);

  return (
    <div>
      <h2 className="text-4xl my-6 text-center font-bold">your wishlists</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default WishLists;
