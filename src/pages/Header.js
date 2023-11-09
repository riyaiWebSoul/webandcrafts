import React, { useState, useEffect } from "react";
import logo from '../assets/images/logo_images/logo1.svg'
// import logo from 'logo1.svg'

function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [isMainMenuVisible, setIsMainMenuVisible] = useState(false);
  const [opacity,setOpacity]=useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 5.0; // 10%

      if (scrollPosition >= windowHeight * scrollThreshold) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleServicesButtonHover = () => {
    setIsMainMenuVisible(true);
    setOpacity(1)
  };

  const handleServicesButtonLeave = () => {
    setIsMainMenuVisible(false);
    setOpacity(0)
  };

  return (
    <header
    className={` ${headerActive ? " header_header__ts5le header  header_active__vmyFQ    " : "header_header__ts5le header  header_active__vmyFQ   header_over__okbNt     "} header_header__ts5le header     `}
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
                  <button   onMouseEnter={handleServicesButtonHover}
                    onMouseLeave={handleServicesButtonLeave}>Services
                  <div id="MainMenu" className={`headerMegaMenu_mega_menu__IqR7o `} style={{opacity:`${opacity}`}}>
          
          <div
            className="headerMegaMenu_mega_menu_main__zLCmF"
            data-lenis-prevent="true"
            style={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px)',
              willChange: 'transform',
            }}
          >
            <div className="headerMegaMenu_mega_menu_main_scroll__1abSn">
              <div className="container">
                <span
                  className="headerMegaMenu_gradient_item_01__7FZ1y"
                  style={{
                    background:
                      'linear-gradient(154deg, rgb(0, 0, 0) 50%, rgba(0, 32, 137, 0.9) 75.71%, rgb(0, 69, 255) 72.36%, rgb(0, 196, 255) 100%)',
                    transform: 'translate3d(0px, 0px, 0px) rotate(-40deg) skew(2.893deg, 0deg) scale(0.97965, 0.96973)',
                    opacity: 0.4,
                  }}
                ></span>
                <div className="undefined row">
                  <div
                    className="headerMegaMenu_content_wrapper__q7HPU col-lg-3"
                    style={{
                      opacity: 1,
                      transform: 'translate3d(0px, 0px, 0px)',
                    }}
                  >
                    <h2 className="headerMegaMenu_title__0sLjU fw-light mb-0">
                      Building Strong Capabilities to Empower Your Brand
                    </h2>
                    <a
                      aria-label="link to home"
                      className="btn btn-secondary light headerMegaMenu_main_link__PjzV9"
                      href="/services"
                    >
                      <span>Go to overview</span>
                      <span className="headerMegaMenu_icon__rqItq">
                        <svg
                          className=""
                          width="12"
                          height="12"
                          viewBox="0 0 1538 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        >
                          <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                          <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="undefined col-lg-9">
                    <div className="headerMegaMenu_menu_links_wrapper__bHf5W">
                      <div className="row row-cols-3">
                        <div
                          style={{
                            opacity: 1,
                            transform: 'translate3d(0px, 0px, 0px)',
                          }}
                        >
                          <div className="headerMegaMenu_menu_links__RDsZ_">
                            <a className="headerMegaMenu_sub_title__mX5OX ttl-20 fw-medium" href="/services/branding">
                              Branding{' '}
                              <svg
                                className=""
                                width="15"
                                height="15"
                                viewBox="0 0 1538 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                              >
                                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                              </svg>
                            </a>
                            <ul>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/brand-consulting">
                                  Brand Consulting
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/logo-design">
                                  Logo Design
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/industrial-product-design">
                                  Industrial / Product Design
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/graphic-design">
                                  Graphic Design
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/2d-3d-visualisation">
                                  2D / 3D Visualisation
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="headerMegaMenu_menu_links__RDsZ_">
                            <a className="headerMegaMenu_sub_title__mX5OX ttl-20 fw-medium" href="/services/experience-design">
                              Experience Design{' '}
                              <svg
                                className=""
                                width="15"
                                height="15"
                                viewBox="0 0 1538 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                              >
                                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                              </svg>
                            </a>
                            <ul>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/ui-ux-design">
                                  UI/UX Design
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/web-experience">
                                  Web Experience
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/mobile-experience">
                                  Mobile Experience
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/commerce-experience">
                                  Commerce Experience
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/hmi">
                                  Human Machine Interface
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          style={{
                            opacity: 1,
                            transform: 'translate3d(0px, 0px, 0px)',
                          }}
                        >
                          <div className="headerMegaMenu_menu_links__RDsZ_">
                            <a className="headerMegaMenu_sub_title__mX5OX ttl-20 fw-medium" href="/services/technology">
                              Technology{' '}
                              <svg
                                className=""
                                width="15"
                                height="15"
                                viewBox="0 0 1538 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                              >
                                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                              </svg>
                            </a>
                            <ul>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/ai-and-ml">
                                  AI & Machine Learning
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/devops-consulting">
                                  DevOps Consulting
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/data-analytics">
                                  Data & Analytics
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/web-development">
                                  Web Development
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/mobile-app-development">
                                  Mobile App Development
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/e-commerce">
                                  E-commerce
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/quality-assurance">
                                  Quality Assurance & Testing
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/cloud-services">
                                  Cloud Services
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/cyber-security">
                                  Cyber Security
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          style={{
                            opacity: 1,
                            transform: 'translate3d(0px, 0px, 0px)',
                          }}
                        >
                          <div className="headerMegaMenu_menu_links__RDsZ_">
                            <a className="headerMegaMenu_sub_title__mX5OX ttl-20 fw-medium" href="/services/digital-marketing">
                              Digital Marketing{' '}
                              <svg
                                className=""
                                width="15"
                                height="15"
                                viewBox="0 0 1538 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                              >
                                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                              </svg>
                            </a>
                            <ul>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/search-engine-optimisation">
                                  Search Engine Optimisation
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/social-media-management">
                                  Social Media Management
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/performance-marketing">
                                  Performance Marketing
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/content-marketing">
                                  Content Marketing
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/marketing-automation">
                                  Marketing Automation
                                </a>
                              </li>
                              <li>
                                <a className="headerMegaMenu_link__RWzsb" href="/services/analytics">
                                  Analytics
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></button>
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
                    style={{"display": "inline-block","verticalAlign": "middle"}}
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
                      style={{"display": "inline-block", "verticalAlign": "middle"}}
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
