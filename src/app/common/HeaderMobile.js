import React, { Component } from "react";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import {
  Accordion,
  AccordionItem,     
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="header-logo-right">      
        <div className="container--">
          <div className="col-md-10--">
            <div className="dropdown mobilemenu-new">
              <Menu>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <Link href="/features">
                      <AccordionItemHeading>
                        <AccordionItemButton>FEATURES</AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>
                  
                  
                  <AccordionItem>
                  <Link href="/use-cases">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                        USE CASES                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>

                  

                  <AccordionItem>
                  <Link href="/company">
                      <AccordionItemHeading>
                        <AccordionItemButton>COMPANY</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                  <AccordionItem>
                  <Link href="/pricing">
                      <AccordionItemHeading>
                        <AccordionItemButton>PRICING
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                 
                  <AccordionItem>
                  <Link href="#">
                      <AccordionItemHeading>
                        <AccordionItemButton>TRAINING</AccordionItemButton>
                      </AccordionItemHeading>
                      </Link>
                  </AccordionItem>
                </Accordion>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
