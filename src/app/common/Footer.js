import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Logo from "../img/Layer_1.svg";
import instagram from "../img/instagram_1400829.svg";
import facebook from "../img/facebook_733603.svg";
import Layer from "../img/Layer-2.svg";
function IndexPage() {
  return (
    <footer>
   
<section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
               <Link href="/">
                <Image src={Logo} alt="" className="footer_logo w-100" />
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div>
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                            <input type="text" className="footer_input"/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <button className="request_btn" >Submit</button>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="touch_box">
                                <p className="touch_text">Keep in touch</p>
                                <ul className="d-flex">
                                    <li className="social_link">
                                        <a href="#">
                                           
                                            <Image src={instagram} alt="" />
                                        </a>
                                    </li>
                                    <li className="social_link">
                                        <a href="#">
                                           
                                            <Image src={facebook} alt=""  />
                                        </a>
                                    </li>
                                    <li className="social_link">
                                        <a href="#">
                                         
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
                                    <Link href="#" className="foot-links">Training  Development</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">Sales  Marketing</Link>
                                </li>
                             </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                            <h6 className="quick_head">FEATURES</h6>
                             <ul className="">
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">AI Avatars</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">Text-to-Video</Link>
                                </li>
                             </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <h6 className="quick_head">COMPANY</h6>
                             <ul className="">
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">About Us</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">Contact Us</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">Affiliate</Link>
                                </li>
                                <li className="foot-item">
                                    <Link href="#" className="foot-links">Partners</Link>
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div>
                    <p className="copyright">Copyright@ <span className="atnam">Atman.ai</span></p>
                </div>
            </div>
        </div>
    </div>
</section>
    </footer> 
  );
}

export default IndexPage;
