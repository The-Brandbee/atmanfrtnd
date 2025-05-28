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
                      How can Atmans AI avatars improve employee onboarding and training?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       Atman avatars walk new hires through company processes, simulate real-world tasks, and provide instant feedback, helping speed up onboarding and improve retention through AI-personalized learning paths.
                         </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      In what ways can digital humans enhance B2B sales training?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    They simulate live sales scenarios, act as mock clients, and coach teams in pitching, objection handling, and negotiation, creating an immersive, low-risk environment for skill-building.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
             
                 <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   How do Atman avatars support marketing beyond just customer interaction?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                They can host product launches, lead webinars, and deliver personalized content. As brand representatives, they create emotional resonance and consistency across digital campaigns and virtual events.
                 </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                  Whats the advantage of Atmans text-to-video feature for content teams?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
               You can turn simple scripts into high-quality, avatar-led videos in minutes—ideal for product demos, training content, or social posts. No filming crew or editing software required.
                </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   Can the text-to-video tool support different languages and tones?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                Yes. Atmans text-to-video platform supports multilingual scripts, various tones, and facial expressions, making it easy to create culturally adapted, emotionally resonant content at scale.
                 </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                How does Atman ensure learning personalization in training modules?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                AI analyzes performance data in real-time, adjusting explanations, pacing, and module difficulty. This ensures each learner receives content that suits their current skill level and learning style.
                 </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   Can marketing teams use Atman avatars for live engagement?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                Absolutely. Digital humans can host live Q&As, moderate product demos, or interact with website visitors in real-time, offering a hybrid of live performance and AI-driven responsiveness.
                 </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   How scalable are Atmans solutions for enterprise-level use?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                Atman is designed for scale. Whether training thousands of employees or engaging global customers, our AI infrastructure ensures consistent performance and content delivery across regions and time zones.
                 </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                  Are Atmans avatars customizable to match brand identity?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
               Yes. Businesses can customize avatar appearance, voice, language, and behavior to reflect brand tone, making them a seamless extension of your company’s visual and verbal identity.
                </p>  
                </AccordionItemPanel>
            </AccordionItem>
                       <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What analytics does Atman provide to track training or campaign success?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
              Atman offers real-time data on learner progress, content effectiveness, audience engagement, and behavioral trends—helping you refine strategies and demonstrate ROI across use cases.
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
 