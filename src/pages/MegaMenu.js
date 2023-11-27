import React, { useState } from "react";
import MegaMenuPartnership from "./megaMenuPages/MegaMenuPartnership";
import Testimonials from "./megaMenuPages/TestimonialItem";
import MegaMenuBlogsItem from "./megaMenuPages/MegaMenuBlogsItem";
import MegaMenuContact from "./megaMenuPages/MegaMenuContact";
import iconClose from "../assets/images/close Image/logo1.svg";
import MegaMenuImpact from "./megaMenuPages/MegaMenuImpact";
import roundedbackgroundImage from'../assets/images/AIML/bg-gradient-1.webp'
import roundedbackgroundImageRightSide from '../assets/images/AIML/bg-gradient.webp'

const MegaMenu = ({ handalOnClick }) => {
  const [isMegaMenuPartnership, setIsMegaMenuPartnership] = useState(false);
  const [isMegaMenuTestimonialItem, setIsMegaMenuTestimonialItem] =
    useState(false);
  const [isMegaMenuBlogsItem, setIsMegaMenuBlogsItem] = useState(false);
  const [isMegaMenuContact, setIsMegaMenuContact] = useState(false);
  const [isMegaMenuImpact, setIsMegaMenuImpact] = useState(true);
  const handlesetIsMegaMenuImpact = () => {
    setIsMegaMenuImpact(true);
    setIsMegaMenuTestimonialItem(false);
    setIsMegaMenuBlogsItem(false);
    setIsMegaMenuContact(false);
    setIsMegaMenuPartnership(false);
  };

  const handlesetIsMegaMenuPartnership = () => {
    setIsMegaMenuPartnership(true);
    setIsMegaMenuTestimonialItem(false);
    setIsMegaMenuBlogsItem(false);
    setIsMegaMenuContact(false);
    setIsMegaMenuImpact(false);
  };

  const handlesetIsMegaMenuTestimonialItem = () => {
    setIsMegaMenuTestimonialItem(true);
    setIsMegaMenuBlogsItem(false);
    setIsMegaMenuContact(false);
    setIsMegaMenuImpact(false);
    setIsMegaMenuPartnership(false);
  };

  const handlesetIsMegaMenuBlogsItem = () => {
    setIsMegaMenuBlogsItem(true);
    setIsMegaMenuContact(false);
    setIsMegaMenuImpact(false);
    setIsMegaMenuTestimonialItem(false);
    setIsMegaMenuPartnership(false);
  };

  const handlesetIsMegaMenuContact = () => {
    setIsMegaMenuContact(true);
    setIsMegaMenuBlogsItem(false);
    setIsMegaMenuImpact(false);
    setIsMegaMenuTestimonialItem(false);
    setIsMegaMenuPartnership(false);
  };

  return (
    <div className="header_menu_icon__q1NWM">
      <div className="header_icon__SiAfw">
        <button className="headerOffcanvas_btn__Qt97P" aria-label="menu button">
          <span></span>
          <span></span>
        </button>
        <div className="headerMegaMenuFull_menu__9lTcp undefined headerMegaMenuFull_inview__2P21T">
          <button
            className="headerMegaMenuFull_close__d4Htj"
            onClick={handalOnClick}
          >
             <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="red"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
          </button>
          <div className="headerMegaMenuFull_gradient_01__UgUnj">
            <img
              alt="close icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              srcSet={roundedbackgroundImage}
              src={roundedbackgroundImage}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="headerMegaMenuFull_gradient_02__0lO5s">
            <img
              alt="close icon"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              srcSet={roundedbackgroundImageRightSide}
              src={roundedbackgroundImageRightSide}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
          <div className="container headerMegaMenuFull_container__6bgsN">
            <div
              className="headerMegaMenuFull_main_wrapper__FUbmU"
              data-lenis-prevent="true"
            >
              <div className="headerMegaMenuFull_row__FLa19 row">
                <div className="col-12 headerMegaMenuFull_col_left__HX_QU">
                  {isMegaMenuImpact ? <MegaMenuImpact /> : null}
                  {isMegaMenuPartnership ? <MegaMenuPartnership /> : null}
                  {isMegaMenuTestimonialItem ? <Testimonials /> : null}
                  {isMegaMenuBlogsItem ? <MegaMenuBlogsItem /> : null}
                  {isMegaMenuContact ? <MegaMenuContact /> : null}
                </div>
                <div className=" col-12 headerMegaMenuFull_col_right__uU8KI">
                  <nav>
                    <ul className="headerMegaMenuFull_nav_lg__IaV79 text-start">
                      <li>
                        <a
                           className={isMegaMenuImpact ? "headerMegaMenuFull_active__TbeMg" : null}
                          href="/impact"
                          onMouseEnter={handlesetIsMegaMenuImpact}
                        >
                          Impact
                        </a>
                      </li>
                      <li>
                        <a
                           className={isMegaMenuTestimonialItem ? "headerMegaMenuFull_active__TbeMg" : null}
                          href="/testimonials"
                          onMouseEnter={handlesetIsMegaMenuTestimonialItem}
                        >
                          Testimonial
                        </a>
                      </li>
                      <li>
                        <a
                           className={isMegaMenuPartnership ? "headerMegaMenuFull_active__TbeMg" : null}
                          href="/partnership"
                          onMouseEnter={handlesetIsMegaMenuPartnership}
                        >
                          Partnership
                        </a>
                      </li>
                      <li>
                        <a
                           className={isMegaMenuBlogsItem ? "headerMegaMenuFull_active__TbeMg" : null}
                          href="/blog"
                          onMouseEnter={handlesetIsMegaMenuBlogsItem}
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                           className={isMegaMenuContact ? "headerMegaMenuFull_active__TbeMg" : null}
                          href="/contact-us"
                          onMouseEnter={handlesetIsMegaMenuContact}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
