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
import Xne from "../img/_x32_1.png";

import search from "../img/search_1300917.png";
import opportunity from "../img/opportunity_17213466.png";
import groupmultiethnic from "../img/group-multiethnic-young-business-people-working-together-office.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 

          <section className="atman_six_flexible_plan_sec">
    <div className="container">
        <div className="row atman_six_dlexible_row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="flexiblr_plan_box">
                    <h1><span>Flexible Plans </span>for Every Business</h1>
                    <p>At Atman, we understand that every business has unique needs and goals. Thats why we offer a subscription-based pricing model designed to provide you with maximum value and flexibility. Whether youre just starting or scaling up, our plans ensure you only pay for what you need, when you need it.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="atman_six_flexible_img_box">
                    
                      <Image src={groupmultiethnic} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atman_six_whatYou_box">
                    <h1><span>What You Get </span>by <br/> signing up with us?</h1>
                </div>
            </div>
        </div>
        <div className="row atman_six_scaleble_solution_box-main">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_six_scaleble_solution_box">
                    
                    <Image src={opportunity} alt=""    />
                    <h6>Scalable Solutions</h6>
                    <p>Expand or adjust your plan as your business grows, ensuring seamless integration with your evolving needs.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_six_scaleble_solution_box">
                   
                    <Image src={search} alt=""    />
                    <h6>Transparent Pricing</h6>
                    <p>Clear, upfront costs with no hidden fees - pay only for the services and features you use.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_six_scaleble_solution_box">
                 
                    <Image src={Xne} alt=""    />
                    <h6>Continuous Updates</h6>
                    <p>Enjoy ongoing upgrades and access to the latest innovations in digital human technology at no extra cost.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_six_scaleble_solution_box">
                   
                    <Image src={hours} alt=""    />
                    <h6>24/7 Access</h6>
                    <p>Uninterrupted availability of Atmans digital humans to support your business around the clock.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="atman_six_how_it_work_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atman_six_how_it_work_box">
                    <h1><span>How</span>  It Works?</h1>
                </div>
            </div>
            </div>
            <div className="row atman_six_monthly_biling_box-main-all">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_monthly_biling_box">
                    <h6>Monthly Billing</h6>
                    <p>Our subscription plans operate on a Monthly billing cycle, giving you the flexibility to adjust your usage as needed.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_monthly_biling_box">
                    <h6>Customizable Features</h6>
                    <p>Customize your plan by selecting the features and capabilities that align with your business goals.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_monthly_biling_box">
                    <h6>Request a Demo</h6>
                    <p>Not sure which plan suits you best? Request a demo and see how Atman can revolutionize your business processes.</p>
                </div>
            </div>
            </div>
    </div>
</section>


<section className="atman_six_choose_plan_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="choose_the_plan_box">
                    <h1>Choose the Plan That Fits Your Needs</h1>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_basic_plan_box">
                    <button className="most_btn"> MOST POPULAR</button>
                    <h3>Basic</h3>
                    <h1>$39.99 <span>/ month</span></h1>
                    <p><b>For experimentation</b></p>
                    <p className="basic_for_indivial_para">For individuals who want to experience the power of Digital Humans</p>
                    <ul>
                        <li>6 AI Avatar Options</li>
                        <li>40 Minutes / Unlimited AI Prompts</li>
                        <li>1 Digital Human</li>
                        <li>Digital Human Live Deployment</li>
                        <li>20 Video Downloads / Create Unlimited </li>
                        <li>Videos</li>
                        <li>Full Screen</li>
                        <li>Reporting Dashboard</li>
                        <li>Digital Human Creation</li>
                        <li>Digital Human Templates</li>
                        <li>Gestures</li>
                        <li>Behavior Configuration</li>
                        <li>Voice & Language Configuration</li>
                        <li>Avatar Design Tool</li>
                        <li>Conversational AI Integration</li>
                    </ul>
                    <button className="get_btn">Get Started</button>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_basic_plan_box">
                    <h3>Advanced</h3>
                    <h1>$159.99 <span>/ month</span></h1>
                    <p><b>For  validation</b></p>
                    <ul>
                        <li>Unlimited AI Avatar Options / Make your own Avatar</li>
                        <li>350 Minutes / Unlimited AI Prompts</li>
                        <li>Digital Human Live Deployment</li>
                        <li>3 Digital Humans </li>
                        <li>100 Video Downloads</li>
                        <li>Full Screen or Custom Embedded </li>
                        <li>Reporting Dashboard</li>
                        <li>Digital Human Creation</li>
                        <li>Digital Human Templates</li>
                        <li>Gestures</li>
                        <li>Behavior Configuration </li>
                        <li>Voice & Language Configuration </li>
                        <li>Avatar Design Tool</li>
                        <li>Conversational AI Integration</li>
                        <li>Custom LLM Integration</li>
                    </ul>
                    <button className="get_btn">Get Started</button>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="atman_six_basic_plan_box">
                    <h3>Enterprise</h3>
                    <p className="start_span">Starting</p>
                    <h1>$3,900 <span>/ month</span></h1>
                    <p><b>For scaling</b></p>
                    <ul>
                        <li>Unlimited AI Avatar Options / Make your own Avatar</li>
                        <li>Unlimited Minutes / Unlimited AI Prompts</li>
                        <li>Digital Human Live Deployment</li>
                        <li>Unlimited Digital Humans </li>
                        <li>Unlimited Video Downloads</li>
                        <li>Full Screen or Custom Embedded </li>
                        <li>Reporting Dashboard</li>
                        <li>Digital Human Creation</li>
                        <li>Digital Human Templates</li>
                        <li>Gestures</li>
                        <li>Behavior Configuration </li>
                        <li>Voice & Language Configuration </li>
                        <li>Avatar Design Tool</li>
                        <li>Conversational AI Integration</li>
                        <li>Custom LLM Integration</li>
                    </ul>
                    <button className="get_btn">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="atmna_six_get_rady_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="atmna_six_get_rady_box">
                    <h1>Ready to Get Started for <span>FREE?</span></h1>
                    <p>Learn how GenAI can drive value for your clients and your business for Free</p>
                    <button className="get_btn_ready">Sign Up</button>
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
