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
import AboutMain from "../img/Group-50.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
    <header className="header-inner">
          <Header />
   </header> 

 

<section className="nine_cattact_us_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 nine_contaxt_us_col">
                <div className="nine_contaxt_us_box">
                    <h1><span>Contact</span> Us</h1>
                </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="nine_contact_img_box">
                    
                     <Image src={AboutMain} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
    </div>
</section>


<section className="eight_carrer_sec">
    <div className="container nine_cont_atman">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <div className="atman_eight_carrer_box">
            <div className="atman_caarr atmn_connn">
              <h6>Address</h6>
              <p>
                123 Business Avenue, Suite 456 Metropolis, NY 10001 USA
              </p>
              <p>Email: <a href="mailto:contact@company.com">contact@company.com </a></p>
              <p>Phone: <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div className="eight_form_outer_box">
            
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
