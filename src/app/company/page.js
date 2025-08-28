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
import gNEW from "../img/g2880.png";
import vision from "../img/vision.png";

import MaskGroupN from "../img/Mask-Group-6@2x.png";
import MaskGroup from "../img/Mask-Gro-5@2x.png";
import PathSIX from "../img/Path-62.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 

<section className="atman_five_company_sec">   
    <div className="container">
        <div className="row company_row">
            <div className="col-lg-6 col-md-6 col-sm-12 atman_five_comany_col">
                <div className="atman_five_comany_box">
                    <h1>Company</h1>
                    <p>Atmaya is at the forefront of transforming business operations, growth, and adaptation in an ever-changing world. With our advanced AI-Powered digital humans, we deliver intelligent solutions that empower businesses to optimize operations, elevate customer experiences, and unlock new opportunities for success.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="atman_comapany_img_box">
                   
                     <Image src={PathSIX} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
        <div className="row minds_row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="meent_minds_box_atmna">
                    <h1>Meet the <span>Minds</span> <br/>  Behind Atmaya</h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="atman_founder_box">
                   
                    <Image src={MaskGroup} alt=""    />
                    <h3>Deeptanshu Bansal</h3>
                    <p>Deeptanshu Bansal, the visionary driving force behind Atmaya brings over 15 years of expertise spanning brand management, marketing analytics, business consulting, and investment banking. With an MBA in Marketing and Finance from the Simon School of Business at the University of Rochester, Deeptanshu combines strategic insight with innovation, driving Atmaya mission to redefine the future of business operations through AI-Powered solutions. His leadership ensures Atmaya continues to deliver transformative results for businesses worldwide.</p>
                </div>
            </div>
           <div classname="col-lg-6 col-md-6 col-sm-12" style={{ display: "none" }}>

                <div className="atman_founder_box">
                  
                    <Image src={MaskGroupN} alt=""    />
                    <h3>Callum Golding</h3>
                    <p>Callum Golding, an expert with nearly two decades of experience in IT and cybersecurity, plays a vital role in shaping Atmaya technological backbone. With a deep understanding of secure and scalable IT infrastructure, Callum ensures Atmaya solutions are built to meet the evolving demands of modern businesses. His focus on innovation and operational efficiency is central to Atmaya ability to deliver intelligent, future-ready solutions.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="atman_five_mission_vision_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="amtan_five_misson_box">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <div className="mission_img_box">
                               
                                <Image src={vision} alt=""    />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                            <div className="mission_text_box">
                                <h3>Our Vision</h3>
                                <p>To seamlessly integrate AI technology into business ecosystems, enabling companies to achieve unparalleled efficiency and scalability while shaping the future of work and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="amtan_five_misson_box">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <div className="mission_img_box">
                               
                                <Image src={gNEW} alt=""   />

                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                            <div className="mission_text_box">
                                <h3>Our Mission</h3>
                                <p>To empower businesses with intelligent AI solutions that simplify complexity, maximize efficiency, and enable sustainable growth. At Atmaya, we are committed to being at the forefront of innovation, driving meaningful change for businesses everywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="what_set_atman_aprt_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_set_atman_aprt_box">
                    <h1>What Sets <br/> <span>Atmaya</span>  Apart?</h1>
                    <p>Atmaya AI-Powered digital humans are designed to integrate seamlessly into your operations, offering intelligent and adaptable solutions that maximize productivity, minimize costs, and set your business apart in the competitive landscape.</p>
                </div>
            </div>
        </div>
        <div className="row bcs_solution_row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="Business_Centric_Solutions_box">
                    <h6>Business-Centric Solutions</h6>
                    <p>Atmaya digital humans are not just tools—they are dynamic partners tailored to your business needs. Whether its enhancing internal processes or expanding your market reach, our solutions are designed to align with your goals.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="Business_Centric_Solutions_box">
                    <h6>Scalability Without Limits</h6>
                    <p>From small businesses to global enterprises, Atmaya provides adaptable, cost-effective solutions that grow with you. Our AI systems deliver consistent performance, no matter the scale or complexity of your operations.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="Business_Centric_Solutions_box">
                    <h6>Continuous Innovation</h6>
                    <p>We dont just provide technology; we create the future. Atmaya digital humans evolve with your business, staying ahead of industry trends to ensure you remain competitive in a rapidly advancing world.</p>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atman_five_join_box">
                    Join the growing list of forward-thinking companies that trust Atmaya to drive their success. Together, lets shape the future of business.
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atman_five_set_btn_box text-center">
                     <a href="/contact-us">
                    <button className="learn_more_btn">Request A Demo</button>
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
