import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import butterflyVideo from "../../assets/video/animation/butterFly1.mp4";
import FlySection from './FlySection';
import BuildSection from './BuildSection';
import MarketSection from './MarketSection';

const Section = () => {
  const [showButterFly, setShowButterFly] = useState(false);
  const desingComponent = useRef();
  const designSection = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let split = new SplitType('#textSection', { types: 'words,chars' });
      split.words.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: '#textSection',
            pin: true,
            ease: "power4.out",
            scrub: 0,
            markers: false,
          },
        }).set(item,{
          y:'-500',
         
          color:'black'
        })
          .fromTo(item, {
            color: 'gray',
            stagger: 0.1,
            y:'-155',
            markers: false,
            duration: 1,
          }, {
            color: 'white',
            y:'-151',
           
          })

      }); // context cleanup
    });

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div>
 <div id='mainTextSection' className='bg-dark p-5' style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'fit-content', // 100% of the viewport height
      overflow: 'hidden', // Hide content outside the viewport
    }}>
      <section
        id='textSection'
        ref={desingComponent}
        style={{
          position: 'relative', // Set position to relative
          maxWidth: '100vw', // Set a maximum width for the content
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1 className='text-start fw-light'>
          We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
        </h1>
      </section>
      
    </div>
    <FlySection/>
      <BuildSection/>
      <MarketSection/>
    </div>
   
  );
};

export default Section;
