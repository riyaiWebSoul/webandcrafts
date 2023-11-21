import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';

const FlySection = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const designSection = useRef();
  const paragraphDesignSection = useRef();
  const app = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitDesign = new SplitType('#designId', { types: 'line,words,chars' });
    splitDesign.chars.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-title',
          pin: true,
          scrub: { y: 5.1 },
          markers: false,
        },
      }).fromTo(
        item,
        {
          opacity: 0,
          filter: `blur(${gsap.utils.mapRange(15, 0, 0, splitDesign.chars.length + index, 1)}px)`,
          y: '-200px',
        },
        {
          x: '-150px',
          y: '-200px',
          ease: 'none',
          opacity: 1,
          rotateX: '0px',
          filter: 'blur(0px)',
          transition: 1.5,
          scrollBehavior: 'smooth',
        }
      );
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#flyvideoid .video-container',
        start:'center bottom',
        scrub: { x: 0.75, z: 5.005, y: 1.001 },
        markers: false,
      },
    }).fromTo(
      '#flyvideoid',
      {
        scale: (0.1, 0.1),
        x: '-50px',
        y: '-200px',
        opacity: 0,
      },
      {
        x: '350px',
        y: '-250px',
        opacity: 1,
        transition: 1,
        scale: (2.6, 1),
      }
    );

    const splitParagraph = new SplitType('#paratext', { types: 'lines,words,chars' });
    splitParagraph.lines.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#section-title',
          pin: true,
          scrub: { x: 0.75, z: 5.75, y: 0.1 },
          markers: true,
          onComplete: () => {
            setShowParagraph(true);
          },
        },
      }).fromTo(
        item,
        {
          opacity: 0,
          x: `-${(index + 1) * 50.1}px`,
          filter: `blur(${gsap.utils.mapRange(15, 0, 0, splitParagraph.chars.length + index, 1)}px)`,
          y: '-2000px',
          force3D: true,
          delay: 5,
        },
        {
          x: '-50px',
          ease: 'none',
          opacity: 1,
          rotateX: '0px',
          filter: 'blur(0px)',
          y: '-2000px',
          transition: 1.5,
          scrollBehavior: 'smooth',
          delay: 10,
        }
      );
    });

    const splitMainParagraph = new SplitType('#mainparatext', { types: 'line,words,chars' });
    splitMainParagraph.chars.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#mainparatextSection',
          pin: true,
          scrub: { y: 5.1 },
          markers: false,
        },
      }).fromTo(
        item,
        {
          opacity: 0,
          filter: `blur(${gsap.utils.mapRange(15, 0, 0, splitMainParagraph.chars.length + index, 1)}px)`,
          y: '-100px',
          force3D: true,
          transition: 0.15,
        },
        {
          x: '-150px',
          y: '-100px',
          ease: 'none',
          opacity: 1,
          rotateX: '0px',
          filter: 'blur(0px)',
          transition: 1.5,
          scrollBehavior: 'smooth',
        }
      );
    });
  }, []);

  return (
    <section className='desing'>
      <div
        id='section-title'
        ref={designSection}
        className='align-items-baseline'
        style={{
          textAlign: 'left',
          transform: 'translate(-160px, 395px)',
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          padding: '0px',
          boxSizing: 'border-box',
        }}
      >
        <p id='paratext' className='text-dark mb-5' style={{ visibility: 'hidden' }}>
          Intelligent design is the essence <br />
          of nature; that’s our inspiration <br /> in crafting tomorrow’s tech realm.
        </p>
        <div
          className='text-light fst-normal designSectionFontSize section'
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            left: '0px',
            margin: '0px',
            maxHeight: '2205px',
            padding: '0px',
            boxSizing: 'border-box',
            position: 'absolute',
            inset: '0px auto auto 0px',
            maxWidth: '100vw',
            width: '100vw',
            transform: 'translate(150px, 0px)',
          }}
          id='designId'
          ref={app}
        >
          Design
        </div>
        <div
          id='flyvideoid'
          className='video-container experienceHero_butterfly__K8ed5'
          style={{
            transform: 'translate3d(306.435px, -244.554px, 0px) scale(0.902, 0.902)',
             opacity: 0.891,
              translate: 'none',
               rotate: 'none',
                inset: '0px auto auto 50%',
                scale: 'none',
                 visibility: 'inherit',
                 boxSizing: 'border-box',
                  position: 'absolute',
                  transition: 'all 0.8911s ease 0s',
          }}
        >
          <video src={butterflyVideo} className='videoDesign experienceHero_video__w3vCZ' width='200px' height='100px' loop autoPlay muted={true}></video>
        </div>
        <div className='designSectionBodyTextStyle text-light'>
          <p className='text-dark '></p>
        </div>
        <div className='designSectionBodyTextStyle text-light'>
          <p id='mainparatext' className='text-light mt-5 ' style={{ marginTop: '0px' }}>
            Intelligent design is the essence <br />
            of nature; that’s our inspiration <br /> in crafting tomorrow’s tech realm.
          </p>
        </div>
      </div>
      {showParagraph ? (
        <div className='designSectionBodyTextStyle text-light' id='mainparatextSection' ref={paragraphDesignSection}>
          <p id='mainparatext' className='text-light mt-5 '>
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
      ) : null}
    </section>
  );
};

export default FlySection;
