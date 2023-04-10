import React from "react";
const ContactForm = () => {

  return (
    <div className=" w-full lg:w-1/2 px-6">
        <form
    action="https://formspree.io/f/mlevqarp"
    method="post"
  >
    <div className="form-control w-full">
      <label className="label">
        {/* <span className="label-text">Your Name</span> */}
      </label>
      <input
        type="text"
        placeholder="Your Full Name"
        name="name"
        id="name"
        className="input input-bordered w-full"
        required
      />
    </div>
    <div className="form-control w-full">
      <label className="label">
        {/* <span className="label-text">Your Email</span> */}
      </label>
      <input
        type="text"
        placeholder="Your Email Address"
        name="email"
        required
        className="input input-bordered w-full"
      />
    </div>
    <div className="form-control w-full">
      <label className="label">
        {/* <span className="label-text">Your Name</span> */}
      </label>
      <input
        type="text"
        placeholder="Your Phone number"
        name="phone"
        id="phone"
        className="input input-bordered w-full"
        required
      />
    </div>
    <div className="form-control w-full">
      <label className="label">
        {/* <span className="label-text">Your Message</span> */}
      </label>
      <textarea
        type="text"
        placeholder="How Can I Help You?"
        name="message"
        className="textarea input-bordered w-full"
        rows={`4`}
        cols={`30`}
      />
    </div>
    <div className="flex">
      <input
        className="btn btn-warning text-white btn-md mt-5"
        type="submit"
        value="send"
      />
    </div>
  </form>
    </div>
  );
};

export default ContactForm;
