import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/404/404 error with person looking for-bro.svg'
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div >
        <Helmet>
        <title>not found - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
            <div className='flex flex-col items-center justify-center'>
                <img src={img} className="md:w-1/2 mt-10 md:h-1/2 mx-16" alt="" />
                <h2 className='text-4xl text-center font-semibold'> back to the<Link className='text-sky-400' to={`/`}> Home Page</Link></h2>
            </div>
        </div>
    );
};

export default NotFound;