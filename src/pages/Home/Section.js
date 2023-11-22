import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import FlySection from './FlySection';

const Section = () => {
  const [showButterFly,setShowButterFly]=useState(false)
  const desingComponent = useRef();
  const designSection=useRef();
  const app = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType('#textSection', { types: 'words,chars' });
    split.words.forEach((item, index) => {
      // Initial color setting
      gsap.timeline({
        scrollTrigger: {
          trigger: '#textSection',
          pin: true,
          ease: "power4.out",
          scrub: 0,
          markers: false,
        },
      })
        .fromTo(item, {
          color: 'gray',
          stagger: 0.1,
          markers: false,
          duration: 1,
        }, {
          color: 'white',
        })
        gsap.set('#believeId',{
          color:'red'
         })
 }) // context cleanup

    });

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);
 

  return (
    <div id='mainTextSection' className='bg-dark'>
      <section id='textSection' ref={desingComponent}  style={{
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          left: '0px',
          top: '-0.40625px',
          margin: '0px',
   
          maxHeight: '225px',
          height: '225px',
          padding: '0px',
          boxSizing: 'border-box',
          position: 'fixed',
          // transform: 'none',
         inset: '0px auto auto 0px',
           transform: 'translate(300px, 225px)',
        }}>
 
       
            <h1 className='text-start  fw-light '  >
              We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
            </h1>
         
      
      </section>
 
    </div>
  );
};

export default Section;