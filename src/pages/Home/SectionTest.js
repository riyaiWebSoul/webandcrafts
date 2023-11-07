import React, { useEffect, useRef, useState } from "react";
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import build1Video from "../../assets/video/animation/build1.mp4";
import marketVideo from "../../assets/video/animation/market-video-home.mp4";
import MarketSection from "./MarketSection";
import BuildSection from "./BuildSection";

function SectionTest() {
  const [opacity, setOpacity] = useState(0); // Set initial opacity to 0

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollStartThreshold = 1.7; // Define the start of the range (in pixels)
      const scrollEndThreshold =1.9;   // Define the end of the range (in pixels)
    
      if (scrollY >= scrollStartThreshold*viewportHeight && scrollY <= scrollEndThreshold*viewportHeight) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    }
    
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="desing bg-dark  " style={{height:'250vh' }}>


      <section id="flySection "  className="desingSectionContant mt-5 pt-6"   style={{
        opacity,
        transition: 'opacity 0.5s'  // You can adjust the transition duration
      }}>
        <div className="ms-5 ps-5">
          <video
            className="videoDesign ms-3 ps-lg-6  "
            width="200px"
            height="100px"
            loop
            autoPlay
            muted={true}
            src={butterflyVideo}
          >
            <source src={butterflyVideo} type="video/mp4"></source>
          </video>
        </div>
        <div className=" align-items-baseline">
          <div className="d-flex justify-content-center ">
            <h1 className="text-light  text-center fst-normal designSectionFontSize">
              Design
            </h1>
          </div>
          <p
            className="text-light designSectionBodyTextStyle ps-6 pt-2 ms-6"
            style={{ "text-align": "left !important" }}
          >
            Intelligent design is the essence of nature;
            <br />
            that’s our inspiration in crafting tomorrow’s tech realm.
          </p>
          <a
            className="ps-6 ms-6 newBanner_navigate_btn__9VKft desingSectionAnchore"
            href="works"
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
      </section>
  <BuildSection/>
      <MarketSection/>
    
    </div>
  );
}

export default SectionTest;
