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
import machinelearning from "../img/machine-learning-model.svg";
import glowingblue from "../img/glowing-blue-sphere-held-by-human-hand-generated-by-ai.png";
import futuristicai from "../img/futuristic-ai-business-woman-iot-connectivity-cyber-data-overlay-technology-innovation-digital-transformation-metaverse-tech-analytics-web-dashboard-i.png";
import digitalart from "../img/digital-art-class-online.png";
import personwearing from "../img/person-wearing-futuristic-virtual-reality-glasses-gaming.png";
import scenewithbusiness from "../img/scene-with-business-person-working-futuristic-office-job (1).png";
import bxsupport from "../img/bx-support.svg";
import scale from "../img/scale.svg";
import deliveryparcel from "../img/delivery-parcel.svg";
import analysis from "../img/analysis.svg";


export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 

       
<section className="training_robot_radong_book_sec">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
          <div className="ai_powered_training_box">
            <h2>AI Powered Training That Works, Learns, and Evolves</h2>
            <div className="personalised_box_training">
              <h4>Personalized. Scalable. Humanlike.</h4>
              <p>Atmaya digital humans are reshaping how companies train and develop their people. More than just virtual trainers, they’re adaptive learning partners that elevate skills, boost engagement, and help businesses stay ahead in a fast-changing world.</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>


<section className="what_can_atman_sec">
    <div className="container">
        <div className="row what_can_atman_row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_box one_training_box">
                    <h2>Our Training <span>Solutions</span></h2>
                </div>
            </div>
            
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    
                   
                     <Image src={digitalart} className="w-100" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Adaptive Virtual Trainers</h1>
                    <p>Move beyond one-size-fits-all learning. Atmaya AI avatars customize training to each employee’s role, pace, and preferences, delivering real-time feedback and creating a more engaging, effective experience.</p>
                </div>
            </div>
        </div>
        <div className="row row-rever">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Immersive Role-Play Simulations</h1>
                    <p>Let your teams learn by doing. With lifelike scenarios, employees can practice sales conversations, customer service, leadership skills, and more, all in a safe, interactive environment that builds confidence and capability.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                   
                  <Image src={personwearing} className="w-100"alt=""/>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                   
                   <Image src={scenewithbusiness} className="w-100" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Ongoing Skill Coaching</h1>
                    <p>Keep development continuous. Atmaya avatars act as on-demand coaches, guiding employees through personalized learning journeys and tracking progress over time, from technical mastery to soft-skill growth.</p>
                </div>
            </div>
        </div>
        <div className="row row-rever">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Compliance Made Engaging</h1>
                    <p>Turn dry compliance requirements into interactive learning. Atmaya makes it easy to deliver clear, consistent training on regulations, ethics, and industry standards — helping teams stay compliant and confident.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    
                    <Image src={futuristicai} className="w-100" alt=""/>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                   
                   <Image src={glowingblue} className="w-100" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Global Readiness & Cultural Intelligence</h1>
                    <p>Equip your teams for a global stage. With multilingual capabilities and cultural nuance, Atmaya trains employees to communicate and collaborate across markets, breaking down barriers and strengthening global operations.</p>
                </div>
            </div>
        </div>
        
    </div>
</section>


<section className="traing_why_choose_atman_secttion">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="train_why_choose_atmna_box">
          <h2>Why Choose Atmaya?</h2>
            <div className="why_atmna_bocxes">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="adaptive_box">
                    <div>  
                        <Image src={machinelearning} className="w-100" alt=""/>
                        </div>
                    <div><p>Adaptive learning powered by AI</p></div>

                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="adaptive_box">
                    <div> 
                        <Image src={bxsupport} className="w-100" alt=""/>
                        </div>
                    <div><p>Always-on coaching and support</p></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="adaptive_box">
                    <div>
                       
                        <Image src={scale} className="w-100" alt=""/>
                        </div>
                    <div><p>Scalable across geographies & teams</p></div>
                  </div>
                </div>
              </div>
              <div className="row adaptive_second_row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="adaptive_box">
                    <div>
                        <Image src={deliveryparcel} className="w-100" alt=""/>
                        
                        
                        </div>
                    <div><p>Consistent delivery, every time</p></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="adaptive_box">
                    <div>
                        <Image src={analysis} className="w-100" alt=""/>
                       
                        </div>
                    <div><p>Real-time progress tracking & analytics</p></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="training_transform_the_wy_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <div className="transofrm_the_way_box">
          <h2> <span>Transform</span><br/>the Way You Train</h2>
          <div className="future_proof_box">
            <p>Future-proof your workforce with Atmaya AI-powered training. Make learning more human, more intelligent, and more impactful.</p>
               <a href="/contact-us">
                  <button className="request_btn" >Contact Us</button>   
                  </a>    
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
