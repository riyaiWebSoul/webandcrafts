import React, { useEffect, useRef, useState } from "react";
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import build1Video from "../../assets/video/animation/build1.mp4";
import marketVideo from "../../assets/video/animation/market-video-home.mp4";

function BuildSection() {
  const [opacity, setOpacity] = useState(0); // Set initial opacity to 0

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollStartThreshold =2; // Define the start of the range (in pixels)
      const scrollEndThreshold =2.4;   // Define the end of the range (in pixels)
    
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
    <div className="desing bg-dark h-100">
      <section id="buildSection pt-5" className="desingSectionContant" style={{
        opacity,
        transition: 'opacity 0.5s' ,paddingBottom:'350px' // You can adjust the transition duration
      }}>
        <div className="pe-3 pt-5 buildDivStyle">
          <video
            className="videoDesign  pe-5  "
            width="200px"
            height="100px"
            loop
            autoPlay
            muted={true}
            src={build1Video}
          >
            <source src={build1Video} type="video/mp4"></source>
          </video>
        </div>
        <div className=" align-items-baseline">
          <div className="d-flex justify-content-center ">
            <h1 className="text-light  text-center fst-normal designSectionFontSize">
              Build
            </h1>
          </div>
          <p
            className="text-light designSectionBodyTextStyle pt-2 ms-6 ms-6"
            style={{ "text-align": "left !important", paddingLeft: "25px" }}
          >
            Intelligent design is the essence of nature;
            <br />
            that’s our inspiration in crafting <br /> tomorrow’s tech realm.
          </p>
          <a
            className="ps-6 ms-3 newBanner_navigate_btn__9VKft desingSectionAnchore"
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
    </div>
  );
}

export default BuildSection;
