import React from "react";
import './BannerItem.css'

const BannerItem = ({slider}) => {
    const {image, id, prev, next} = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="max-w-full rounded-lg" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-white capitalize">
          welcome!<br />
          to most reuseable <br />
          <span className="text-red-400">book shop</span>
        </h1>
      </div>
      <div className="absolute w-44 flex justify-center transform -translate-y-1/2 right-20 top-2/4">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-sky-600 capitalize">
          Our Winter!<br />
          offer sale is started <br />
          <span className="text-red-400"><button className="btn btn-outline">get winter offers</button></span>
        </h1>
      </div>
      <div className="absolute hidden lg:block flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-error btn-warning mr-5">buy now</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
