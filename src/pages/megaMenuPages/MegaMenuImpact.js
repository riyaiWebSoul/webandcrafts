import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const MegaMenuImpact = () => {
    useEffect(() => {
        AOS.init({
           
        });
      }, []); // Run the effect only once on mount
  return (
    <div data-aos="fade-up"   data-aos-delay="250"
    data-aos-anchor-placement="center-center">
    <div className="col-12 headerMegaMenuFull_col_left__HX_QU">
      <div className="megaMenuImpact_menu_wrapper__0_6pJ">
        <div className="megaMenuImpact_menu_wrapper_inner__sZLsn">
          <h2 className="ttl-80 megaMenuImpact_title__FWTuj opacity-100 text-start">
            Our Impact
          </h2>
          <p className="fs-24 megaMenuImpact_description__inbK8 opacity-100 text-start">
            Every innovation that happens here is out of a quest to get better at
            what we are already doing. We deliver ideas that make a difference,
            create experiences that transform lives and build ecosystems that
            foster progress.
          </p>
          <div className="megaMenuImpact_counts_wrapper__CAMip text-start">
            <ul>
              <li className='opacity-100 text-start'>
                <h5>650+ </h5>
                <p>Projects launched successfully across the globe</p>
              </li>
              <li className='opacity-100 text-start'>
                <h5>10M</h5>
                <p>Daily customer engagement through our projects</p>
              </li>
              <li className='opacity-100'>
                <h5>100+</h5>
                <p className='text-start'>Digital transformation stories that made a difference</p>
              </li>
            </ul>
          </div>
          <div className="megaMenuImpact_btn_wrapper__wxS_K opacity-100 text-start">
            <a className="btn btn-primary light " href="/impact">
              <span>Our Impact</span>
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
      </div>
    </div>
    </div>
  );
};

export default MegaMenuImpact;
