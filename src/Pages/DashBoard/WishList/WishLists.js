import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import WishListItem from "./WishListItem";

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
        `https://products-resale-server-euhansarkar.vercel.app/wishlists?email=${email}`,
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

  if (isLoading) {
    return `loading`;
  }

  return (
    <div>
      <h2 className="text-4xl my-6 text-center font-bold">your wishlists</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Book Name</th>
              <th>location</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {wishlists.map((wish, index) => <WishListItem wish={wish} index={index}></WishListItem>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishLists;
