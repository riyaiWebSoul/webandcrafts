import React, { useState, useEffect } from 'react';
import CareerHomeSectionImages from '../../utls/CareerHomeSectionImages';

function CareerHomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTransitioning, setImageTransitioning] = useState(false);

  const [ teamImage1,teamImage2,teamImage3,teamImage4,teamImage5,teamImage6,teamImage7,teamImage8,teamImage9,teamImage10,teamImage11,teamImage12]=CareerHomeSectionImages()

  const arrayImage=[teamImage1,teamImage2,teamImage3,teamImage4,teamImage5,teamImage6,teamImage7,teamImage8,teamImage9,teamImage10,teamImage11,teamImage12]
  const imageStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: '0px',
    boxSizing: 'border-box',
    padding: '0px',
    border: 'none',
    margin: 'auto',
    display: 'block',
    objectFit: 'contain',
    objectPosition: '50% 50%',
    top: imageTransitioning ? '0' : '-20%',
    transition: 'top 2s ease-out-in', // Adjust the duration and easing for the slide effect
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setImageTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
        setImageTransitioning(false);
      }, 1000); // Change the image after 1 second
    }, 2000); // Start the transition every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [arrayImage]);



  return (
    <section className="careerHome_section__7zGs0" id="teamImageSliderComponent">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="careerHome_content_wrapper__zC8q8">
              <div className="d-none d-sm-block w-100">
                <h3 className="careerHome_title__Exoec ttl-100 fw-light text-center text-lg-start">You Will Like It Here!</h3>
              </div>
              <p className="careerHome_description__8pUSx fs-24 fw-light">
                At WAC, we are all about creating a habitat that lets you grow stronger roots and larger branches. Together let’s make a fruitful journey!
              </p>
              <a className="btn btn-primary" href="/careers">
                <span>Explore opportunities</span>
                <span>
                  <svg
                    className=""
                    width="15"
                    height="15"
                    viewBox="0 0 1538 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                    <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-sm-none mb-3">
              <h3 className="careerHome_title__Exoec ttl-100 fw-light ">You Will Like It Here!</h3>
            </div>
            <div className="careerHome_Anim_wrapper__vCOCO">
              <div className="careerHome_image_anim_wrapper__hFer9">
                <div className="careerHome_image_anim_items__mGXER careerHome_active__PZnvb">
                <div className="careerHome_image_wrapper__f9PiO" style={{ overflow: 'hidden', position: 'relative' }}>
        <img
          alt="team image"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 30vw"
          srcSet={`
            ${arrayImage[currentImageIndex]} 640w,
            ${arrayImage[currentImageIndex]} 750w,
            ${arrayImage[currentImageIndex]} 828w,
            ${arrayImage[currentImageIndex]} 1080w,
            ${arrayImage[currentImageIndex]} 1200w,
            ${arrayImage[currentImageIndex]} 1920w,
            ${arrayImage[currentImageIndex]} 2048w,
            ${arrayImage[currentImageIndex]} 4500w
          `}
          src={arrayImage[currentImageIndex]}
          style={imageStyle}
        />
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHomeSection;
