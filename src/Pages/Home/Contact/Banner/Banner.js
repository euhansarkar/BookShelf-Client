import React from "react";
import contact from "../../../../assets/images/contact/contact.jpg";

const Banner = () => {
  return (
    <section
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.415), rgba(0, 0, 0, 0.415)), url(${contact})`,
        width: "100%",
        height: "300px",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full capitalize">
        <h2 className="font-bold text-white text-5xl text-center ">
          contact us
        </h2>
        <h2 className="text-2xl font-bold text-center text-white">
          Share your query and ideas with us!
        </h2>
      </div>
    </section>
  );
};

export default Banner;
