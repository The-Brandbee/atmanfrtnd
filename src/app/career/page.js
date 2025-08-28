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
import ContactUsFrom from "../common/ContactUsFrom.js";
import dOne from "../img/3d-3.png";
import Dtwo from "../img/3d-2.png";
import businesswoman from "../img/businesswoman-smiling-camera-while-standing-restaurant-keeping-electronic-tablet-with-two-hands.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
    <header className="header-inner">
          <Header />
   </header> 


          <section className="eight_join_the_future_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="eight_join_the_future_box">
                    <h1>Join the Future of <br/> <span>AI-Driven</span> Business</h1>
                    <p>Looking to be part of a team thats shaping the future of business? Atmaya offers an exciting work environment where innovation meets practicality. Work alongside AI experts and digital architects to create solutions that impact the global business landscape. If youre passionate about technology, human-centered design, and redefining the way businesses operate, Atmaya is the place for you.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="eight_carrer_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="atman_eight_carrer_box">
                    <div className="atman_caarr">
                        <h6>Your Career, Accelerated</h6>
                        <p>Atmaya isnt just offering a job; its offering an opportunity to be part of something big. With a focus on growth, both professionally and personally, Atmaya supports employees to learn, innovate, and lead the way in AI development. As a part of the team, youll have the chance to shape the future of digital human technology.</p>    
                    </div>
                    <div className="atman_caarr">
                        <h6>Work That Matters</h6>
                        <p>At Atmaya, your contributions will be vital. Youll be helping create AI-driven solutions that truly make a difference. From designing virtual trainers to building intelligent marketing avatars, your work will be at the forefront of the AI revolution in business.</p>    
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="eight_form_outer_box">
                <div className="contact-us-page-middle-middle-right-from">
                     <ContactUsFrom/> 
                    
                </div>
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
