import React, { useEffect, useRef, useState } from 'react';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';
import build1Video from "../../assets/video/animation/build1.mp4";
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
          pin: true, // pin the trigger element while active
          start: "left center", // when the top of the trigger hits the top of the viewport
          end: " center", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power2.inOut",
            scale:2
             // the ease of the snap animation ("power3" by default)
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
          // pin the trigger element while active
            start: "top center", // when the top of the trigger hits the top of the viewport
             // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
              snapTo: "labels", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power2.inOut",
              scale:2,
             
              
               // the ease of the snap animation ("power3" by default)
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
        <div className='ms-5 ps-5'>
          <video className='videoDesign   ms-3 ps-lg-6  ' width='200px' height='100px' loop autoPlay muted={true} src={butterflyVideo}>
            <source src={butterflyVideo} type='video/mp4'></source>
          </video>
        </div>
        <div className=' align-items-baseline'>
       
            <div className='text-light d-flex text-center fst-normal designSectionFontSize '>
              {'Design'.split('').map((word) => {
                return word === '' ? <span>&nbsp;</span> : <div className='word '>{word}</div>;
              })}
            </div>
         
          <p className='text-light designSectionBodyTextStyle ps-6 pt-2 ms-6' style={{ 'text-align': 'left !important' }}>
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
      <section id="buildSection pt-5" className="desingSectionContant  wordDivcontainer"  >
        <div className="pe-3 pt-5 buildDivStyle ">
          <video
            className="videoDesign  pe-5  "
            width="200px"
            height="100px"
            loop
            autoPlay
            muted={true}
            src={build1Video}
          >
            <source src={build1Video} type="video/mp4"></source>
          </video>
        </div>
        <div className=" align-items-baseline ">
        <div className='text-light d-flex text-center fst-normal designSectionFontSize'>
              {'Build'.split('').map((word) => {
                return word === '' ? <span>&nbsp;</span> : <div className='wordDiv'>{word}</div>;
              })}
            </div>
          <p
            className="text-light designSectionBodyTextStyle pt-2 ms-6 ms-6"
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
    </div>
  );
}

export default Design;