import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomeDesignAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    if (container) {
      // Create GSAP animations here

      // Example animation for the title
      gsap.to('.homeDesignWrap_title_anim__UyqSN', {
        opacity: 1,
        visibility: 'visible',
        duration: 1,
        delay: 5,
      });

      // Animation for the h3 element with the class experienceHero_textHero__AtOAk
      gsap.from('.experienceHero_textHero__AtOAk', {
        opacity: 0, // Start with opacity 0
        y: 20,      // Move it down by 20 pixels
        duration: 1, // Duration of the animation
        delay: 1,    // Delay before the animation starts
        scrollTrigger: {
          trigger: container, // Trigger the animation when the container is in view
          start: 'top center+=50%', // Start the animation when the container is 50% in view
          end: 'bottom center', // End the animation when the container is centered
          scrub: 1, // Smoothly animate when scrolling
        },
      });
    }
  }, []);

  return (
    <section className="homeDesignWrap_section__yQW8l anim">
      <div className="homeDesignWrap_title_anim__UyqSN" style={{ opacity: 0, visibility: 'hidden' }}>
     
      </div>
      <div className="pin-spacer" style={{ order: 0, placeSelf: 'auto', gridArea: 'auto / auto / auto / auto', zIndex: 'auto', float: 'none', flexShrink: 1, display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1351px', height: '4333px', padding: '0px 0px 3714px' }}>
        <div className="homeDesignWrap_section_inner__T_8p4" style={{ transform: 'none', rotate: 'none', scale: 'none', left: '0px', top: '0px', margin: '0px', maxWidth: '1351px', width: '1351px', maxHeight: '619px', height: '619px', padding: '0px', boxSizing: 'border-box', position: 'fixed', transform: 'translate3d(0px, 0px, 0px)' }}>
          <div className="homeDesignWrap_section_item__1DDQl">
            <section className="experienceHero_section__0vig7">
              <div className="container">
                <div className="experienceHero_textWrapper___Wsub">
                  <div className="experienceHero_textAnimInner__5fT6J">
                    <h3 className="experienceHero_textHero__AtOAk experienceHero_experience__901hS">
                      <span><span>E</span></span>
                      <span><span>x</span></span>
                      <span><span>p</span></span>
                      <span><span>e</span></span>
                      <span><span>r</span></span>
                      <span><span>i</span></span>
                      <span><span>e</span></span>
                      <span><span>n</span></span>
                      <span><span>c</span></span>
                      <span><span>e</span></span>
                    </h3>
                    <h2 className="experienceHero_textHero__AtOAk experienceHero_design__KVgKC" style={{ transform: 'translate(-50%, 0%) translate3d(0px, 0px, 0px)' }}>
                        Design
                    </h2>
                  </div>
                  <div className="experienceHero_butterfly__K8ed5" style={{ transform: 'translate(-34.553%, -50%) translate3d(0px, 0px, 0px) scale(0.6545, 0.6545)', opacity: 0.1362, visibility: 'inherit' }}>
                    <video className="experienceHero_video__w3vCZ" width="100%" height="100%" loop={true} autoPlay={true} playsInline={true}>
                      <source src="/video/butterFly1.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="experienceHero_content__xPLZO">
                    <div className="experienceHero_content_wrap__KuFRx">
                      <p>
                        <span style={{ transform: 'translate3d(0px, 29.4108px, 0px) skew(0deg, 2.9411deg)', opacity: 0.0196, visibility: 'inherit', filter: 'blur(2.9411px)' }}>Intelligent design is the essence of nature;</span>
                        <span style={{ transform: 'translate3d(0px, 29.705px, 0px) skew(0deg, 2.9705deg)', opacity: 0.0098, visibility: 'inherit', filter: 'blur(2.9705px)' }}>that’s our inspiration in crafting</span>
                        <span style={{ transform: 'translate3d(0px, 29.8801px, 0px) skew(0deg, 2.988deg)', opacity: 0.004, visibility: 'inherit', filter: 'blur(2.988px)' }}>tomorrow’s tech realm</span>
                      </p>
                      <button>Learn more<svg className="" width="16" height="16" viewBox="0 0 1538 1024" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z" style={{ fill: 'rgb(255, 255, 255)' }}></path>
                        <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z" style={{ fill: 'rgb(255, 255, 255)' }}></path>
                      </svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDesignAnimation;
;

