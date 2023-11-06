import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = () => {
    const desingComponent = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            let split = new SplitType(".bodyText h1", { types: 'chars' });

            // Initial color setting
            gsap.set(split.chars, {
                color: "gray",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#textSection",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    scrub: 0.75,
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

    return (
        <>
            <section id="textSection" ref={desingComponent}>
                <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <div className='bodyText'>
                        <h1 className='text-start  fw-light'>
                            We believe in a world where <br />technology fosters your everyday <br /> experiences. And our mission is to <br /> make it happen!
                        </h1>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Section;
