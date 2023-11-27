import React from 'react';
import logo from '../assets/images/logo_images/logo1.svg';
const SearchOffCanvas = ({closeHandle}) => {
  return (
    <div role="dialog" aria-modal="true" className="searchOffCanvas_canvas__4_Gee offcanvas offcanvas-top show" tabIndex="-1" style={{ visibility: 'visible' }}>
      <div className="offcanvas-body">
        <div className="searchOffCanvas_search_wrap__LoM_B">
          <div className="container">
            <div className="searchOffCanvas_body__4yNuj d-flex">
              <button className="searchOffCanvas_logoWrapper__T3i_x" >
                <a className="logo_brand_logo__pKuee" href="/">
                <img alt='Webandcrafts' fetchpriority='high' width='96.93' height='28.01' decoding='async' data-nimg='1' src={logo} style={{ color: 'transparent' }} />
                </a>
              </button>
              <div className="searchOffCanvas_searchWrapper__apdY5 d-flex">
                <div className="searchField_searchField__sUoDR">
                  <form noValidate>
                    <div className="searchField_searchInput____GNk">
                      <button aria-label="search" type="submit" className="searchField_SearchIcon__7S_wO">
                        <svg width="20" height="20" viewBox="0 0 1017 1024" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                          <path d="M436.447 95.576c-188.232 0-340.824 152.592-340.824 340.824s152.592 340.824 340.824 340.824c188.232 0 340.824-152.592 340.824-340.824v0c-0.218-188.144-152.68-340.606-340.803-340.824l-0.020-0zM436.447 0c241.017 0 436.399 195.383 436.399 436.399s-195.383 436.399-436.399 436.399c-241.017 0-436.399-195.383-436.399-436.399v0c0-241.017 195.383-436.399 436.399-436.399v0z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                          <path d="M951.697 1023.952l-259.727-243.049 65.278-69.77 259.727 243.049z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                        </svg>
                      </button>
                      <input
                        placeholder="Type to search.."
                        className="searchField_SearchInput__HxLyg"
                        id="a289837d-cf2e-4f91-aaa1-d8ec05bdd175"
                        autoComplete="off"
                        type="search"
                        value=""
                        name="search"
                      />
                    </div>
                  </form>
                </div>
                <button className="searchOffCanvas_close__bWTeZ" onClick={closeHandle}>
                  <svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <path d="M953.363 1023.933l-953.363-953.363 70.57-70.57 953.363 953.363z"></path>
                    <path d="M70.57 1023.933l-70.57-70.57 953.363-953.363 70.57 70.57z"></path>
                  </svg> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOffCanvas;
