"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import shutterstockOne from "../app/img/shutterstock_2464103061.png";
import shutterstock2403485771 from "../app/img/shutterstock_2403485771.png";
import shutterstock2455853761 from "../app/img/shutterstock_2455853761.png";

import dOne from "../app/img/3d-3.png";
import Dtwo from "../app/img/3d-2.png";
import Dthree from "../app/img/3d-1.png";
 

export default function Home() {

  return (
    <>  
      <main>
      
        <header>
          <Header />
          </header> 





        <Footer />
      </main>
    </>
  );
}
