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
import hours from "../img/24-hours.png";
import Banner from "../img/Group59@2x.png";

import futuristictechnology from "../img/futuristic-technology-use-case@2x.png";
import GroupNNN from "../img/Group 52@2x.png";
import GroupNN from "../img/Group 51@2x.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 


<section className="ai_powered_digital_atman">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="ai_powered_digital_atman_box">
                  <h2>AI Powered Digital Humans <span> by Atmaya</span></h2>
                  <div className="bring_your_brand_box">
                     <h4>Bring Your Brand to Life with <br/>Digital Humans</h4>
                     <p>Atmaya AI Avatars transform how businesses connect, engage, and communicate. Designed to deliver hyper-realistic, human-like interactions, our avatars help you create unforgettable experiences from personalized training to immersive marketing.</p>
                  </div>
                </div>
            </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
       <Image src={Banner} className="w-100" alt=""/>
                </div>
        </div>
    </div>
</section>



<section className="atman_video_what_we_offer_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atman_video_what_we_offer_box">
                    <h2>What We Offer</h2>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
               <div className="what_we_offer_atman_point_box">
                  <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Realistic, Ready-to-Use Digital Humans</h6>
                              <p>Choose from 6 ultra-realistic humans crafted to suit a range of industries and use cases.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Create Your Own Human</h6>
                              <p>Bring your brands unique face to life with custom-built humans that reflect your identity and values.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Personal & Multilingual Reach</h6>
                              <p>Speak to your audience in your own or 50+ other languages with seamless AI voice integration.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Scalable & Versatile</h6>
                              <p>Deploy avatars across training modules, marketing campaigns, customer support, and live events.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Personal & Multilingual Reach</h6>
                              <p>Speak to your audience in your own or 50+ other languages with seamless AI voice integration.</p>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
               <div className="what_we_offer_atman_img_box">
                  
                   <Image src={GroupNN} className="w-100" alt=""/>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
               <div className="what_we_offer_atman_img_box">
                 
                   <Image src={GroupNNN} className="w-100" alt=""/>
               </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
               <div className="what_we_offer_atman_point_box">
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="atman_video_what_we_offer_box">
                           <h2>Why Choose Atmaya <br/> <span> Digital Humans? </span></h2>
                        </div>
                     </div> 
                  </div>
                  <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Fast & Effortless Creation</h6>
                              <p>Turn scripts into lifelike videos in minutes without complex production.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Global Connection</h6>
                              <p>Break language barriers and engage audiences anywhere in the world.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Consistent Brand Presence</h6>
                              <p>Ensure every touchpoint from onboarding to customer service reflects your brand voice.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Future-Ready Innovation</h6>
                              <p>Stay ahead with digital humans designed to evolve alongside your business needs.</p>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
         </div>
    </div>
</section>


<section className="atman_use_cases_section">
   <div className="container">
      <div className="row">
         <div className="col-lg-6 col-md-6 col-sm-12">
               <div className="atman_use_cases_box">
                  <h2>Use Cases</h2>
                     <div className="atman_use_training_box">
                           <h4>Training & Development</h4>
                           <p>Personalized, adaptive training for employees.</p>
                     </div>
               </div>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="atman_use_cases_img_box">
                <Image src={futuristictechnology} className="w-100" alt=""/>
               
            </div>
         </div>
      </div>
   </div>
</section>


<section className="ai_powered_human_exprienece_section">
   <div className="container">
      <div className="row">
         <div className="col-lg-5 col-md-5 col-sm-12">
               <div className="ai_human_exprienece_box">
                  <h2>Lets build your AI powered <br/> <span> Digital Human Experience</span></h2>
                     <div className="ready_to_elevate_box">
                        <h6>Ready to elevate your business with Atmaya Digital Humans?</h6>
                        <p>Get in touch today to explore endless possibilities.</p>
                     </div>
                     <a href="/contact-us">
                  <button className="request_btn" >Contact Us</button>   
                  </a>
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
