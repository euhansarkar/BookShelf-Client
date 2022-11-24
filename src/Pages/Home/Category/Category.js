import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import CategoryNames from './CategoryNames';

const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch(`category.json`)
        .then(res => res.json())
        .then(data => setCategoryData(data));
    }, [])
    return (
        <div className='mt-16'>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16 my-12'>
            {
                categoryData.map(category => <CategoryNames key={category.category_id} category={category}></CategoryNames>)
            }
            </div>
            
        </div>
    );
};

export default Category;