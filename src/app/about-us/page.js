"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import shutterstockOne from "../img/shutterstock_2464103061.png";
import shutterstock2403485771 from "../img/shutterstock_2403485771.png";
import shutterstock2455853761 from "../img/shutterstock_2455853761.png";

import dOne from "../img/3d-3.png";
import Dtwo from "../img/3d-2.png";
import AboutMain from "../img/businessman-holding-ai-artificial-intelligence-icon-ai-is-futuristic-technology-by-input-command-prompt-generate-include-photo-animation-research-arti.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 

          <section className="three_about_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-m-d6 col-sm-12">
                <div className="three_abot_atman_box">
                    <h1>About Atman</h1>
                    <h3>What Can Our Digital Humans Do?</h3>
                    <p>Atman is a leader in AI-driven solutions that redefine how businesses operate. By incorporating advanced digital humans into your business, Atman provides intelligent, scalable, and adaptable tools that streamline processes, improve efficiency, and drive ongoing growth. From enhancing internal systems to amplifying your brands reach, Atman ensures your business performs at its highest potential.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="what_set_atman_sec">
    <div className="container">
        <div className="row what_atmansets_row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_set_box">
                    <h1>What Sets <br/><span>Atman</span> Apart?</h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 atman_digital_para_row">
                <div className="atman_digital_para_box">
                    <p>Atmans digital humans are designed to handle various business needs with unmatched precision and scalability. These intelligent avatars offer personalized, data-driven solutions that integrate seamlessly into your organization, enabling your business to stay agile and competitive in a fast-evolving marketplace.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_atman_img_box">
                   
                   <Image src={AboutMain} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pioneeringbox">
                    <h3>Pioneering the <br/> <span>Future of Business</span></h3>
                    <p>Atman isnt about reacting to change; its about leading it. Our digital humans are built to continuously adapt, evolve, and optimize, ensuring your business stays ahead of the curve. Whether enhancing operational efficiency, driving innovation, or amplifying your brands presence, Atman delivers intelligent solutions that power tomorrows success, today.</p>
                </div>
            </div>
        </div>
    </div>
</section>





        <Footer />
      </main>
    </>
  );
}
