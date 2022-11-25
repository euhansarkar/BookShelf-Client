import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    const books = useLoaderData();
    const name = books[0].category_name.split(`_`).join(` `);
    console.log(name);
    return (
        <div className='my-6 text-center'>
            <h2 className='text-5xl font-semibold capitalize'>see your desire {name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
                {
                    books.map(book => <SingleProduct book={book} key={book._id}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;