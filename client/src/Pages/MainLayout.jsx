import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import NavbarSecond from "../Components/NavbarSecond";
import Example from "./StatisticsPage";
import StatisticsPage from "./StatisticsPage";
import {Helmet} from "react-helmet";
import ScrollProgressBar from "../Components/ScrollProgress";


const HomePage = () => {
  const location = useLocation()
  const currentPath = location.pathname
  // console.log(currentPath);
  const title = "Home | Gadget Heaven"
  return (
    <div className="">
      <ScrollProgressBar/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {currentPath === "/" ? <Navbar/> : <NavbarSecond/>}
      <div className=" relative">
        <Outlet />
      </div>
      <Footer />
      
    </div>
  );
};

export default HomePage;
