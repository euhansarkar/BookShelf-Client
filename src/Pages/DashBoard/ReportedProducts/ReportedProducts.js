import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReportedItem from "./ReportedItem";

const ReportedProducts = () => {
  const { data: reporteditems, isLoading } = useQuery({
    queryKey: [`reporteditems`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reportedproducts`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return `loading`;
  }

  return (
    <div>
      <h2 className="text-4xl my-6 font-bold text-center">
        all reported products
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>{reporteditems.map((report) => <ReportedItem></ReportedItem>)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedProducts;
