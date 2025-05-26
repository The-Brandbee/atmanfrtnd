"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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

import futuristictechnology from "../img/futuristic-technology-use-case@2x.png";
import GroupNNN from "../img/Group 52@2x.png";
import GroupNN from "../img/Group 51@2x.png";
 import 'react-accessible-accordion/dist/fancy-example.css';

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 


      <section className="atman_faq_page_section">  
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="atman_ten_faq_box">
                     <h2>FAQ<span>s</span></h2>
                  </div>
               </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="your_quesion_box">
                     <h2>Your Questions, Answered</h2>
                     <p>Everything you need to know about using our AI to turn text into stunning images</p>
                     
                  </div>
               </div>
               <div className="faq_page_container">
                 <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit libero, auctor nec lacinia a, vulputate in leo. Morbi massa ipsum, vehicula at vulputate non, ultrices ac metus. Vivamus viverra ultricies ornare. Aliquam lobortis turpis quis velit scelerisque cursus. Aliquam suscipit iaculis sem, eu mollis massa vestibulum sit amet. Nunc quis dolor dapibus, porta ex eu, congue eros. Nulla placerat sit amet leo consectetur bibendum. Quisque sed sem non mauris dapibus pharetra finibus sed augue. Vestibulum feugiat commodo massa eu luctus. Mauris congue non nibh eu pharetra. Quisque dictum porttitor quam, sed commodo enim bibendum vitae. Mauris vulputate mauris vel nulla molestie, non rutrum ante vestibulum. Nullam at dui vel sapien accumsan mattis vel at tellus.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit libero, auctor nec lacinia a, vulputate in leo. Morbi massa ipsum, vehicula at vulputate non, ultrices ac metus. Vivamus viverra ultricies ornare. Aliquam lobortis turpis quis velit scelerisque cursus. Aliquam suscipit iaculis sem, eu mollis massa vestibulum sit amet. Nunc quis dolor dapibus, porta ex eu, congue eros. Nulla placerat sit amet leo consectetur bibendum. Quisque sed sem non mauris dapibus pharetra finibus sed augue. Vestibulum feugiat commodo massa eu luctus. Mauris congue non nibh eu pharetra. Quisque dictum porttitor quam, sed commodo enim bibendum vitae. Mauris vulputate mauris vel nulla molestie, non rutrum ante vestibulum. Nullam at dui vel sapien accumsan mattis vel at tellus.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Q3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit libero, auctor nec lacinia a, vulputate in leo. Morbi massa ipsum, vehicula at vulputate non, ultrices ac metus. Vivamus viverra ultricies ornare. Aliquam lobortis turpis quis velit scelerisque cursus. Aliquam suscipit iaculis sem, eu mollis massa vestibulum sit amet. Nunc quis dolor dapibus, porta ex eu, congue eros. Nulla placerat sit amet leo consectetur bibendum. Quisque sed sem non mauris dapibus pharetra finibus sed augue. Vestibulum feugiat commodo massa eu luctus. Mauris congue non nibh eu pharetra. Quisque dictum porttitor quam, sed commodo enim bibendum vitae. Mauris vulputate mauris vel nulla molestie, non rutrum ante vestibulum. Nullam at dui vel sapien accumsan mattis vel at tellus.
                    </p>  
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
               </div>
            </div>
         </div>
      </section>



        <Footer />
      </main>
    </>
  );
}
 