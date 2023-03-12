import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';
import Asked from './Asked/Asked';

const Home = () => {
    return (
        <div >
            <HomeBanner></HomeBanner>
            <Category></Category>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;

