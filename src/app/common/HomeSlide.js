import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shutterstockOne from "../img/Group-47-banner.png";
import Image from "next/image";
import Head from "next/head";

import { useState, useEffect } from "react";
import Link from "next/link";



export default function TestimonialSlide() {
 
  const responsive = { 
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="cder-ca-slide">
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
      >
        
          <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two-left">
             <Image src={shutterstockOne} alt="" className="w-100" />
            </div>
            <div className="ma-slider-new-frame-inner-two-right">
                   <h2><span>All-in-One</span> AI <br/>Business Solution</h2>
                   <p>Streamline operations and drive growth with integrated AI-powered tools for every business need.</p>
                   <p><a href="">Get Started</a></p>
            </div>
             </div>
           </div>
           
           <div>
           <div className="ma-slider-new-frame-inner">
           <div className="ma-slider-new-frame-inner-two-left">
             <Image src={shutterstockOne} alt="" className="w-100" />
            </div>
            <div className="ma-slider-new-frame-inner-two-right">
                   <h2><span>All-in-One</span> AI <br/>Business Solution</h2>
                   <p>Streamline operations and drive growth with integrated AI-powered tools for every business need.</p>
                   <p><a href="">Get Started</a></p>
            </div>
             </div>
           </div>
         
      
      </Carousel>
    </div>
  );
}
