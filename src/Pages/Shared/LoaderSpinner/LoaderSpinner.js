import React from "react";
import { BallTriangle } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="flex flex-col w-full h-full mx-auto items-center justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
