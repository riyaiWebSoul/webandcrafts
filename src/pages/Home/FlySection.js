import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import build1Video from "../../assets/video/animation/butterFly1.mp4";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function FlySection() {
  const app = useRef();

  useLayoutEffect(() => {
    const element = app.current;

    let splitTypeInstance = new SplitType(".section-title styleByGsap designSectionBodyTextStyle", {
      types: "chars",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-title",
        start: "top -350",
        pin: true,
        scrub: 0.00,
        markers: false,
      },
      
    });
 

    tl.to(element, {
      display: 'none',
      y: "-190",
      x: '-120',
    })
      .fromTo(
        element,
        {
          display: 'none',
          y: "-150",
          x: '-120',
          opacity: '0',
          letterSpacing: "-10px",
          transform: "translate3d(-520px, -500px, -550px)",
          filter: "blur(500px)",
          visibility: "hidden",
          paddingBottom: 5,
          zIndex: 0,
          delay: 0,
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom center",
            scrub: false,
          },
        },
        {
          y: "150",
          x: '0',
          ease: "none",
          opacity: 1,
          duration: 1,
          display:'block',
          letterSpacing: "0px",
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: .0,
          },
          transform: "translate3d(0px, 0px, 0px)",
          filter: "blur(0px)",
          visibility: "inherit",
        }
      )    
      .set(
        element,
        {
          display:'none',
        }
      )   

    return () => {
      tl.kill();
      splitTypeInstance.revert();
      
    };
  }, []);





  return (
    <div className="desing" style={{ height: "400px" }}>
      <div
        id="section-title"
        className="align-items-baseline"
        style={{ textAlign: "left" }}
      >
        <div className="d-flex justify-content-center section-title">
          <h1
            className="text-light styleByGsap fst-normal designSectionFontSize"
            style={{
              minWidth: "max-content",
              transform: "translate(-50%, 0%) translate3d(0px, 0px, 0px)",
              display: "none",
              position: "absolute",
              top: '-550px'
            }}
            ref={app}
          >
            <video
              className="videoDesign ms-5 ps-5 "
              width="200px"
              height="100px"
              loop
              autoPlay
              muted={true}
              src={build1Video}
              style={{
                transform: "translate(-50%, 0%) translate3d(0px, 0px, 0px)",
                left: "115%",
                top: 0,
                zIndex: "-41",
              }}
            >
              <source src={build1Video} type="video/mp4"></source>
            </video>
            Design
            <p
              className="  text-light designSectionBodyTextStyle " 
              style={{ marginLeft: "100px" }}
            >
              Intelligent design is the essence <br />
              of nature; that’s our inspiration <br /> in crafting tomorrow’s
              tech realm.
            </p>
            <div style={{ marginLeft: "100px" }}>
              <a
                className="newBanner_navigate_btn__9VKft "
                style={{ fontSize: "initial" }}
              >
                <span>Learn More</span>
                <span>
                  <svg
                    className=""
                    width="16"
                    height="16"
                    viewBox="0 0 1538 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "inlineBlock", verticalAlign: "middle" }}
                  >
                    <path
                      d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                    <path
                      d="M1467.329 560.813h-1467.329v-97.822h1467.329z"
                      style={{ fill: "rgb(255, 255, 255)" }}
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FlySection;
