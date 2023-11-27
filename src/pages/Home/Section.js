import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




const Section = () => {
 const [visibility,setVisibility]=useState('hidden')
  const desingComponent = useRef(null);
 


  useLayoutEffect(() => {


const el=desingComponent.current;
gsap.timeline({
  scrollTrigger: {
    trigger: '#textSection',
    pin: true,
    scrub: 0.1,
    markers: false,
  },
})
    let ctx = gsap.context(() => {
      gsap.set('#believeId',{
        y:'-150px',
     
      })
      let split = new SplitType('#believeId', { types: 'lines,words,chars' });
    split.words.forEach((item, index) => {
      // Initial color setting
      gsap.set('#believeId', { position: 'relative' }); // Change position to relative


      gsap.timeline({
        scrollTrigger: {
          trigger: '#textSection',
          pin: true,
          scrub: 0.1,
          markers: false,
          onEnter:()=>setVisibility('visible'),
          onEnterBack:()=>setVisibility('visible'),
          onLeave:()=>setVisibility('hidden'),
          onLeaveBack:()=>setVisibility('hidden'),
         
        },
       
      })
        .fromTo(item, {
          color: 'gray',
          stagger: 0.1,
          markers: false,
          duration: 1,
          y:'150px'
       
        }, {
          color: 'white',
          duration: 5,
          y:'150px',
          delay:10,
          onComplete: () => {
       
            // Add a delay of 5 seconds after the animation is complete
            gsap.delayedCall(5, () => {
              // Your code to be executed after the delay
              console.log('Animation complete, and 5-second delay is over');
             
              // Perform any other action here, e.g., trigger another animation or update state
            });
          },
        })
 }) // context cleanup
    });


    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);
 


  return (
    <div id='mainTextSection' className='bg-dark' >
       
      <section id='textSection' ref={desingComponent}   >
     
        <div className='container d-flex justify-content-center align-items-center' style={{visibility:visibility}} >
            <h1 className='text-start  fw-light ' id='believeId'  style={{position:'absolute'}}>
              We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
            </h1>
       
        </div>
      </section>
 
    </div>
  );
};


export default Section;



