
import bannerVideo from '../../assets/video/video (720p).mp4'
import bannerImage from '../../assets/images/banner_image.avif'
import Section from './Section';

function Banner() {
  return (
    <div>
      <section className="newBanner_section__VlZZ_" id="case_study_slider1">
        <div
          className="newBanner_start__JV_Rl carousel slide carousel-fade"
          style={{ opacity: "0.7947" }}
        >
          <div className="carousel-inner">
            <div draggable="true" className="active carousel-item">
              <div className="newBanner_banner_child__do3Je">
                <div className="newBanner_banner_image__Ebtad">
                  <div className="ratio hlsVideoCard_video__nmNdY">
                    <img
                      alt="cs banner"
                      fetchpriority="high"
                      decoding="async"
                      data-nimg="fill"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      // srcSet={bannerImage}
                      // src={bannerImage}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <video
                    
                      datamage={bannerImage}
                      loop={true}
                      autoPlay={true}
                      
                      src={bannerVideo}
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    ></video>
                  </div>
                  <button
                    aria-label="button for mute"
                    className="hlsVideoCard_controls_item__vol__YMqdq"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.855"
                      height="18.776"
                      viewBox="0 0 18.855 18.776"
                    >
                      <path
                        id="icon-mute"
                        d="M-15041.438,12282.5l-4.749,4.749-.706-.706,4.342-4.343h-3.56a.931.931,0,0,1-.93-.929v-6.129a.924.924,0,0,1,.272-.661.934.934,0,0,1,.657-.275h4.247l6.968-5.7.816.386v4.835l5.185-5.187.71.706-5.895,5.9v11.736l-.8.4Zm6.357,3.4v-9.755l-5.64,5.64Zm-10.959-4.7h3.855v-5.993h-3.855Zm4.856-6.257v5.89l6.1-6.1v-4.778Z"
                        transform="translate(15047.041 -12268.507)"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="newBanner_banner_inner__B_pMf newBanner_full__kYor7">
                  <div className="container">
                    <div className="newBanner_content__7v3dH">
                      <h1 className="newBanner_title__9Vl15 newBanner_anim__UjgCO  ttl-80 fw-light" 
                      style={{"textAlign": "initial"
                  }}>
                        Digital Marks the Future and We Build It!
                      </h1>
                      <a className="newBanner_navigate_btn__9VKft" href="works">
                        <span>View all works</span>
                        <span>
                          <svg
                            className=""
                            width="16"
                            height="16"
                            viewBox="0 0 1538 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              display: "inline-block",
                              "verticalAlign": "middle",
                            }}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            role="button"
            tabIndex="0"
            href="#"
          >
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            role="button"
            tabIndex="0"
            href="#"
          >
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <button className="carousel-next">Left</button>
        <button className="carousel-prev">Right</button>
        <div
          className="newBanner_mouseMove__8yFgF"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform:
              "translate(-50%, -50%) translate3d(245px, 683px, 0px) scale(0.7, 0.7)",
          }}
        >
          <div className="newBanner_arrow_wrapper__NqRK8">
            <div className="newBanner_arrow_wrapper_inner__ndPBv">
              <div className="newBanner_arrow_left__LOpAw"></div>
              <div className="newBanner_arrow_right__DCKmb"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
