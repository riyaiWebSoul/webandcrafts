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
      let split = new SplitType('#desingComponent', { types: 'chars' });
    split.chars.forEach((item, index) => {
      // Initial color setting


      gsap.timeline({
        scrollTrigger: {
          trigger: '#desingComponent',
          pin: true,
          scrub: 0.1,
          markers: false,
        },
      })
        .fromTo(item, {
          color: 'gray',
          stagger: 0.1,
          markers: false,
          duration: 1,
          opacity: 0, visibility: 'hidden'
        }, {
          color: 'white',
          opacity: 1, visibility: 'inherit'
        })
 }) // context cleanup
    });

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);
 

  return (
    <div id='mainTextSection' className=' bg-dark'>
      {/* <section className='container' id='textSection' ref={desingComponent}  style={{
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          left: '0px',
          top: '-0.40625px',
          margin: '0px',
width:'60vw',
          maxHeight: '225px',
          height: '225px',
          padding: '0px',
          boxSizing: 'border-box',
          position: 'fixed' ,
         inset: '0px auto auto 0px',
            transform: 'translate(300px, 225px)',
        }}>
            <h1 className='text-start  fw-light ' id='believeId'>
              We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
            </h1>
      </section> */}
      <div id='mainTextSection'  className='homeDesignWrap_title_anim__UyqSN' style={{ opacity: 0, visibility: 'hidden' }}>
        <section className='homeHighlight_section__wGCrg' ref={desingComponent} style={{ translate: 'none', rotate: 'none', scale: 'none', pointerEvents: 'none', opacity: 0, inset: '0px auto auto 0px', margin: '0px', maxWidth: '1920px', width: '1920px', maxHeight: '734px', height: '734px', padding: '200px 0px', transform: 'translate3d(0px, 954px, 0px)' }}>
          <div className='container'>
            <div className='homeHighlight_textWrapper__p2hOh' style={{ '--size-blend': '100%' }}>
              <h2 className='homeHighlight_title__Ns4Z3'>
                <span className='homeHighlight_nonBled__ZXxMH'>We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!</span>
                <span className='homeHighlight_bled__GZQmK'>We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!</span>
              </h2>
            </div>
          </div>
        </section>
      
    </div>
    </div>
  );
};

export default Section;
