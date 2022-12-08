import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBookingModal from './ProductBookingModal/ProductBookingModal';
import SingleProduct from './SingleProduct';

const Products = () => {
    const books = useLoaderData();
    const name = books[0].category_name.split(`_`).join(` `);
    const [chooseProduct, setChooseProduct] = useState(null);
    
    return (
        <div className='my-6 text-center'>
            <h2 className='text-5xl font-semibold capitalize'>see your desire {name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
                {
                    books.map(book => <SingleProduct book={book}
                        setChooseProduct={setChooseProduct} key={book._id}></SingleProduct>)
                }
            </div>
            {
                chooseProduct && 
                <ProductBookingModal chooseProduct={chooseProduct} setChooseProduct={setChooseProduct}></ProductBookingModal>
            }
        </div>
    );
};

export default Products;