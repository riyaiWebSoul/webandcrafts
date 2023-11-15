import React from 'react';
import ellipse from '../../assets/images/ellipse.avif'

const Solutions = () => {
  return (
    <main>
      <div>
        <section className="bannerSolutions_section__IWl4m opacity-100">
          <div className="bannerSolutions_shape__71DXm bannerSolutions_shape_one__aH4BN opacity-100">
            <div className="ratio ratio-1x1 opacity-100">
              <img
                alt="gradient decor"
                fetchpriority="high"
                decoding="async"
                data-nimg="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                srcset={`${ellipse}`}
                src={`${ellipse}`} width='10px'
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: 0,
                  color: 'transparent',
                  opacity:1
                }}
              />
            </div>
            <div className="bannerSolutions_shape__71DXm bannerSolutions_shape_two__vCHRg" style={{ transform: 'translate3d(315px, 192px, 14px) rotate(-133deg)', opacity: 1, visibility: 'inherit' }}>
      <div className="ratio ratio-1x1">
        <img
          alt="gradient decor"
          fetchpriority="high"
          decoding="async"
          data-nimg="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          srcSet={`${ellipse}`}
        src={`${ellipse}`} width='10px'
          style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
        />
      </div>
    </div>
          </div>
          {/* Add similar code for other shapes if needed */}
          <div className="container">
            <div className="undefined text-center">
              <h1 className="bannerSolutions_title__qU8AG text-white opacity-100">
                <span>Next-gen E-Commerce &nbsp;</span>Solutions with AI
              </h1>
              <p className="text-white bannerSolutions_description__V9vIq mb-2 opacity-100">
                Give all the elements essential to enhance every aspect of your
                E-commerce journey, from the shopping experience to boundless
                marketing solutions. Drive the future with AI-led E-commerce
                solutions tailored to harmonize with any platform!
              </p>
              <span className="bannerSolutions_title_label__M36xX mb-lg-4  d-inline-block text-white opacity-100">
                Coming soon...
              </span>
              <div className="bannerSolutions_btn_wrap___hvIC opacity-100">
                <a className="btn btn-primary light "  href="/contact-us">
                  <span>Enquire Now</span>
                  <span>
                    <svg
                      className=""
                      width="15"
                      height="15"
                      viewBox="0 0 1538 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        opacity:99
                      }}
                    >
                      <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                      <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Solutions;
