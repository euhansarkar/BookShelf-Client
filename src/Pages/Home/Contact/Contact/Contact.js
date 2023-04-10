import React from "react";
import Banner from "../Banner/Banner";
import ContactMap from "../ContactMap/ContactMap";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Banner />
      <div className="mt-12 mb-10 px-0 md:px-2 lg:px-0">
        <div className="flex flex-col lg:flex-row  items-center justify-between -z-50">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
