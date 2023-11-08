import React, { useLayoutEffect, useRef,useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import build1Video from "../../assets/video/animation/market-video-home.mp4";
import SplitType from "split-type";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function MarketSection() {
  const [reversed, setReversed] = useState(false);
  const appMarket = useRef();
  const designSectionMarket = useRef();
  const ptagStyle = useRef();
  const pstyleMarket = useRef();

  useLayoutEffect(() => {
    const elementMarket = appMarket.current;
    const pelementMarket = pstyleMarket.current;
    gsap.registerPlugin(ScrollTrigger);
    let ctxMarket = gsap.context(() => {
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
          elementMarket,
          {
            x: "0",
            opacity: 0,
            letterSpacing: "-20px",
            transform: "translate3d(-20px, 0px, 0px)",
            filter: "blur(5px)",
            visibility: "hidden",
            padding: 5,
          },
          {
            x: "0%",
            ease: "none",
            opacity: 1,
            duration: 1,
            letterSpacing: "0px",
            scrollTrigger: {
              trigger: elementMarket, // Element to trigger the animation
              start: "top bottom", // Start animation when the elementMarket is at the top of the viewport
              end: "center center", // End animation when the elementMarket is at the center of the viewport
              scrub: true, // Animation progresses as you scroll
            },
            transform: "translate3d(0px, 0px, 0px)",
            filter: "blur(0px)",
            visibility: "inherit",
          }
        );

      return () => split.revert(); // context cleanup
    }); // <- scopes all selector text inside the context to this component (optional, default is document)

    let ptageElementMarket = gsap.context(() => {
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
          },
        })
        .to(elementMarket, {
          x: "0",
          opacity: 0,
          letterSpacing: "-20px",
          transform: "translate3d(-20px, 0px, 0px)",
          filter: "blur(5px)",
          visibility: "hidden",
          padding: 5,
          scale:1
        });

      return () => split.revert(); // context cleanup
    });
    return () => ctxMarket, ptageElementMarket.revert();
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = designSectionMarket.current;

    const hideSection = () => {
        gsap.to(section, { opacity: 0, display: 'none', duration: 0.3 });
    };

    const showSection = () => {
        gsap.set(section, { opacity: 1, display: 'block' });
        gsap.to(section, { opacity: 1, duration: 0.3 });
    };

    ScrollTrigger.create({
        trigger: section,
        start: 'top 100%', // Hide when scrolled up 60%
        end: 'top top', // Show when scrolled down
        onEnter: showSection,
        onLeave: hideSection,
        onEnterBack: showSection,
        onLeaveBack: hideSection,
    });
}, []);

  return (
    <div className="desing" style={{ height:"650px"}}>
      <div
        id="section-title"
        ref={designSectionMarket}
        className="align-items-baseline"
        style={{ textAlign: "left" }}
      >
        <div className="d-flex justify-content-center section-title">
          <h1
            className="text-light styleByGsap fst-normal designSectionFontSize"
            style={{
              minWidth: "max-content",
              transform: "translate(-50%, 0%) translate3d(0px, 0px, 0px)",
              
             
              top: 0,
            }}
            ref={appMarket}
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
                top: '50px',
                zIndex: "-41",
              }}
            >
              <source src={build1Video} type="video/mp4"></source>
            </video>
            Market
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

export default MarketSection;
