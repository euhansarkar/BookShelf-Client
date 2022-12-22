import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleProduct from '../../Products/SingleProduct';

const AdvertisedProducts = () => {

    const {data: advertisedProducts, isLoading} = useQuery({
        queryKey: [`advertisedProducts`],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/advertiseproducts`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return `loading`;
    }

    console.log(advertisedProducts);

    return (
        <div>
            <h2 className='font-bold text-4xl md:text-5xl text-center capitalize'>featured products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-20">
                {
                    advertisedProducts.map(book => <SingleProduct book={book} key={book._id}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;