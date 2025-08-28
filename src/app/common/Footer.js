import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Logo from "../img/Atmaya-ai.png";
import instagram from "../img/instagram_1400829.svg";
import facebook from "../img/facebook_733603.svg";
import Layer from "../img/Group60.svg"; 
import NewsletterForm from '../common/NewsletterForm.js';



function IndexPage() {
  return (
    <footer>
   
<section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 footer-logo">
               <Link href="/">
                <Image src={Logo} alt="" className="footer_logo w-100" />
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div>
                    <div className="row footer_input-main-frame">
                         <h6 className="quick_head white">Stay Connected</h6>
                       
                      
                        <NewsletterForm/>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="touch_box">
                                <p className="touch_text">Keep in touch</p>
                                <ul className="d-flex">
                                    <li className="social_link">
                                        <a target="_blank" href="https://www.instagram.com/atman.ai_/?igsh=dXplb2dib3hkMnE%3D#">
                                          <Image src={instagram} alt="" />
                                        </a>
                                    </li>
                                    <li className="social_link">
                                        <a href="#">
                                           
                                            <Image src={facebook} alt=""  />
                                        </a>
                                    </li>
                                    <li className="social_link">
                                        <a target="_blank" href="https://www.youtube.com/@atman.ai2025">
                                         
                                            <Image src={Layer} alt=""  />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="links-box">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <h6 className="quick_head">USE-CASES</h6>
                             <ul className="">
                                <li className="foot-item">
                                    <Link href="/use-cases#Training-and-Development" className="foot-links">Training & Development</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="/use-cases#Sales-Marketing" className="foot-links">Sales & Marketing</Link>
                                </li>
                             </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <h6 className="quick_head">FEATURES</h6>
                             <ul className="">
                                <li className="foot-item">
                                    <Link href="/ai-avatars" className="foot-links">AI Avatars</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="/text-to-video" className="foot-links">Text-to-Video</Link>
                                </li>
                             </ul> 
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <h6 className="quick_head">COMPANY</h6>
                             <ul className="">
                                <li className="foot-item">
                                    <Link href="/about-us" className="foot-links">About Us</Link>
                                </li> 
                                <li className="foot-item">
                                    <Link href="/career" className="foot-links">Career</Link>
                                </li>      
                                <li className="foot-item">
                                    <a href="/contact-us" className="foot-links">Contact Us</a>
                                </li>
                                        <li className="foot-item">
                                    <a href="/faqs" className="foot-links">FAQs</a>
                                </li>
                               
                             </ul>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div>     
                    <p className="copyright">Copyright@ <span className="atnam">Atmaya.ai</span></p>
                </div>
            </div>
        </div>
    </div>
</section>
    </footer> 
  );
}

export default IndexPage;
