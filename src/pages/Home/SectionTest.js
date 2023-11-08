import React, { useEffect, useRef, useState } from "react";
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import gsap from "gsap";
import MarketSection from "./MarketSection";
import BuildSection from "./BuildSection";

function SectionTest() {
  const [opacity, setOpacity] = useState(0); // Set initial opacity to 0

  useEffect(() => {
   

    let textAnimation=gsap.timeline();
    textAnimation.from('word',{
      y:100,
      stagger:{
        each:0.06
      }
    })
  },[]);

  return (
    <div className="desing bg-dark  " style={{height:'250vh' }}>


      <section id="flySection "  className="desingSectionContant mt-5 pt-6"    >
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
            <h1 className="text-light   d-flex">
              {'Design'.split('').map((word)=>{
                return word === '' ?<div className="word">&nbsp;</div>:<div className="word">{word}</div>
              })}
             
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
