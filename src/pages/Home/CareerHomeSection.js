import React from 'react';
import thumb from '../../assets/images/WAC_09109_d0d9d60230.jpg';

function CareerHomeSection() {
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
  };

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
                  <div className="careerHome_image_wrapper__f9PiO">
                    <img
                      alt="team image"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 30vw"
                      src={thumb}
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
