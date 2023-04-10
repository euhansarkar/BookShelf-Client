import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductSummery = ({ details }) => {
  const {
    author,
    category_name,
    description,
    img,
    isAdvertise,
    isPurchased,
    location,
    originalPrice,
    posted,
    resalePrice,
    seller_name,
    title,
    yearsOfUse,
    _id,
  } = details;

  return (
    <div className="w-11/12 mb-12 mx-auto">
      <Tabs>
        <TabList>
          <Tab>summery</Tab>
          <Tab>specification</Tab>
        </TabList>

        <TabPanel>
          {description.split(`!!!`).map((des, index) => (
            <span key={index}>{des}</span>
          ))}
        </TabPanel>
        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Title</th>
                  <td>{title}</td>
                </tr>
                <tr>
                  <th>Author</th>
                  <td>{author}</td>
                </tr>

                <tr>
                  <th>Country</th>
                  <td>Bangladesh</td>
                </tr>

                <tr>
                  <th>Language</th>
                  <td>Bangla</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductSummery;
