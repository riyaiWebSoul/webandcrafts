import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import build1Video from "../../assets/video/animation/build1.mp4";
import Section from "./Section";
const SectionTest = () => {
  const [showFly,setShowFly]=useState(false)
  const desingComponent = useRef();
  const builddesingComponent = useRef();
const [buildShow,setBuildShow]=useState(false)
  const designSectionBuild=useRef
 
  const buildapp = useRef();

  const   builddesignSection = useRef();
 
 
  useLayoutEffect(() => {
    const buildelement = buildapp.current;

    gsap.registerPlugin(ScrollTrigger);
    let buildctx = gsap.context(() => {
      
      let buildsplit = new SplitType("#buildsection-title h2", { types: "chars" });
      buildsplit.chars.forEach((item, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#buildsection-title",
              start: "top top",
              end: "top +=150%",
              pin: true,
            
              scrub: {
                x: 0.75, // Change this value to control the scrubbing on the y-axis
                z: 5.75, // Add this line to control the scrubbing on the z-axis
                y: 0.1,
              },
              markers: true,
            },
          })
           
          .fromTo(
            item,
            {
              opacity: 0,
              x: `-${(index + 1) *50.1}px`,
              filter: `blur(${gsap.utils.mapRange(
                15,
                0,
                0,
                buildsplit.chars.length + index,
                1
              )}px)`,
              visibility: "hidden",
              force3D: true,
              y: "-200px",
              delay: 5,
              transition: 0.15,
              
            },
            {
              scrollTrigger: {
                trigger: buildelement, // Element to trigger the animation
                start: "top bottom", // Start animation when the element is at the top of the viewport
                end: "center bottom", // End animation when the element is at the center of the viewport

                scrub: {
                  x: 955.75, // Change this value to control the scrubbing on the y-axis
                  // Add this line to control the scrubbing on the z-axis
                  y: 99.01,
                }, // Animation progresses as you scroll
              },
              x: "-50px",
              y: "-200px",
              ease: "none",
              opacity: 1,
              rotateX: "0px",
              filter: "blur(0px)",
              visibility: "inherit",
              transition: 1.5,
              scrollBehavior: "smooth",
              delay: 10,
              
            }
          )
         
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#buildsection-title .buildvideo-container",
            scrub: {
              x: 99.75, // Change this value to control the scrubbing on the y-axis
              z: 5.005, // Add this line to control the scrubbing on the z-axis
              y: 5.001,
            },
            start: "top bottom", // Start animation when the element is at the top of the viewport
            end: "center center",
            markers: false,
          },
        })
        .set("#buildsection-title .buildvideo-container", {
          y: "100px",
        })
        .fromTo(
          "#buildsection-title .buildvideo-container",
          {
            scale: (0.6, 0.6),
            y: "-350px",
            x: "-50px",

            opacity: 0,
            visibility: "hidden",
          },
          {
            scrollTrigger: {
              trigger: buildelement, // Element to trigger the animation
              start: "top 550px", // Start animation when the element is at the top of the viewport
              end: "center bottom", // End animation when the element is at the center of the viewport
              scrub: true, // Animation progresses as you scroll
            },
            x: "350px",
            y: "-350px",
            opacity: 1,
            transition: 1,
            visibility: "inherit",
            scale: (5.6, 1),
          }
           
        );
        let buildsplits = new SplitType(".peratext", { types: "chars" });
        buildsplits.chars.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-title .builddesignSectionBodyTextStyle",
            scrub: {
              x: 0.75, // Change this value to control the scrubbing on the y-axis
              z: 5.005, // Add this line to control the scrubbing on the z-axis
              y: 5.001,
            },
            start: "top -50px", // Start animation when the element is at the top of the viewport
            end: "center center",
            markers: false,
          },
        })
         
        .from(
          "#buildsection-title .builddesignSectionBodyTextStyle",
          { scrollTrigger: {
            trigger: buildelement, // Element to trigger the animation
            start: "center 550px", // Start animation when the element is at the top of the viewport
            end: "center bottom",  // End animation when the element is at the center of the viewport
            scrub: 0.1,
            pin:true
          },
            scaleY: (0.6, 0.6),
            scaleX: (1.6, .1),
            x: "-205px",
            y:'-100px',
            color: "white",
            stagger: 1.05,
            opacity: 0,
            visibility: "inherit",
            
          })
          .to("#buildsection-title .builddesignSectionBodyTextStyle",{
            scrollTrigger: {
              trigger: buildelement, // Element to trigger the animation
              start: "center 550px", // Start animation when the element is at the top of the viewport
              end: "center bottom", // End animation when the element is at the center of the viewport
              scrub: 0.1, // Animation progresses as you scroll
            },
            x: "0px",
            y:'-100px',
            scaleX: (28.6, 1.1),
            color: "white",
             
            opacity: 1,
            stagger: 1.05,
            transition: 1,
            visibility: "inherit",
              
            scaleY: (5.6, 1)
          }
        )
        .to("#buildsection-title .builddesignSectionBodyTextStyle",{
          scrollTrigger: {
            trigger: buildelement, // Element to trigger the animation
            start: "center 590px", // Start animation when the element is at the top of the viewport
            end: "center bottom", // End animation when the element is at the center of the viewport
            scrub: 0.1, // Animation progresses as you scroll
          },
          x: '0px',
          color: "gray",
          opacity: 1,
          stagger: 1.05,
          transition: 1,
          visibility: "inherit",
          scaleX: (3.6, 1),
          scaleY: (5.6, 1),
        }
      )
     
  
        ;})
      return () => buildsplits.revert(); // context cleanup
    });
    return () => buildctx.revert();
     
  }, []);




  return (
    <div className="bg-dark z-3"   >
{/* <Section/> */}
<div className="spacer" style={{ height: '100vh' }}></div>
      <section className="desing" data-speed="0.1"  >
        <div
          id="buildsection-title"
          ref={builddesignSection}
          className="align-items-baseline"
          style={{ textAlign: "left" }}
        >
          {/* <div className='d-flex justify-content-center section-title'> */}
          <h1
            className="text-light fst-normal designSectionFontSize buildsection"
            style={{
              minWidth: "max-content",
              left: "50%",
              position: "absolute",
              top: 0,
              transform: "translate(-50%, 0)",
            }} id="designId"
            ref={buildapp}
          >
            Build
          </h1>
          <div className="buildvideo-container">
            <video
              src={butterflyVideo}
              className="videoDesign"
              width="200px"
              height="100px"
              loop
              autoPlay
              muted={true}
            ></video>
          </div>
          {/* </div> */}
          <div className="builddesignSectionBodyTextStyle" style={{width:'500px'}}>
            <p className="  peratext  "  >
              Intelligent design is the essence <br />
              of nature; that’s our inspiration <br /> in crafting tomorrow’s
              tech realm.
            </p>
            <a className="newBanner_navigate_btn__9VKft " href="works">
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
      </section>
      <div className="spacer" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default SectionTest;
