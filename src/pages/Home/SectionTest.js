import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import butterflyVideo from '../../assets/video/animation/butterFly1.mp4';

const SectionTest = () => {
  const titleRef = useRef(null);
  const butterflyRef = useRef(null);
  const contentRef = useRef(null);
  const marketRef = useRef(null);
  const textRefs = useRef([]);
  const initSplitType = (element, options) => {
    const split = new SplitType(element, options);
    textRefs.current.push(split);
  };

  // Use layout effect to initialize SplitType on component mount
  useLayoutEffect(() => {
    // Target all elements with the class 'split-text'
    const elements = document.querySelectorAll('.split-text');

    // Initialize SplitType for each element
    elements.forEach((element) => {
      initSplitType(element, { types: 'lines,words,chars'});
    });
  }, []);

  // Use effect to update SplitType on content change
  useEffect(() => {
    // Update SplitType for each element
    textRefs.current.forEach((split) => {
      split.lines.forEach((line) => {
        line.split();
      });
    });
  }, [/* add dependencies that may trigger a content change */]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    const titleAnimation = gsap.fromTo(titleRef.current, { opacity: 0, visibility: 'hidden' }, { opacity: 1, visibility: 'visible', duration: 1, ease: 'power3.out' });

    // Butterfly animation
    const butterflyAnimation = gsap.fromTo(butterflyRef.current, { opacity: 0, visibility: 'hidden', scale: 0.6 }, { opacity: 1, visibility: 'visible', scale: 1, duration: 1, ease: 'power3.out' });

    // Content animation
    const contentAnimation = gsap.fromTo(contentRef.current, { opacity: 0, visibility: 'hidden', y: 30 }, { opacity: 1, visibility: 'visible', y: 0, duration: 1, ease: 'power3.out' });
    const marketAnimation = gsap.fromTo(marketRef.current, { opacity: 0, visibility: 'hidden', y: 30 }, { opacity: 1, visibility: 'visible', y: 0, duration: 1, ease: 'power3.out' });

    // ScrollTrigger
    ScrollTrigger.create({
      trigger: titleRef.current,
      animation: titleAnimation,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: butterflyRef.current,
      animation: butterflyAnimation,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: contentRef.current,
      animation: contentAnimation,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    });
    ScrollTrigger.create({
      trigger: marketAnimation.current,
      animation: contentAnimation,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    });
  }, []);

  return (
    <section className='homeDesignWrap_section__yQW8l d-none d-lg-block anim'>
      <div  ref={titleRef} className='homeDesignWrap_title_anim__UyqSN' style={{ opacity: 0, visibility: 'hidden' }}>
        <div className='pin-spacer' style={{ order: 0, placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: 1, display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1920px', height: '1688px', padding: '0px 0px 954px' }}>
          <section className='homeHighlight_section__wGCrg' style={{ translate: 'none', rotate: 'none', scale: 'none', pointerEvents: 'none', opacity: 0, inset: '0px auto auto 0px', margin: '0px', maxWidth: '1920px', width: '1920px', maxHeight: '734px', height: '734px', padding: '200px 0px', transform: 'translate3d(0px, 954px, 0px)' }}>
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
      <div className='pin-spacer' style={{ order: 0, placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: 1, display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1903px', height: '3871px', padding: '0px 0px 3318px' }}>
        <div className='homeDesignWrap_section_inner__T_8p4' style={{ translate: 'none', rotate: 'none', scale: 'none', left: '0px', top: '0px', margin: '0px', maxWidth: '1903px', width: '1903px', maxHeight: '553px', height: '553px', padding: '0px', boxSizing: 'border-box', position: 'fixed', transform: 'translate3d(0px, 0px, 0px)' }}>
          <div className='homeDesignWrap_section_item__1DDQl'>
            <section className='experienceHero_section__0vig7'>
              <div className='container'>
                <div className='experienceHero_textWrapper___Wsub'>
                  <div className='experienceHero_textAnimInner__5fT6J'>
                    <h3 className='experienceHero_textHero__AtOAk experienceHero_experience__901hS'>
                      <span>
                        <span>E</span>
                      </span>
                      <span>
                        <span>x</span>
                      </span>
                      <span>
                        <span>p</span>
                      </span>
                      <span>
                        <span>e</span>
                      </span>
                      <span>
                        <span>r</span>
                      </span>
                      <span>
                        <span>i</span>
                      </span>
                      <span>
                        <span>e</span>
                      </span>
                      <span>
                        <span>n</span>
                      </span>
                      <span>
                        <span>c</span>
                      </span>
                      <span>
                        <span>e</span>
                      </span>
                    </h3>
                    <h2 className='experienceHero_textHero__AtOAk experienceHero_design__KVgKC' style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, visibility: 'inherit', transform: 'translate(-50%, 0%) translate3d(0px, 0px, 0px)' }}>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(9.9901px)', opacity: 0.0011, visibility: 'inherit' }}>D</span>
                      </span>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(9.8403px)', opacity: 0.0177, visibility: 'inherit' }}>e</span>
                      </span>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(9.5105px)', opacity: 0.0544, visibility: 'inherit' }}>s</span>
                      </span>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(9.0006px)', opacity: 0.111, visibility: 'inherit' }}>i</span>
                      </span>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(8.3108px)', opacity: 0.1877, visibility: 'inherit' }}>g</span>
                      </span>
                      <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', filter: 'blur(0px)', opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)', filter: 'blur(7.441px)', opacity: 0.2843, visibility: 'inherit' }}>n</span>
                      </span>
                    </h2>
                  </div>
                  <div ref={butterflyRef} className='experienceHero_butterfly__K8ed5' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-40%, -50%) translate3d(0px, 0px, 0px) scale(0.6, 0.6)', opacity: 0, visibility: 'hidden' }}>
                    <video className='experienceHero_video__w3vCZ' width='100%' height='100%' loop='' muted='' autoplay='' playsinline=''>
                      <source src='/video/butterFly1.mp4' type='video/mp4'></source>
                    </video>
                  </div>
                  <div ref={contentRef} className='experienceHero_content__xPLZO'>
                    <div className='experienceHero_content_wrap__KuFRx'>
                      <p>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', transform: 'translate3d(0px, 30px, 0px) skew(0deg, 3deg)', opacity: 0, visibility: 'hidden' }}>Intelligent design is the essence of nature;</span>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', transform: 'translate3d(0px, 30px, 0px) skew(0deg, 3deg)', opacity: 0, visibility: 'hidden' }}>that’s our inspiration in crafting</span>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', transform: 'translate3d(0px, 30px, 0px) skew(0deg, 3deg)', opacity: 0, visibility: 'hidden' }}>tomorrow’s tech realm</span>
                      </p>
                      <button style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', transform: 'translate3d(0px, 30px, 0px) skew(0deg, 3deg)', opacity: 0, visibility: 'hidden' }}>
                        Learn more
                        <svg className='' style={{ display: 'inline-block', verticalAlign: 'middle' }} width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg'>
                          <path style={{ fill: '#fff' }} d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z'></path>
                          <path style={{ fill: '#fff' }} d='M1467.329 560.813h-1467.329v-97.822h1467.329z'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div ref={marketRef} className='homeDesignWrap_section_item__1DDQl'>
            <section className='homeBuild_section__7bd2O'>
              <div className='container'>
                <div className='homeBuild_textWrapper__0s74f'>
                  <div className='homeBuild_textAnimInner__9P3c_'>
                    <h3 className='homeBuild_textHero__qa81H undefined homeBuild_technology__YBAY2'>
                      <span>
                        <span>T</span>
                      </span>
                      <span>
                        <span>e</span>
                      </span>
                      <span>
                        <span>c</span>
                      </span>
                      <span>
                        <span>h</span>
                      </span>
                      <span>
                        <span>n</span>
                      </span>
                      <span>
                        <span>o</span>
                      </span>
                      <span>
                        <span>l</span>
                      </span>
                      <span>
                        <span>o</span>
                      </span>
                      <span>
                        <span>g</span>
                      </span>
                      <span>
                        <span>y</span>
                      </span>
                    </h3>
                    <h2 className='homeBuild_textHero__qa81H homeBuild_design__IyCsk' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, 0%) translate3d(0px, 0px, 0px)' }}>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(1.588px)', opacity: 0.8412, visibility: 'inherit', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>B</span>
                      </span>
                      {/* ... (similar structure for other letters) */}
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(2.485px)', opacity: 0.7515, visibility: 'inherit', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>u</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3.582px)', opacity: 0.6418, visibility: 'inherit', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>i</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(4.879px)', opacity: 0.5121, visibility: 'inherit', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>l</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(6.3761px)', opacity: 0.3624, visibility: 'inherit', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>d</span>
                      </span>
                    </h2>
                    <div className='homeBuild_butterfly__BMqwH' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-111.159%, -50%) translate3d(0px, 0px, 0px) scale(0.8565, 0.8565)', opacity: 0.6412, visibility: 'inherit' }}>
                      <video className='homeBuild_video__Oji__' width='100%' height='100%' loop muted autoPlay playsInline>
                        <source src='/video/build1.mp4' type='video/mp4' />
                      </video>
                    </div>
                  </div>
                  <div className='homeBuild_content__t0CPr'>
                    <div className='homeBuild_content_wrap__uMCae'>
                      <p>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>Constantly adopting cutting edge technology</span>
                        {/* ... (similar structure for other spans) */}
                      </p>
                      <button style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>
                        Learn more
                        <svg className='' style={{ display: 'inline-block', verticalAlign: 'middle' }} width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg'>
                          <path style={{ fill: '#fff' }} d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z'></path>
                          <path style={{ fill: '#fff' }} d='M1467.329 560.813h-1467.329v-97.822h1467.329z'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class='homeDesignWrap_section_item__1DDQl'>
            <section class='marketHero_section__gRokN' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', opacity: 1, visibility: 'inherit' }}>
              <div class='container'>
                <div class='marketHero_textWrapper__Ovbww'>
                  <div class='marketHero_textAnimInner__BfHpx'>
                    <h3 class='marketHero_textHero__0mDhe marketHero_experience__xl8SC'>
                      <span>
                        <span>D</span>
                      </span>
                      <span>
                        <span>i</span>
                      </span>
                      <span>
                        <span>g</span>
                      </span>
                      <span>
                        <span>i</span>
                      </span>
                      <span>
                        <span>t</span>
                      </span>
                      <span>
                        <span>a</span>
                      </span>
                      <span>
                        <span>l</span>
                      </span>
                    </h3>
                    <h2 className='marketHero_textHero__0mDhe undefined' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' }}>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>M</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>a</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>r</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>k</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>e</span>
                      </span>
                      <span style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>t</span>
                      </span>
                      <span className='marketHero_hidden_one__OhirL' style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>i</span>
                      </span>
                      <span className='marketHero_hidden_one__OhirL' style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>n</span>
                      </span>
                      <span className='marketHero_hidden_one__OhirL' style={{ opacity: 1, visibility: 'inherit' }}>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: 0, visibility: 'hidden', transform: 'perspective(1500px) translate3d(0px, 0px, 0px)' }}>g</span>
                      </span>
                    </h2>
                  </div>
                  <div class='marketHero_butterfly__5X0Op' style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-10%, -50%) translate3d(0px, 0px, 0px) scale(0.6, 0.6)' }}>
                    <video class='marketHero_video__sq9UL' width='100%' height='100%' preload='none' loop='' muted='' autoplay='' playsinline='' load='true'>
                      <source src='/video/market-video-home.mp4' type='video/mp4'></source>
                    </video>
                  </div>
                  <div class='marketHero_content__h7KIz'>
                    <div class='marketHero_content_wrap__bUA_j'>
                      <p>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>Experts in solving the WHY, WHERE</span>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>and HOW of propelling your</span>
                        <span style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>business to new frontiers</span>
                      </p>
                      <button style={{ translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(3px)', opacity: 0, visibility: 'hidden', transform: 'translate3d(0px, 40px, 0px) skew(0deg, 4deg)' }}>
                        Learn more
                        <svg class='' style={{ display: 'inline-block', verticalAlign: 'middle' }} width='16' height='16' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg'>
                          <path style={{ fill: '#fff' }} d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z'></path>
                          <path style={{ fill: '#fff' }} d='M1467.329 560.813h-1467.329v-97.822h1467.329z'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ... (similar structure for other sections) ... */}
        </div>
      </div>
    </section>
  );
};

export default SectionTest;
