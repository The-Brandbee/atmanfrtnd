"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import shutterstockOne from "../app/img/shutterstock_2464103061.png";
import shutterstock2403485771 from "../app/img/shutterstock_2403485771.png";
import shutterstock2455853761 from "../app/img/shutterstock_2455853761.png";

import dOne from "../app/img/3d-3.png";
import Dtwo from "../app/img/3d-2.png";
import Dthree from "../app/img/3d-1.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header>
          <Header />
          </header> 



<section className="explore_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="explore_box">
                    <h1 className="explore_heading">Explore Our <span className="ai_text">AI-Powered Solutions</span> to Transform Your Business</h1>
                </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 explore_second_col">
                <p className="explore_content">Our digital humans are advanced AI avatars designed to drive your business forward. These intelligent virtual beings are highly adaptable and capable of executing a wide range of tasks with precision and efficiency. They provide scalable, end-to-end solutions that support all aspects of your business operations, from optimizing workflows to driving growth and innovation across every department.</p>
            </div>
        </div>
    </div>
</section>

<section className="digital_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="digital_heading">What Can Our Digital Humans Do?</h3>
            </div>
        </div>
        <div className="blue_box">
            <div className="row blue_box_row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="work_box">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                               <Image src={shutterstockOne} alt="" className="w-100" />
                               
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 work_text_col">
                                <h5 className="work_heading">Optimize Business Operations</h5>
                                <p className="work_content">Streamline key processes across your organization, improving overall efficiency and reducing manual effort.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="work_box">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <Image src={shutterstock2403485771} alt="" className="w-100" />
                               
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 work_text_col">
                                <h5 className="work_heading">Automate Complex Workflows</h5>
                                <p className="work_content">Handle high-volume tasks, ensuring consistent, accurate results while freeing up resources for more strategic initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="work_box">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <Image src={shutterstock2455853761} alt="" className="w-100" />
                               
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 work_text_col">
                                <h5 className="work_heading">Accelerate Business Growth</h5>
                                <p className="work_content">Drive expansion, improve performance, and introduce transformative solutions that create long-term value for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="button_col">
                        <button className="learn_more_btn">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<section className="digital_partner_sec">
    <div className="container">
        <div className="row digital_partner_row_1">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="Meet-Your-AI-Powered">
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/DZLlw5BNQ3g" title="Artificial Intelligence, AI Stock Footage Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe> 
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 digital_partner_col_2">
                <div className="digital_partner_col_box">
                    <h3 className="ai_powered_headeing">Meet Your AI-Powered</h3>     
                    <h3 className="ai_powered_headeing2"> Digital Partners!</h3>
                    <p className="ai_powered_text">Our AI-driven avatars are more than just virtual tools they are dynamic, high-performance assets that seamlessly integrate into your operations. Capable of handling complex tasks, scaling effortlessly, and adapting to your needs, they unlock new business potential and redefine whats possible. Designed for growth, these avatars push the limits of innovation and deliver unparalleled results.</p>
                </div>
            </div>
        </div>
        <div className="Try-Our-Digital-Humans-main-section"> 
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="try_box">
                    <h4>Try Our 6 Digital Humans</h4>
                    <p>Explore the full potential of Atmans digital humans through a hands-on demo. These AI-powered avatars integrate seamlessly into your operations, providing 24/7 support and optimizing workflows. See how they can drive efficiency and deliver consistent results across your business. Schedule a demo today.</p>
                        <button className="learn_more_btn">Request a Demo</button>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="human_slider_box">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="humax_box">
                                <p className="human_name">Sophie</p>
                                <Image src={dOne} alt="" className="w-100" />
                             
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="humax_box">
                                <p className="human_name">Sabrina</p>
                                <Image src={Dtwo} alt="" className="w-100" />
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="humax_box">
                                <p className="human_name">Arpan</p>
                                <Image src={Dthree} alt="" className="w-100" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>


<section className="why_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12">
                <h2 className="why_choose_head">Why Choose</h2>
                <h2 className="why_choose_head2">Digital Humans?</h2>
                <div className="why_choose_content_box">
                    <h4 className="sleep_sec">Because Efficiency <br/>Doesnt Sleep</h4>
                    
                    <p className="sleep_paragraph">Atmans digital humans provide scalable, intelligent solutions that align with your business needs. Heres how they can optimize your operations and drive measurable results:</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12">
                <div className="Customizable-to-Your-Needs-main-frame">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 need_col">
                            <h6 className="needs_heading">Customizable </h6>
                            <h6 className="needs_heading2"> to Your Needs</h6>
                            <p className="need_para">Atmans digital humans can be trained to perform specific tasks, adapting to your business requirements with ease.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 need_col">
                            <h6 className="needs_heading">24/7  </h6>
                            <h6 className="needs_heading2"> Availability</h6>
                            <p className="need_para">These intelligent avatars are always operational, ensuring continuous support for your business functions, without downtime.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 need_col">
                            <h6 className="needs_heading">Optimized </h6>
                            <h6 className="needs_heading2"> Performance</h6>
                            <p className="need_para">These intelligent avatars are always operational, ensuring continuous support for your business functions, without downtime.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 need_col">
                            <h6 className="needs_heading">Measurable </h6>
                            <h6 className="needs_heading2"> Business Impact</h6>
                            <p className="need_para">Atmans digital humans help enhance productivity, reduce operational bottlenecks, and enable scalable growth, delivering results that matter.</p>
                        </div>
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
