import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';
import SplitType from 'split-type';
 
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
 
function SectionTest() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  const designSection = useRef();
 
  useLayoutEffect(() => {
    const element = app.current;
 
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType('#section-title h1', { types: 'chars' });
      split.chars.forEach((item, index)=> {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#section-title',
            // start: "top top",
            // end: "+=150%",
            pin: true,
            scrub: 0.75,
            markers: false,
          },
        })
        .fromTo(
         item,
          {
            opacity: 0,
            x: `-${ (index + 1)*20 }px`,
            filter: `blur(${gsap.utils.mapRange(0, 5, 0, split.chars.length + index, 5)}px)`,
            visibility: 'inherit',
            force3D:true,
            y:'-100px'
          },
          {
            scrollTrigger: {
              trigger: element, // Element to trigger the animation
              start: 'top bottom', // Start animation when the element is at the top of the viewport
              end: 'center center', // End animation when the element is at the center of the viewport
              scrub: true, // Animation progresses as you scroll
            },
            x: '0px',
            ease: 'none',
            opacity: 1,
            rotateX: '0px',
            filter: 'blur(0px)',
            visibility: 'inherit',
          }
        )
      })
 
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-title .video-container',
            scrub: 0.75,
            markers: false,
        },
      }).fromTo('#section-title .video-container', {
          scale: (0.6, 0.6),
          x: '-25%',
          y:'-500px',
          opacity:0,
          visibility: 'hidden',
           
      }, {
        scrollTrigger: {
          trigger: element, // Element to trigger the animation
          start: 'top bottom', // Start animation when the element is at the top of the viewport
          end: 'center center', // End animation when the element is at the center of the viewport
          scrub: true, // Animation progresses as you scroll
        },
        x: 0,
        y:'-500px',
        opacity:1,
        visibility: 'inherit',
        scale: 'none'
      })
 
 
      return () => split.revert(); // context cleanup
    }); // <- scopes all selector text inside the context to this component (optional, default is document)
 
    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);
 
  return (
    <div className='desing'>
      <div id='section-title' ref={designSection} className='align-items-baseline' style={{ textAlign: 'left' }}>
        {/* <div className='d-flex justify-content-center section-title'> */}
        <h1 className='text-light fst-normal designSectionFontSize' style={{ minWidth: 'max-content', left: '-50%', position: 'absolute', top: 0, transform:'translate(-50%, 0)' }} ref={app}>
          Design
        </h1>
        <div className='video-container'>
        <video  src={butterflyVideo} className='videoDesign' width='200px' height='100px' loop autoPlay muted={true}>
          </video>
        </div>
        {/* </div> */}
        {/* <p className='p text-light designSectionBodyTextStyle'>
          Intelligent design is the essence <br />
          of nature; that’s our inspiration <br /> in crafting tomorrow’s tech realm.
        </p>
        <a className='newBanner_navigate_btn__9VKft ' href='works'>
          <span>Learn More</span>
          <span>
            <svg className='' width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg' style={{ display: 'inlineBlock', verticalAlign: 'middle' }}>
              <path d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
              <path d='M1467.329 560.813h-1467.329v-97.822h1467.329z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
            </svg>
          </span>
        </a> */}
      </div>
    </div>
  );
}
 
export default SectionTest;




