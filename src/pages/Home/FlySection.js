import React, { useLayoutEffect, useRef,useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import build1Video from "../../assets/video/animation/butterFly1.mp4";
import SplitType from "split-type";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function FlySection() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  const designSection = useRef();
  const ptagStyle = useRef();
  const pstyle = useRef();

  useLayoutEffect(() => {
    const element = app.current;
    const pelement = pstyle.current;
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType(".section-title styleByGsap", {
        types: "chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-title",
            // start: "top top",
            // end: "+=150%",
            pin: true,
            scrub: 0.75,
            markers: true,
          },
        })
        .fromTo(
          element,
          {
            x: "0",
            opacity: 0,
            letterSpacing: "-20px",
            transform: "translate3d(-20px, 0px, 0px)",
            filter: "blur(5px)",
            visibility: "hidden",
            paddingBottom: 5,
            display:'none'
          },
          {
            x: "0%",
            ease: "none",
            opacity: 1,
            duration: 1,
            display:'block',
            letterSpacing: "0px",
            scrollTrigger: {
              trigger: element, // Element to trigger the animation
              start: "top bottom", // Start animation when the element is at the top of the viewport
              end: "center center", // End animation when the element is at the center of the viewport
              scrub: true, // Animation progresses as you scroll
            },
            transform: "translate3d(0px, 0px, 0px)",
            filter: "blur(0px)",
            visibility: "inherit",
          }
        );
        

      return () => split.revert(); // context cleanup
    }); // <- scopes all selector text inside the context to this component (optional, default is document)

    let ptageElement = gsap.context(() => {
      let split = new SplitType(".section-title p", { types: "chars" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-title",
            // start: "top top",
            // end: "+=150%",
            pin: false,
            scrub: 0.75,
            markers: true,
           
            transform: 'translate3d(100px, 50px, 0px) skew(0deg, 30deg)'
          },
        })
        .to(element, {
          x: "0",
          opacity: 0,
          letterSpacing: "-20px",
          transform: "translate3d(-20px, 0px, 0px)",
          filter: "blur(5px)",
          visibility: "hidden",
          padding: 5,
          scale:1,
          transform: 'translate3d(10px, 500px, 0px) skew(0deg, 3deg)'
        });

      return () => split.revert(); // context cleanup
    });
    return () => ctx, ptageElement.revert();
  }, []);
  useEffect(() => {
    const section = app.current;
    const hideSection = () => {
      gsap.to(section, { opacity: 0, display: 'none', duration: 0.3  });
    };

    const showSection = () => {
      // gsap.set(section, { opacity: 0, display: 'block' });
      gsap.to(section, { opacity: 1, duration: 0.2  });
    };

    ScrollTrigger.create({
      trigger: section,
      start: 'top 100%', // Hide when scrolled up to 70%
      end: 'top -0%', // Show when scrolled down to 40%
      onEnter: showSection,
      onLeave: hideSection,
      onEnterBack: showSection,
      onLeaveBack: hideSection,
    });
    
  }
  , []);


  return (
    <div className="desing" style={{ height:"500px" }}>
      <div
        id="section-title"
        ref={designSection}
        className="align-items-baseline"
        style={{ textAlign: "left" }}
      >
        <div className="d-flex justify-content-center section-title">
          <h1
            className="text-light styleByGsap fst-normal designSectionFontSize"
            style={{
              minWidth: "max-content",
              transform: "translate(-50%, 0%) translate3d(0px, 0px, 0px)",
              display:'none',
              position: "absolute",
              top: '-200px',

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
              className="  text-light designSectionBodyTextStyle"
              style={{ marginLeft: "100px" }}
            >
              Intelligent design is the essence <br />
              of nature; that’s our inspiration <br /> in crafting tomorrow’s
              tech realm.
            </p>
            <div style={{marginLeft: '100px'}}><a
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
