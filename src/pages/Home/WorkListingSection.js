import React, { useEffect, useRef, useState } from 'react';
import getImages from '../../utls/getImages';
import ImageCard from '../../common/ImageCard';

const WorkListingSection = () => {
  const {  thumb,
    videoClip,
    videoClip2,
    videoClip3,retail,imagesEducation,food,banner,marslleva,retailsimage,videoDtale,videHealth,videIkea} = getImages();

  const data = [
    {
      sectionName: 'retail',
      title: 'Retail',
      videoURL: videoClip,
      imageURL: retail,
      bodyText: 'LuLu Hypermarket: Building a one-click path for a search-intensive, high volume big brand store',
    },
    {
      sectionName: 'Education',
      title: 'Education',
      videoURL: videoClip2,
      imageURL: imagesEducation,
      bodyText: 'Middlesex University: Revamping the digital face of a world-class university for better visual impact',
    },
    {
      sectionName: 'Retail',
      title: 'Retail',
      videoURL: videoClip3,
      imageURL:retailsimage ,
      bodyText: `Yallatoys: Elevating Qatar's No.1 toy brand with our digital prowess in web, app, and digital marketing`,
    },
    {
      sectionName: 'Retail',
      title: 'Retail',
      videoURL: videoDtale,
      imageURL: banner,
      bodyText: 'Dtale: Reshaping the entire digital landscape for India’s foremost design-led, interior fit-out brand',
    },
    {
      sectionName: 'Healthcare',
      title: 'Healthcare',
      videoURL: videHealth,
      imageURL: marslleva,
      bodyText: 'Mar Sleeva Medicity: A world-class website for a world-class healthcare provider fit-out brand',
    },
    {
      sectionName: 'RetailFood',
      title: 'Retail / Food',
      videoURL: videIkea,
      imageURL: food,
      bodyText: 'IKEA Foods: Delectably designed branded ecommerce store to launch a new sales channel',
    },
  ];

  return (
    <section className='WorkListing_section__rN1bD' id='homeWorksWidget3' style={{ backgroundColor: '#ffffff' }}>
      <div className='container'>
        <div className='WorkListing_heading__KeitQ'>
          <h2 className='WorkListing_title__2fizb ttl-80 -mb-2 mb-lg-5 fw-regular'>Works</h2>
        </div>
        <div></div>
        <div className='undefined row row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-xl-4 g-xxl-5'>
          {/* Repeat the following block for each work item */}
      {data.map (item=><ImageCard item={item}/>)} 
        </div>
        {/* Repeat the above block for each work item */}

        <div className='text-center WorkListing_btn_wrap__Vknqd'>
          <a className='btn btn-primary' href='works.html'>
            <span>View all works</span>
            <span>
              <svg className='' style={{ display: 'inline-block', verticalAlign: 'middle' }} width='15' height='15' viewBox='0 0 1538 1024' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z'></path>
                <path d='M1467.329 560.813h-1467.329v-97.822h1467.329z'></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkListingSection;
