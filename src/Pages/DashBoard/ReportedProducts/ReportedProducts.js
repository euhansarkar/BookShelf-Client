import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import ReportedItem from "./ReportedItem";
import { Helmet } from "react-helmet";
import LoaderSpinner from "../../Shared/LoaderSpinner/LoaderSpinner";

const ReportedProducts = () => {
  const [deleteReportedProduct, setDeleteReportedProduct] = useState(null);
  const { data: reporteditems, isLoading, refetch } = useQuery({
    queryKey: [`reporteditems`],
    queryFn: async () => {
      const res = await fetch(`https://products-resale-server.vercel.app/reportedproducts`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoaderSpinner/>;
  }

  const closeModal = () => {
    setDeleteReportedProduct(null);
  };

  const handleDeleteReportedProduct = (order) => {
    fetch(`https://products-resale-server.vercel.app/products/${order._id}`, {
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
    <div>
    <Helmet>
        <title>reported products - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h2 className="text-4xl my-6 font-bold text-center">
        all reported products
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Book Name</th>
              <th>Seller</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {reporteditems.map((report, index) => (
              <ReportedItem
                setDeleteReportedProduct={setDeleteReportedProduct}
                key={report._id}
                report={report}
                index={index}
              ></ReportedItem>
            ))}
          </tbody>
        </table>
      </div>
      {deleteReportedProduct && (
        <ConfirmationModal
          successAction={handleDeleteReportedProduct}
          modalData={deleteReportedProduct}
          closeModal={closeModal}
          successButtonName={`delete`}
          message={`if you delete we cannot recover the data`}
          title={`are you sure you want to delete?`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ReportedProducts;
