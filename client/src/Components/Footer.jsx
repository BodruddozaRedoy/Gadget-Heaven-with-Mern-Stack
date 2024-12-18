import React from "react";

const Footer = () => {
  return (
    <div className="w-full float-end bg-white pt-10">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-center">Gadget Heaven</h1>
        <p className="text-center text-gray-400">Leading the way in cutting-edge technology and innovation</p>
      </div>
      <footer className="footer bg-white text-base-content p-5  md:p-10 flex flex-col md:flex-row justify-between md:px-80">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Refunds</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
