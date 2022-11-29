import React from "react";

const ReportedItem = ({ report, setDeleteReportedProduct, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{report.title}</td>
      <td>{report.seller_name}</td>
      <td>
        <label
          onClick={() => setDeleteReportedProduct(report)}
          htmlFor="ConfirmationModal"
          className="btn btn-xs btn-error"
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default ReportedItem;
