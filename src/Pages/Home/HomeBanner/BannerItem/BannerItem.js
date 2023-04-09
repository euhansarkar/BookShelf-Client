import React from "react";
import './BannerItem.css'
import bannerVid from '../../../../assets/video/pexels-pixabay-854533-3840x2160-50fps.mp4'

const BannerItem = ({slider}) => {
    const {image, id} = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="max-w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-white capitalize">
          welcome!<br />
          to most reuseable <br />
          <span className="text-red-400">book shop</span>
        </h1>
      </div>
      <div className="absolute w-44 flex justify-center transform -translate-y-1/2 right-20 top-2/4">
        <h1 className=" text-3xl hidden md:block md:text-4xl lg:text-6xl font-bold text-sky-600 capitalize">
          Our Winter!<br />
          offer sale is started <br />
          <span className="text-red-400"><button className="btn btn-outline">get winter offers</button></span>
        </h1>
      </div>
      <div className="absolute hidden lg:block justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn  btn-warning mr-5">buy now</button>
      </div>
    </div>
    
    // <div className="w-full h-full">
    //   <video className="w-full h-full object-cover" loop muted autoPlay src={bannerVid}></video>
    //   <div className="w-full h-full absolute top-0 flex justify-center items-center flex-col">
    //     <h1 className="font-bold drop-shadow-2xl text-7xl text-yellow-500 text-shadow-xl shadow-gray-700 capitalize">welcome to BookShelf</h1>
    //     <p className="text-center w-1/3 font-bold text-xl text-white text-shadow-md drop-shadow-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus excepturi quisquam eum quam nesciunt ab nulla culpa magnam cupiditate?</p>
    //   </div>
    // </div>

  );
};

export default BannerItem;
