import React from 'react';
import Category from '../Category/Category';
import HomeBanner from '../HomeBanner/HomeBanner';
import Asked from './Asked/Asked';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Category></Category>
            <Asked></Asked>
        </div>
    );
};

export default Home;

