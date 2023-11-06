import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import ScrollTrigger from "gsap/ScrollTrigger";
import butterflyVideo from '../../assets/video/Lulu_hover_animation_6d256ad40d.mp4'

const Desing = () => {
    const component = useRef();

    gsap.to('h1', {
        x: 100, 
        scrollTrigger: {
          trigger: 'h1',
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      });
      
      gsap.to('h1', {
        x: 200, 
        scrollTrigger: {
          trigger: 'h1',
          start: 'center center',
          end: 'bottom top',
          scrub: true
        }
      });


const data=[
    {
    title:'Desing',
    videoUrl:butterflyVideo,
    bodyText:`Intelligent design is the essence of nature
    that’s our inspiration in crafting
    tomorrow’s tech realms`,
    link:'/'
},
{
    title:'Build',
    videoUrl:butterflyVideo,
    bodyText:`Intelligent design is the essence of nature
    that’s our inspiration in crafting
    tomorrow’s tech realms`,
    link:'/'
},
{
    title:'Market',
    videoUrl:butterflyVideo,
    bodyText:`Intelligent design is the essence of nature
    that’s our inspiration in crafting
    tomorrow’s tech realms`,
    link:'/'
}
]





    return (
        <>
            <section id="designSection" ref={component}>
                <div className='homeDesignWrap_section_inner__T_8p4'>
<div className=' '>
    <section className=' '>
    {
                    data.map(item=>{
                        return(
                            <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                            <div className='bodyText'>
                                <div className='d-flex justify-content-center'>
                                <h1 className='text-center  fw-light'>{item.title}</h1>
                                <video className="homeBuild_video__Oji__" width="100px" height="100px" loop autoPlay playsInline>
                                    <source src={item.videoUrl} type="video/mp4"/></video>
                                </div>
                                
                                
                                <p  className='text-start  fw-light'>
                                {item.bodyText}
                                </p>
                                <a className="newBanner_navigate_btn__9VKft" href="works">
                                    <span>Learn More</span>
                                    <span>
                                        <svg className="" width="16" height="16" viewBox="0 0 1538 1024"
                                         xmlns="http://www.w3.org/2000/svg" 
                                         style={{"display": "inlineBlock", "verticalAlign": "middle"}}>
                                            <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z" 
                                            style={{"fill": "rgb(255, 255, 255)"}}>
                                                </path>
                                                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"
                                  style={{"fill": "rgb(255, 255, 255)"}}>
                                    </path>
                                    </svg>
                                    </span>
                                    </a>
                            </div>
                        </div>
                        )
                    })
                }
    </section>

</div>
                </div>
               
               
            </section>
           
        </>
    );
};

export default Desing;
