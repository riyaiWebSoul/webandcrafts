import React, { useEffect, useRef, useState } from 'react';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';
import build1Video from "../../assets/video/animation/build1.mp4";
import MarketVideo from "../../assets/video/animation/market-video-home.mp4";
import gsap from 'gsap';
function Design() {
  useEffect(() => {
    let textAnimate = gsap.timeline();
    let textAnimateStyle=gsap.timeline()
    textAnimate.to(
      '.word',
      {
         x:50,
        stagger:{
          each:0.1
        },
        scrollTrigger: {
          trigger: ".desingcontainer",
          pin: true,  
          start: "left center", 
          end: " center",  
          scrub: 1, 
          snap: {
            snapTo: "labels",  
            duration: { min: 0.2, max: 3 },  
            delay: 0.2, 
            ease: "power2.inOut",
            scale:2
              
          },
        }
      })

      
      textAnimateStyle.to(
        '.wordDiv',{
          x:50,
          stagger:{
            each:0.1
          },
          scrollTrigger: {
            trigger: ".wordDivcontainer",
 
            start: "top center",  
            
            scrub: 1, 
            snap: {
              snapTo: "labels",  
              duration: { min: 0.2, max: 3 },  
              delay: 0.2,  
              ease: "power2.inOut",
              scale:2,
            },
            onclick:{
             display:0
            }
          }
        }
      )
  }, []);
  useEffect(() => {
    let textAnimate = gsap.timeline();
    let textAnimateStyle=gsap.timeline()
    textAnimate.to(
      '.wordMarket',
      {
         x:50,
        stagger:{
          each:0.1
        },
        scrollTrigger: {
          trigger: ".marketcontainer",
          pin: true,  
          start: "left center", 
          end: " center",  
          scrub: 1, 
          snap: {
            snapTo: "labels",  
            duration: { min: 0.2, max: 3 },  
            delay: 0.2, 
            ease: "power2.inOut",
            scale:2
              
          },
        }
      })

      
      textAnimateStyle.to(
        '.wordDiv',{
          x:50,
          stagger:{
            each:0.1
          },
          scrollTrigger: {
            trigger: ".wordDivcontainer",
 
            start: "top center",  
            
            scrub: 1, 
            snap: {
              snapTo: "labels",  
              duration: { min: 0.2, max: 3 },  
              delay: 0.2,  
              ease: "power2.inOut",
              scale:2,
            },
            onclick:{
             display:0
            }
          }
        }
      )
  }, []);
  return (
    <div className='desing bg-dark' style={{paddingTop:'150px'}}>
      <section id='flySection' className='desingSectionContant mt-5 pt-6 desingcontainer'>
        <div className='ms-5 ps-5 ' style={{ position: 'absolute',right: '-30%'}}>
          <video className='videoDesign   ms-3 ps-lg-6  ' width='200px' height='100px' loop autoPlay muted={true} src={butterflyVideo} >
            <source src={butterflyVideo} type='video/mp4'></source>
          </video>
        </div>
        <div className=' align-items-baseline'>
       
            <div className='text-light d-flex text-center fst-normal designSectionFontSize  '>
              {'Design'.split('').map((word) => {
                return word === '' ? <span>&nbsp;</span> : <div className='word '>{word}</div>;
              })}
            </div>
         
          <p className='text-light designSectionBodyTextStyle ps-6 pt-2 ms-6 text-start' style={{ 'text-align': 'left !important' }}>
            Intelligent design is the essence of nature;
            <br />
            that’s our inspiration in crafting tomorrow’s tech realm.
          </p>
          <a className='ps-6 ms-6 newBanner_navigate_btn__9VKft desingSectionAnchore' href='works'>
            <span>Learn More</span>
            <span>
              <svg className='' width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg' style={{ display: 'inlineBlock', verticalAlign: 'middle' }}>
                <path d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
                <path d='M1467.329 560.813h-1467.329v-97.822h1467.329z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
              </svg>
            </span>
          </a>
        </div>
      </section>
      <section id="MarketSection pt-5" className="MarketSectionContant  wordDivcontainer"  >
        <div className="pe-3 pt-5 buildDivStyle ">
        <div className='ms-5 ps-5 ' >
          <video className='videoDesign   ms-3 ps-lg-6 mt-2 ' style={{ position: 'absolute',left: '250%' }} width='200px' height='100px' loop autoPlay muted={true} src={build1Video} >
            <source src={build1Video} type='video/mp4'></source>
          </video>
        </div>
        </div>
        <div className=" align-items-baseline ">
        <div className='text-light d-flex text-center fst-normal designSectionFontSize'>
              {'Build'.split('').map((word) => {
                return word === '' ? <span>&nbsp;</span> : <div className='wordDiv'>{word}</div>;
              })}
            </div>
          <p
            className="text-light designSectionBodyTextStyle pt-2 ms-6 ms-6 text-start"
            style={{ "text-align": "left !important", paddingLeft: "25px" }}
          >
            Intelligent design is the essence of nature;
            <br />
            that’s our inspiration in crafting <br /> tomorrow’s tech realm.
          </p>
          <a
            className="ps-6 ms-3 newBanner_navigate_btn__9VKft desingSectionAnchore"
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
      <section id='marketSection' className='desingSectionContant mt-5 pt-6 marketcontainer'>
        <div className='ms-5 ps-5 ' style={{ position: 'absolute',right: '-30%'}}>
          <video className='videoDesign   ms-3 ps-lg-6  ' width='200px' height='100px' loop autoPlay muted={true} src={MarketVideo} >
            <source src={MarketVideo} type='video/mp4'></source>
          </video>
        </div>
        <div className=' align-items-baseline'>
       
            <div className='text-light d-flex text-center fst-normal designSectionFontSize  '>
              {'Market'.split('').map((word) => {
                return word === '' ? <span>&nbsp;</span> : <div className='wordMarket '>{word}</div>;
              })}
            </div>
         
          <p className='text-light designSectionBodyTextStyle ps-6 pt-2 ms-6 text-start' style={{ 'text-align': 'left !important' }}>
            Intelligent design is the essence of nature;
            <br />
            that’s our inspiration in crafting tomorrow’s tech realm.
          </p>
          <a className='ps-6 ms-6 newBanner_navigate_btn__9VKft desingSectionAnchore' href='works'>
            <span>Learn More</span>
            <span>
              <svg className='' width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg' style={{ display: 'inlineBlock', verticalAlign: 'middle' }}>
                <path d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
                <path d='M1467.329 560.813h-1467.329v-97.822h1467.329z' style={{ fill: 'rgb(255, 255, 255)' }}></path>
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Design;