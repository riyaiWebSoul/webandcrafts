import React, { useEffect, useRef, useState } from 'react';


function ImageCard({item}) {
  const videoRef = useRef(null);
  const [focus, setFocus] = useState(false);

  

  const loop = () => {
    videoRef.current.play();
  };

  const onEndedLoop = () => {
    if (focus) loop(); // when ended check if its focused then loop
  };

  useEffect(() => {
    if (focus) loop(); // when focused then loop
  }, [focus]);


  return (
    <div className='undefined' >
      <div className='workCard_listing_card__t_T6i  false   '>
        <span>
          <a target='_blank' className='workCard_image__OUzWj ratio ratio-1' style={{ '--aspect-ratio': '100%' }} href='works/lulu-hypermarket.html'>
            <img
              alt='LULU-Thumb (2).jpg'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
              }}
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
              srcSet={`
                    ${item.imageURL} 640w,
                    ${item.imageURL} 750w,
                    ${item.imageURL} 828w,
                    ${item.imageURL} 1080w,
                    ${item.imageURL} 1200w,
                    ${item.imageURL} 1920w,
                    ${item.imageURL} 2048w,
                    ${item.imageURL} 4500w
                  `}
              src={item.imageURL}
            />
            <video width='100%' height='100%' loop autoPlay ref={videoRef} onMouseOver={() => setFocus(true)} onMouseOut={() => setFocus(false)} muted={true}
             src={item.videoURL} onEnded={onEndedLoop}>
              <source src={item.videoURL} type='video/mp4'></source>
            </video>
          </a>
          <div className='workCard_context_wrapper__okUyc'>
            <h3 className='workCard_description__NawYq h6 mb-1 lh-primary fw-regular'>
              <div>
                <button className='undefined'>{item.title}</button>
              </div>
            </h3>
            <h4 className='workCard_title__CmBr9 mb-0 displayStart'>
              <a target='_blank' className='lh-title-sub fw-light displayStart' href='works/lulu-hypermarket.html'>
           {item.bodyText}
              </a>
            </h4>
          </div>
        </span>
      </div>
      {/*/$*/}
    </div>
  );
}

export default ImageCard;
