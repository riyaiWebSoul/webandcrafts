import React, { useRef, useLayoutEffect,useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = () => {
    const desingComponent = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            let split = new SplitType(".bodyText h1", { types: 'chars' });
            gsap.set(split.chars, {
                color: "gray",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#textSectionDemoSection",
                    start: "*-=10%",
                    end: "-=150%",
                    pin: true,
                    scrub: 5,
                    markers: true,
                }
            }).to(split.chars, {
                color: "white", // Change the color during scroll
                stagger: 0.1,
            });

            return () => split.revert(); // context cleanup

        }); // <- scopes all selector text inside the context to this component (optional, default is document)

        return () => ctx.revert(); // useLayoutEffect cleanup
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = desingComponent.current;

        const hideSection = () => {
            gsap.to(section, { opacity: 0, display: 'none', duration: 0.5 });
        };

        const showSection = () => {
            gsap.set(section, { opacity: 0, display: 'block' });
            gsap.to(section, { opacity: 1, duration: 0.0 });
        };

        ScrollTrigger.create({
            trigger: section,
            start: 'top 50%', // Hide when scrolled up 60%
            end: 'top top', // Show when scrolled down
            onEnter: showSection,
            onLeave: hideSection,
            onEnterBack: showSection,
            onLeaveBack: hideSection,
        });
    }, []);
    

    return (
        <div className='bg-dark z-3'>
   <div className='container '>
            <section id="textSectionDemoSection" ref={desingComponent}>
                <div className='  d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <div className='bodyText'>
                        <h1 className='text-start  fw-light'>
                            We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
                        </h1>
                    </div>
                </div>
            </section>
            
        </div>
        </div>
     
    );
};

export default Section;