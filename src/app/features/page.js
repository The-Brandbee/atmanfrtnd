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
import GroupTWO from "../img/Group-21.png";
import GroupTT from "../img/Group-21.png";
import AssetNGH from "../img/Asset-1@600x.png";
import Digitalhuman from "../img/Digital-human2.png";
import renderedphotoaccounting from "../img/3d-rendered-photo-accounting-bar-designs.png";
import employeeworkingmarketing from "../img/employee-working-marketing-setting.png";
import personusingfuturistic from "../img/person-using-futuristic-virtual-reality-headset.png";
import flagsallaround from "../img/flags-all-around-globe.png";
import viewprofessional from "../img/view-professional-business-people-working-together.png";
import atmanaibusiner from "../img/atman-ai-businer.png"; 
import atmanfuturisticN from "../img/atman-futuristic.png";
import scene from "../img/scene-with-business-person-working-futuristic-office-job.png";
import listening from "../img/futuristic-person-listening-music-ultra-modern-headphones.png";
import businesswoman from "../img/businesswoman-using-futuristic-interface.png";
import futuristic from "../img/futuristic-technology-concept.png";
import whtcan from "../img/wht-can-atman-1.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header className="header-inner">
          <Header />
          </header> 

          <section className="what_can_atman_sec"> 
    <div className="container">
        <div className="row what_can_atman_row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_box">
                    <h1>What Can <span>Atmaya</span> <br/> Do for You?</h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 what_can_atman_para_col">
                <div className="what_can_atman_para">
                    <p>Atmaya brings the power of AI-Powered digital humans to your business. These advanced solutions are designed to assist, streamline, and elevate your operations, helping you stay ahead in an ever-evolving market. Whether its optimizing internal workflows or enhancing external communication, Atmaya adapts to your needs and delivers measurable outcomes.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    <Image src={whtcan} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Hyper-Personalized <br/> Client Interactions</h1>
                    <p>Digital humans can learn individual client preferences, past behaviors, and unique needs to deliver tailored solutions, whether recommending products, answering inquiries, or troubleshooting issues. This creates a highly customized experience that fosters trust and loyalty.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Multi-Channel <br/> Representation</h1>
                    <p>Imagine having a brand ambassador who can simultaneously appear on your website, social media, mobile apps, and even physical kiosks. Digital humans ensure consistent representation across all customer touchpoints, amplifying your brand presence.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                      <Image src={futuristic} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box"> 
                    <Image src={businesswoman} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Interactive Product <br/> Demonstrations</h1>
                    <p>Digital humans can showcase your products or services in dynamic and engaging ways. They can walk potential customers through features, benefits, and usage scenarios, helping them make informed purchasing decisions.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Real-Time Decision <br/> Support</h1>
                    <p>With access to vast amounts of data, digital humans can assist decision-makers by providing instant analytics, predictions, and recommendations. This ensures businesses are always equipped with actionable insights.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                <Image src={listening} alt=""  className="w-100"  />
                
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">  
                    <Image src={scene} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Scenario Simulations <br/> and Risk Management</h1>
                    <p>Digital humans can simulate complex business scenarios, allowing companies to test strategies, predict outcomes, and assess risks before implementation. This is particularly useful for financial modeling, supply chain optimization, and market forecasting.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Employee Productivity <br/> Tracking and Support</h1>
                    <p>Digital humans can monitor employee workflows, identify bottlenecks, and suggest improvements in real time. They can also serve as virtual mentors, guiding employees through tasks and meeting productivity targets.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                <Image src={atmanfuturisticN} alt=""  className="w-100"  />
                  
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    
                    <Image src={atmanaibusiner} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Crisis Management <br/> and Support</h1>
                    <p>During unexpected events like technical failures or public relations crises, digital humans can step in to provide immediate assistance, communicate with stakeholders, and maintain operational continuity without delays.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>On-Demand <br/> Expertise</h1>
                    <p>From legal advice to technical troubleshooting, digital humans can be trained to provide niche expertise in seconds. They can act as consultants, delivering accurate information based on a constantly updated database.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                <Image src={viewprofessional} alt=""  className="w-100"  />
                   
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    
                    <Image src={flagsallaround} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Multilingual and Cross-Cultural Communication</h1>
                    <p>Digital humans can effortlessly communicate in multiple languages and adapt to cultural norms. This makes them invaluable for businesses with a global footprint, ensuring effective engagement across geographies.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Virtual Events and <br/> Experiences</h1>
                    <p>They can host webinars, product launches, or training sessions, offering a futuristic and interactive experience. This not only saves costs but also creates memorable touchpoints with your audience.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                   
                    <Image src={personusingfuturistic} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                    
                    <Image src={employeeworkingmarketing} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Sales <br/> Acceleration</h1>
                    <p>From lead qualification to closing deals, digital humans can streamline the sales funnel. They can answer queries, overcome objections, and guide potential customers through the buying process with precision.</p>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 hyper_personalized_box_row">
                <div className="hyper_personalized_box">
                    <h1>Building Brand <br/> Authority</h1>
                    <p>Digital humans can be trained to embody your brands core values, acting as thought leaders who represent your business in panels, forums, or virtual discussions. This builds credibility and positions your brand as an industry leader.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="what_can_atman_do_img_box">
                  
                    <Image src={renderedphotoaccounting} alt=""  className="w-100"  />
                </div>
                </div>
            </div>
        </div>
  
</section>


<section className="trainning_digital_human_meet_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="train_digital_human_boxx">
                    <h1>Train <span>Digital Humans</span> to Meet Your Business Needs</h1>
                    <p>Atmaya digital humans are not pre-programmed one-size-fits-all solutions - theyre dynamic AI-powered avatars that you can train to handle specific business tasks. Designed for flexibility and scalability, these digital humans learn and adapt to your processes, ensuring they align perfectly with your business goals.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="digital_human_img_box">
                   
                    <Image src={Digitalhuman} alt=""  className="w-100"  />
                </div>
            </div>
        </div>
    </div>
</section>


<section className="what_you_can_train_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="what_you_train_box">
                    <h1>What You Can Train <span> Digital Humans</span> To Do</h1>
                    <p>Atmaya digital humans are not pre-programmed one-size-fits-all solutions - theyre dynamic AI-powered avatars that you can train to handle specific business tasks. Designed for flexibility and scalability, these digital humans learn and adapt to your processes, ensuring they align perfectly with your business goals.</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="what_train_img_box">
                    
                    <Image src={AssetNGH} alt=""   />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="adapt_operation_box">
                    <h6>Adapt to Your Operations</h6>
                    <p>Train digital humans to understand your workflows, operational procedures, and specific industry requirements. From managing tasks to delivering consistent support, they learn to operate seamlessly within your business environment.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="adapt_operation_box">
                    <h6>Reflect Your Brand Voice</h6>
                    <p>Customize their communication style to align with your brands identity. Whether its formal, conversational, or technical, digital humans can be trained to interact in a tone that resonates with your target audience.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="adapt_operation_box">
                    <h6>Learn Complex Processes</h6>
                    <p>Equip them to handle sophisticated business scenarios, such as managing compliance requirements, processing data, or offering tailored assistance to your teams. Their training enables them to execute even the most intricate operations with precision.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="how_it_works_gour_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="how_it_four_work_box">
                    <h1>How It <span>Works?</span></h1>
                </div>
            </div>
        </div>
        <div className="row atman_four_step_row">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_four_step_box">
                    <h2>Step 1</h2>
                    <h6>Define Business Requirements</h6>
                    <p>Identify the tasks, processes, and objectives you want your digital human to fulfill. Whether its operations, support, or task-specific roles, the first step is defining their purpose.</p>
                </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12">
                <div className="atman_four_right_arrow_img_box">
                    
                    <Image src={GroupTT} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_four_step_box">
                    <h2>Step 2</h2>
                    <h6>Provide Training Data</h6>
                    <p>Feed your digital human with the necessary data - process manuals, scripts, workflows, and key guidelines—to train them effectively.</p>
                </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12">
                <div className="atman_four_right_arrow_img_box">
                   
                    <Image src={GroupTWO} alt=""  className="w-100"  />
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="atman_four_step_box">
                    <h2>Step 3</h2>
                    <h6>Fine-Tune and Monitor</h6>
                    <p>Collaborate with Atmaya AI specialists to fine-tune your digital humas performance. Once trained, monitor their efficiency and make necessary adjustments to ensure optimal alignment with your needs.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="atman_four_why_train_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="atman_four_why_train_box">
                    <h1>Why Train <br/><span>Digital Humans?</span></h1>
                </div>
                <div className="atman_four_digital_humn_point_box">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="personalised_performance_box">
                                <h6>Personalized Performance</h6>
                                <p>Tailor their skill set to your unique business requirements.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="personalised_performance_box personalised_performance_box_margin">
                                <h6>Consistency</h6>
                                <p>Deliver precise results, time and again, without the need for retraining.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="personalised_performance_box">
                                <h6>Scalability</h6>
                                <p>Expand their capabilities as your business evolves.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="personalised_performance_box personalised_performance_box_margin">
                                <h6>Efficiency</h6>
                                <p>Save time and resources by delegating complex tasks to AI-trained digital humans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="train_perform_sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="train_todaY_tomorrow_box">
                    <h1>Train Today, Perform Tomorrow</h1>
                    <p>Atmaya digital humans are ready to learn and grow with your business. Start training your digital human <br/> today and unlock a new level of operational efficiency and intelligence.</p>
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
