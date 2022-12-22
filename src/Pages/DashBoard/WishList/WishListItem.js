import { useQuery } from "@tanstack/react-query";
import React from "react";

const WishListItem = ({ wish: { productId }, index }) => {
  
    const { data: wishlist = [] } = useQuery({
    queryKey: [`wishlist`, productId],
    queryFn: async () => {
      const res = await fetch(`https://products-resale-server.vercel.app/products/${productId}`);
      const data = await res.json();
      return data;
    },
  });
  const {title, location, } = wishlist;
  console.log(wishlist);

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{location}</td>
      <td><button className="btn btn-secondary btn-outline btn-sm">buy now</button></td>
    </tr>
  );
};

export default WishListItem;
