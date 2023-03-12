import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png"

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="logo" className="w-40 h-auto" />
    <p><span className="text-2xl font-bold text-warning">Bookshelf</span><br/><span className="font-bold">Best Books Supplier Since 2020</span></p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;
