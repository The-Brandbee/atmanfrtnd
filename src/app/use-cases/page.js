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
import businesswoman from "../img/businesswoman-smiling-camera-while-standing-restaurant-keeping-electronic-tablet-with-two-hands.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 


<section className="seven_use_cases_sec"> 
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 use_cases_seven_col">
                <div className="seven_use_cases_box">
                    <h1>Use Cases</h1>
                    <p>Digital humans are transforming industries with their ability to streamline processes, engage audiences, and adapt to various roles. From workforce training to customer-facing applications, heres how Atmayas digital humans can create value for your business.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="use_cases_img_boxx">
                    <Image src={businesswoman} alt=""  className="w-100"  /> 
                   
                </div>
            </div>
        </div>
    </div>
</section>


<section className="seven_trainning_dev_sec" >
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" id="Training-and-Development">
                <div className="seven_training_development_box">
                    <h2>Training and Development</h2>
                    <p>Revolutionize workforce learning with intelligent virtual trainers.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Personalized Virtual Trainers</h6>
                    <p>Tailor training programs to individual employee needs. These digital humans adapt to different learning styles and provide real-time feedback, making onboarding and skill-building efficient and effective.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Scenario-Based Role-Playing</h6>
                    <p>Simulate real-world situations for employees to practice critical interactions-whether its perfecting a sales pitch or learning conflict resolution skills-in a safe, controlled environment.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Continuous Skill Development</h6>
                    <p>Act as virtual coaches offering ongoing support, customized learning paths, and actionable feedback, helping employees master technical and soft skills alike.                        </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Compliance and Regulatory Training</h6>
                    <p>Simplify complex regulatory requirements by using digital humans to deliver engaging and interactive compliance training modules, reducing the risk of non-compliance.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Cross-Cultural Sensitivity Training</h6>
                    <p>With multilingual capabilities, digital humans help teams understand cultural nuances, enabling seamless collaboration across global markets.</p>
                </div>
            </div>
        </div>
        <div className="row marketing_and_customer_row" id="Sales-Marketing">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="seven_training_development_box">
                    <h2>Marketing and Customer Experience</h2>
                    <p>Drive customer engagement and elevate your brand with innovative marketing solutions.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Interactive Product Demonstrations</h6>
                    <p>Engage customers through immersive product showcases. Digital humans demonstrate features, answer questions, and provide a hands-on experience without physical constraints.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Brand Ambassadors</h6>
                    <p>Represent your brand in advertisements, social media, and virtual events. Digital humans bring a relatable, consistent face to your brand, building stronger connections with audiences.edback, making onboarding and skill-building efficient and effective.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Personalized Shopping Assistants</h6>
                    <p>Offer tailored advice and support by integrating digital humans into your platforms. From recommending products to providing styling tips, they enhance the customer journey.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Experiential Marketing Events</h6>
                    <p>Elevate your virtual events with digital humans as engaging hosts. From product launches to webinars, they create dynamic, futuristic experiences that captivate audiences.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Consumer Insights and Predictive Analytics</h6>
                    <p>Leverage data-driven insights to personalize customer experiences. By analyzing interactions, digital humans can make predictive recommendations, improving customer satisfaction and loyalty.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="seven_personalized_trainning_box">
                    <h6>Text-to-Video Content Creation</h6>
                    <p>Simplify content production with text-to-video capabilities. Digital humans can instantly turn your scripts into professional, personalized videos for social media, websites, and more.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="seven_ready_to_transorm_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="reday_to_transform_seven_box">
                    <h1>Ready to  <span>Transform</span> Your Business?</h1>
                    <p>Atmaya digital humans are not just tools—theyre strategic assets that drive growth and innovation. Whether youre training your workforce or enhancing customer experiences, these versatile AI-powered solutions adapt to your business needs.</p>
                    <h6>Lets create your success story.</h6>
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
