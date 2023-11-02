import React from "react";
import logo from '../image/logo1.svg'

function Header() {
  return (
    <header
      className="header_header__ts5le header  header_active__vmyFQ   header_over__okbNt"
      style={{"translate": "none", "rotate": "none", "scale": "none", "transform": "translate3d (0px, 0px, 0px)"}}
    >
      <div className="container">
        <div className="header_header_inner__U8bJp">
          <div className="header_logo__RW0M7">
            <a className="logo_brand_logo__pKuee" href="/">
              <img
                alt="Webandcrafts"
                fetchpriority="high"
                width="96.93"
                height="28.01"
                decoding="async"
                data-nimg="1"
                src={logo}
                style={{"color": "transparent"}}
              />
            </a>
          </div>
          <div className="header_menu_wrapper__vqfVN">
            <div className="menuLinks_menu__2bR3R">
              <ul>
                <li className="menuLinks_menu_list__ORkXM">
                  <button className="">Services</button>
                </li>
                <li className="menuLinks_menu_list__ORkXM">
                  <a className="" href="/solutions">
                    Solutions
                  </a>
                </li>
                <li className="menuLinks_menu_list__ORkXM">
                  <a className="" href="/industries">
                    Industries
                  </a>
                </li>
                <li className="menuLinks_menu_list__ORkXM">
                  <a className="" href="/works">
                    Works
                  </a>
                </li>
                <li className="menuLinks_menu_list__ORkXM">
                  <a className="" href="/about-us">
                    About
                  </a>
                </li>
                <li className="menuLinks_menu_list__ORkXM">
                  <a className="" href="/careers">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <a className="contactButton_btn__rRKCw" href="/contact-us">
              Contact
            </a>
            <ul className="header_icon_wrap__VSWn1">
              <li>
                <button className="search_searchBtn__pveTB" aria-label="search">
                  <svg
                    className=""
                    width="20"
                    height="20"
                    viewBox="0 0 1017 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{"display": "inline-block","vertical-align": "middle"}}
                  >
                    <path
                      d="M436.447 95.576c-188.232 0-340.824 152.592-340.824 340.824s152.592 340.824 340.824 340.824c188.232 0 340.824-152.592 340.824-340.824v0c-0.218-188.144-152.68-340.606-340.803-340.824l-0.020-0zM436.447 0c241.017 0 436.399 195.383 436.399 436.399s-195.383 436.399-436.399 436.399c-241.017 0-436.399-195.383-436.399-436.399v0c0-241.017 195.383-436.399 436.399-436.399v0z"
                      style={{"fill": "rgb(255, 255, 255)"}}
                    ></path>
                    <path
                      d="M951.697 1023.952l-259.727-243.049 65.278-69.77 259.727 243.049z"
                      style={{"fill": "rgb(255, 255, 255)"}}
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <span className="wacFolder_linkWrapper__CTQYZ">
                  <a
                    className="wacFolder_btn__hQzAQ"
                    aria-label="search"
                    href="/saved-pages"
                  >
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 786 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{"display": "inline-block", "vertical-align": "middle"}}
                    >
                      <path
                        d="M785.504 1024.051l-392.575-280.526-392.93 280.526v-884.624c0.058-76.98 62.447-139.369 139.421-139.427l506.758-0c76.937 0.115 139.268 62.482 139.325 139.421l0 0.005zM392.93 650.032l316.676 226.226v-736.832c0-0 0-0 0-0 0-35.001-28.374-63.376-63.376-63.376-0.036 0-0.071 0-0.107 0l0.005-0h-506.702c-35.001 0-63.376 28.374-63.376 63.376v0 736.832z"
                        style={{"fill": "rgb(255, 255, 255)"}}
                      ></path>
                    </svg>
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="header_menu_icon__q1NWM">
            <div className="header_icon__SiAfw">
              <button
                className="headerOffcanvas_btn__Qt97P"
                aria-label="menu button"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
