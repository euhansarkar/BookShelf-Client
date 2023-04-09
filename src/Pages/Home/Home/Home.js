import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Category from "../Category/Category";
import HomeBanner from "../HomeBanner/HomeBanner";
import Asked from "../Asked/Asked";
import Devlivery from "../Dalivery/Devlivery";
import { Helmet } from "react-helmet";
import ShowCategoryOne from "../ShowCategoryOne/ShowCategoryOne";
import ShowCategoryTwo from "../ShowCategoriesTwo/ShowCategoriesTwo";
import ShowCategoryThree from "../ShowCategoryThree/ShowCategoryThree";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>home - BookShelf</title>
      </Helmet>

      <HomeBanner></HomeBanner>
      <Category></Category>
      <AdvertisedProducts></AdvertisedProducts>
      <ShowCategoryOne/>
      <ShowCategoryTwo/>
      <ShowCategoryThree/>
      <Asked />
      <Devlivery />
    </div>
  );
};

export default Home;
