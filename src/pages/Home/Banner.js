import bannerVideo from "../../assets/video/banner_video.mp4";
import bannerImage from "../../assets/images/banner_image.avif";
import Section from "./Section";
import { useState, useEffect,useRef } from "react";

function Banner() {
  const [mutedButton, setMutedButton] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const handelMute = () => {
    setMutedButton((prevMuted) => !prevMuted);
  };

  const videoRef = useRef(null);
  const startTime = 0; // Set the start time in seconds

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = 0.6; // You can adjust this value if needed

      if (scrollY >= viewportHeight * threshold) {
        setOpacity(0);
        // When the video becomes visible, set shouldLoadVideo to true
        setShouldLoadVideo(true);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-dark">
      <section
        className="newBanner_section__VlZZ_"
        id="case_study_slider1"
        style={{
          opacity,
          transition: "opacity 0.3s", // You can adjust the transition duration
        }}
      >
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
                      srcSet={bannerImage}
                      src={bannerImage}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <video
          data-image={bannerImage}
          ref={videoRef}
          loop={true}
          autoPlay={true}
          muted={mutedButton}
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          {shouldLoadVideo && <source src={bannerVideo} />}
        </video>
                  </div>
                  <button
                    aria-label="button for mute"
                    className="hlsVideoCard_controls_item__vol__YMqdq"
                    onClick={handelMute}
                  >
                    {mutedButton? <svg
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
                    </svg>:<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.118"
                    height="18.776"
                    viewBox="0 0 20.118 18.776"
                  >
                    <path
                      id="icon-vol"
                      d="M5.193,13.694H.931A.933.933,0,0,1,0,12.763V6.634A.931.931,0,0,1,.931,5.7H5.177L12.144,0l.816.387V18.372l-.795.4Zm.663-7.258v6.5l6.1,4.45V1.442ZM1,12.694H4.855V6.7H1Zm15.644,1.779a6.955,6.955,0,0,0,.249-10.418l.68-.734a7.955,7.955,0,0,1-.285,11.916Zm-1.914-1.739a4.743,4.743,0,0,0-.035-6.744l.7-.715a5.744,5.744,0,0,1,.043,8.166Z"
                      transform="translate(0)"
                      fill="#fff"
                    ></path>
                  </svg>}
                   
                  </button>
                  
                </div>
                <div className="newBanner_banner_inner__B_pMf newBanner_full__kYor7">
                  <div className="container">
                    <div className="newBanner_content__7v3dH">
                      <h1
                        className="newBanner_title__9Vl15 newBanner_anim__UjgCO  ttl-80 fw-light"
                        style={{ textAlign: "initial" }}
                      >
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
                              verticalAlign: "middle",
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
           
        </div>
         
      </section>
    </div>
     
  
  );
}

export default Banner;
