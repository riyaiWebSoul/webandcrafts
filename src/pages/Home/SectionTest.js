import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import butterflyVideo from "../../assets/video/veil_-_91087 (1080p).mp4";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Box({ children }) {
  return <div className="box ">{children}</div>;
}

function Circle({ children }) {
  return <div className="circle">{children}</div>;
}

function SectionTest() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  const designSection = useRef();
  const tl = useRef(); // Define tl as a useRef

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: app.current,
        start: "center 50vh", // Change this to 50vh
        end: "center 10%", // You can adjust this value as needed
      },
    });

    tl.current
      .to(designSection.current, {
        display: "block", // Show the designSection
        y: -10,
        scale: 1,
        duration: 1,
      })
      .set(".p", {
        x: 10,
        y: 0,
      });

    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="desing" ref={app}>
    
      <div
        id="designSection"
        ref={designSection}
        className=" align-items-baseline"
        
      >
        <Box>
          <h1 className="text-light  text-center fst-normal fw-xl-light ">
            Design
          </h1>
          <video
          className="videoDesign"
          width="200px"
          height="100px"
          loop
          autoPlay
          muted={true}
          src={butterflyVideo}
        >
          <source src={butterflyVideo} type="video/mp4"></source>
        </video>
        </Box>
        <p className="p text-light text-center">
        Intelligent design is the essence <br /> of nature; that’s our
        inspiration <br /> in crafting tomorrow’s tech realm.
      </p>
      <a className="newBanner_navigate_btn__9VKft" href="works">
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

     
    </div>
  );
}

export default SectionTest;
