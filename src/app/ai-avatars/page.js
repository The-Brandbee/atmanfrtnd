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
import Banner from "../img/Group58@2x.png";
import Xne from "../img/_x32_1.png";

import futuristictechnology from "../img/hands-holding-smartphone-social-media-concept@2x.png";
import GroupNNN from "../img/Group52@2x.png";
import GroupNN from "../img/creative-technology-concept@2x.png";
 

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
                  <h2><span>Transform</span> Text Into Stunning AI Videos</h2>
                  <div className="bring_your_brand_box">
                     
                     <p>Atmaya Text-to-Video service revolutionizes how businesses create content. With just a script, you can generate professional, AI-driven videos that captivate audiences, streamline communication, and save valuable time and resources. No cameras, no editing teams, just fast and scalable video creation at your fingertips.</p>
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
                              <h6>Effortless Video Creation</h6>
                              <p>Turn your written text into polished videos within minutes. Simply choose a digital human, select a voice, and let Atmaya AI handle the rest.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>AI-Powered Realism</h6>
                              <p>Our digital humans bring your message to life with human-like expressions, natural gestures, and authentic AI voices, creating videos that feel personal and engaging.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Multilingual Capabilities</h6>
                              <p>Produce videos in over 50 languages, making it easy to connect with diverse global audiences and break language barriers effortlessly.</p>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box">
                              <h6>Full Brand Customization</h6>
                              <p>Align every video with your brand by customizing avatars, backgrounds, voice tones, and visual styles. Whether you want formal, playful, or friendly, Atmaya makes it happen.</p>
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
                           <h2>Why Choose Atmaya <span>Text-to-Video</span> Solution</h2>
                        </div>
                     </div> 
                  </div>
                  <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Save Time and Cut Costs</h6>
                              <p>Eliminate the need for expensive studios, production crews, and endless edits. Atmaya delivers high-quality videos quickly and affordably.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Boost Engagement Across Channels</h6>
                              <p>Create attention-grabbing videos that stand out on social media, websites, emails, and internal platforms, driving better engagement and stronger connections.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Personalize at Scale</h6>
                              <p>Produce tailored videos for different audiences, whether for marketing, training, or customer communication, all from one simple platform.</p>
                           </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                           <div className="atman_what_we_offer_pointer_box atman_what_we_offer_2">
                              <h6>Future-Ready Innovation</h6>
                              <p>Stay competitive with a cutting-edge solution designed to evolve with your business needs, keeping you ahead in a fast-changing digital world.</p>
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
                           <h4>Marketing and Social Media</h4>
                           <p>Generate product explainers, promo videos, ads, and social media content that stops the scroll and drives action.</p>
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


<section className="ai_powered_human_exprienece_section new">
   <div className="container">
      <div className="row">
         <div className="col-lg-5 col-md-5 col-sm-12">
               <div className="ai_human_exprienece_box">
                  <h2>Ready to Bring Your <span>Words to Life?</span></h2>
                     <div className="ready_to_elevate_box">
                        <h6>Create stunning AI videos at scale with Atmaya.</h6>
                        <p>Atmaya digital humans are not just tools—they are strategic assets that drive growth and innovation. Whether you’re training your workforce or enhancing customer experiences, these versatile AI-powered solutions adapt to your business needs.</p>
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
