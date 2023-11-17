import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";

const Section = () => {
  const desingComponent = useRef();
  const app = useRef();
  const designSection = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType(".bodyText h1", { types: "chars" });
      gsap.set(split.chars, {
        color: "gray",
      });

      gsap
        .timeline(
          {
            ease: '0.05',
          scrollTrigger: {
            trigger: "#textSectionDemoSection",
            start: "*-=50%",
            end: "-=150%",
            pin: true,
            scrub: 2,
            markers: true,
          },
        })

        .fromTo(
          split.chars,
          {
            y: "2px",
            color: "gray",
            stagger: 5.05,
          },
          {
            scrollTrigger: {
              trigger: "#textSectionDemoSection",
              start: "*-=20%",
              end: "-=19.9%",
              pin: true,
              scrub: 2,
              markers: true,
            },
            color: "white",
            stagger: 0.05,
          }
        );

      return () => split.revert();
       // context cleanup
    }); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = desingComponent.current;

    const hideSection = () => {
      gsap.fromTo(section,{  filter: `blur(0px)` }, { opacity: 0, display: "none" ,})
      ;
    };

    const showSection = () => {
      gsap.set(section, { opacity: 1, display: "block" });
      gsap.to(section, { opacity: 1 });
    };

    ScrollTrigger.create({
      trigger: section,
      start: "center 110%", // Hide when scrolled up 60%
      end: "top -5%", // Show when scrolled down
      onEnter: showSection,
      onLeave: hideSection,
      onEnterBack: showSection,
      onLeaveBack: hideSection,
    });
    
  }, []);
  useLayoutEffect(() => {
    const element = app.current;

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType("#section-title h1", { types: "chars" });
      split.chars.forEach((item, index) => {
        gsap
          .timeline({
            ease: '15.01',
            scrollTrigger: {
              trigger: "#section-title",
              // start: "top top",
              // end: "+=150%",
              pin: '#section-title',
              anticipatePin: 1,
              scrub: {
                x: 0.75, // Change this value to control the scrubbing on the y-axis
                z: 5.75, // Add this line to control the scrubbing on the z-axis
                y: 1000.1,
              },
              markers: false,
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
                split.chars.length + index,
                1
              )}px)`,
              visibility: "hidden",
              force3D: true,
              y: "-300px",
              delay: 5,
              transition: 0.15,
              
            },
            {
              scrollTrigger: {
                trigger: element, // Element to trigger the animation
                start: "top bottom", // Start animation when the element is at the top of the viewport
                end: "center bottom", // End animation when the element is at the center of the viewport

                scrub: {
                  x: 955.75, // Change this value to control the scrubbing on the y-axis
                  // Add this line to control the scrubbing on the z-axis
                  y: 99.01,
                }, // Animation progresses as you scroll
              },
              x: "-50px",
              y: "-300px",
              ease: "none",
              opacity: 1,
              rotateX: "0px",
              filter: "blur(0px)",
              visibility: "inherit",
              transition: 1.5,
              scrollBehavior: "smooth",
              delay: 10,
            }
          );
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-title .video-container",
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
        .set("#section-title .video-container", {
          y: "100px",
        })
        .fromTo(
          "#section-title .video-container",
          {
            scale: (0.6, 0.6),
            y: "-350px",
            x: "-50px",

            opacity: 0,
            visibility: "hidden",
          },
          {
            scrollTrigger: {
              trigger: element, // Element to trigger the animation
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
        let splits = new SplitType(".peratext", { types: "chars" });
        splits.chars.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#section-title .designSectionBodyTextStyle",
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
         
        .fromTo(
          "#section-title .designSectionBodyTextStyle",
          { scrollTrigger: {
            trigger: element, // Element to trigger the animation
            start: "top -500px", // Start animation when the element is at the top of the viewport
            end: "center 3550px", // End animation when the element is at the center of the viewport
            scrub: 0.1, // Animation progresses as you scroll
          },
            scale: (0.6, 0.6),
            y: "-110",
           
            color: "white",
            stagger: 1.05,
            opacity: 0,
            visibility: "inherit",
          },
          {
            scrollTrigger: {
              trigger: element, // Element to trigger the animation
              start: "center 550px", // Start animation when the element is at the top of the viewport
              end: "center bottom", // End animation when the element is at the center of the viewport
              scrub: 0.1, // Animation progresses as you scroll
            },
            x: `${(index + 1) * 0.1}px`,
            y: "-100px",
            color: "gray",
            opacity: 1,
            stagger: 1.05,
            transition: 1,
            visibility: "inherit",
            scale: (5.6, 1),
          }
        )
        .to("#section-title .designSectionBodyTextStyle",{
            scrollTrigger: {
                trigger: element, // Element to trigger the animation
                start: "center 510px", // Start animation when the element is at the top of the viewport
                end: "center bottom", // End animation when the element is at the center of the viewport
                scrub: 0.1, // Animation progresses as you scroll
              },
            y:'-121px',
            color:'white'})
        ;})
      return () => splits.revert(); // context cleanup
    }); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div className="bg-dark z-3" style={{ height: "1500px" }}>
      <div className="container ">
        <section id="textSectionDemoSection" ref={desingComponent}>
          <div
            className="  d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="bodyText">
              <h1 className="text-start fw-light">
                We believe in a world where <br />
                technology fosters your everyday <br /> experiences. And our
                mission is to <br /> make it happen!
              </h1>
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default Section;
