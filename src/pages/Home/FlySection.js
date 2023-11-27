import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';




const FlySection = () => {
 const [visibility, setVisibility] = useState('hidden');
 const [paravisibility, setParavisibility] = useState('hidden');
 const designSection = useRef();
 const paragraphDesignSection = useRef();
 const app = useRef();




 useEffect(() => {
   gsap.registerPlugin(ScrollTrigger);
   let reversed = false;


   const splitDesign = new SplitType('#designId', { types: 'line,words,chars' });
   splitDesign.chars.forEach((item, index) => {
    const timeline= gsap.timeline({
       scrollTrigger: {
       
         trigger: '#section-title',
         pin: true,
         scrub:1 ,
         markers: false,
         onSnapComplete: ({ progress }) => {
          // Check if the user has scrolled to the end
          if (progress === 1 && !reversed) {
            // Reverse the animation
            timeline.reverse();
            reversed = true;
          }
        },
         onEnter:()=>setVisibility('visible'),
         onLeave:()=>setVisibility('hidden'),
         onEnterBack:()=>setVisibility('visible'),
         onLeaveBack:()=>setVisibility('hidden'),
       },
     }).fromTo(
       item,
       {
         opacity: 1,
         scale: (2, 1),
         y:'-350',
         filter: `-blur(${gsap.utils.mapRange(15, 0, 0, splitDesign.chars.length + index, 10)}px)`,
       },
       {
         x: '-50px',
         y:'-350',
         ease: 'none',
         opacity: 1,
         rotateX: '0px',
         letterSpacing:'35px',
         filter: 'blur(0px)',
         scale: (3.6, 1.5),
       }
     )
   });




   gsap.timeline({
     scrollTrigger: {
       trigger: '#flyvideoid',
       scrub: { x: 0.75, z: 5.005, y: 1.001 },
       markers: false,
     },
   }).fromTo(
     '#flyvideoid',
     {
       scale: (0.1, 0.1),
       x: '-50px',
       y: '-350px',
       opacity: 0,
       width:'100vw'
     },
     {
       x: '350px',
       y: '-250px',
       width:'100vw',
       opacity: 1,
       transition: 1,
       scale: (2.6, 1),
     }
   );




    const splitMainParagraph = new SplitType('#mainparatext', { types: 'line,words,chars' });
   splitMainParagraph.words.forEach((item, index) => {
     gsap.timeline({
       scrollTrigger: {
         trigger: '#mainparatextSection',
         pin: true,
         scrub: { y: 5.1 },
         markers: false,
         
         onEnter:()=>setParavisibility('visible'),
         onLeave:()=>setParavisibility('hidden'),
         onEnterBack:()=>setParavisibility('visible'),
         onLeaveBack:()=>setParavisibility('hidden'),
       },
     }).fromTo(
       item,
       {
         opacity: 1,
         // filter: `blur(${gsap.utils.mapRange(15, 0, 0, splitMainParagraph.chars.length + index, 1)}px)`,
         y: '-200px',
         force3D: true,
         transition: 0.15,
       },
       {
         x: '-150px',
         y: '-250px',
         ease: 'none',
         opacity: 1,
         rotateX: '0px',
         filter: 'blur(0px)',
         transition: 1.5,
         scrollBehavior: 'smooth',
       }
     ).reverse(item, {
     x: '-150px',
      y: '-250px',
      ease: 'none',
      opacity: 1,
      rotateX: '0px',
      filter: 'blur(0px)',
      transition: 1.5,
      scrollBehavior: 'smooth',
    },{
    opacity: 1,
    filter: `blur(${gsap.utils.mapRange(15, 0, 0, splitMainParagraph.chars.length + index, 1)}px)`,
    y: '-200px',
    force3D: true,
    transition: 0.15,
  }
 
     )
   });
 }, []);




 return (
   <section className='desing'>
      <div className='spacing-small'>We believe in a world where</div>
     <div
       id='section-title'
       ref={designSection}
       className='align-items-baseline'
       style={{
        visibility:visibility
       }}
     >
     
       <div
         className='text-light fst-normal designSectionFontSize section'
         
         id='designId'
         ref={app}
       >
         Design
       </div>
       <div
         id='flyvideoid'
         className='video-container experienceHero_butterfly__K8ed5'
       
       >
         <video src={butterflyVideo} className='videoDesign experienceHero_video__w3vCZ' width='200px' height='100px' loop autoPlay muted={true}></video>
       </div>
     
       <div className='designSectionBodyTextStyle text-light' id='mainparatextSection' ref={paragraphDesignSection}>
        <div  >
        <p id='mainparatext' className='text-light mt-5 ' style={{
        visibility:paravisibility
       }}>
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
         </a>
        </div>
       
       </div>
     </div>
   
   
     <div className='spacing-small'>We believe in a world where</div>
   </section>
 );
};




export default FlySection;









  