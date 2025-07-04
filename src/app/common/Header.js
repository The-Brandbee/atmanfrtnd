import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo_header.svg"; 
import HeaderMobileIn from "../common/HeaderMobile.js";



function IndexPage() {
  return (
    <>
  <section className="header">  
      <div className="container">
        <div className="row header-row-cent">

          <div className="col-6 col-sm-4 col-md-2">
            <div className="logo-box">
             <Link href="/">
              <Image src={Logo} alt="" />
              </Link>
            </div>
          </div>

          <div className="col-6 col-sm-8 col-md-6 nav_col desktop">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/features">FEATURES</Link >   
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/use-cases">USE-CASES</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/company">COMPANY</Link> 
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/pricing">PRICING</Link>    
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/training">TRAINING</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

         
          <div className="col-12 col-sm-4 col-md-4 nav_col2 desktop">
            <ul className="nav">
             
              <li className="login-liks">
             <Link className="login-link" href="/contact-us">Contact Sales</Link> 
              </li>
              <li className="login-liks">
                <Link href="/contact-us">
                <button className="Request-a-Demo" href="/contact-us">Request A Demo</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-menu-mobile col-md-8">
          <HeaderMobileIn />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default IndexPage;
