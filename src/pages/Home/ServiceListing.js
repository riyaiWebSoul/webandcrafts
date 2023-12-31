// ServiceListing.js

import React from 'react';
import ServiceItem from './ServiceItem';
import serviceImages from '../../utls/serviceImages';

const { UiDesign ,webApp,ecommerce,mobile,Branding,Consulting}=serviceImages()

const services = [
  {
    title: 'UI/UX Design',
    description: 'Embracing UI/UX in crafting seamless experiences, keeping up with efficiency and elegance',
    imageUrl:UiDesign ,
    link: '',
  },
  {
    title: 'Web App Development',
    description: 'Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience',
    imageUrl:webApp,
    link: '',
  },
  {
    title: 'E-commerce',
    description: 'Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience',
    imageUrl:ecommerce,
    link: '',
  },
  {
    title: 'Mobile App Development',
    description: 'Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience',
    imageUrl:mobile,
    link: '',
  },
  {
    title: 'Branding',
    description: 'Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience',
    imageUrl:Branding,
    link: '',
  },
  {
    title: 'DevOps Consulting',
    description: 'Dive into the realm of intuitive web applications exclusively tailored to gift an immersive digital experience',
    imageUrl:Consulting,
    link: '',
  },
  // Add more service objects as needed
];

function ServiceListing() {
  return (
    <section className="ServiceListing_services__o3EX3" id="homeServiceWidget5">
      <div className="container">
        <div className="undefined">
          <div className="ServiceListing_heading__N5Nsc">
            <h2 className="ttl-80 mb-2 mb-lg-5 fw-regular displayStart">Services</h2>
          </div>
          <div className="row row-cols-md-2 row-cols-xl-3 g-3 g-lg-4 g-xxl-5">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={service.link}
              />
            ))}
          </div>
          <div className="text-center ServiceListing_btn_wrap__0evAP">
            <a className="btn btn-primary" href="/services">
              <span>View all services</span>
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
    </section>
  );
}

export default ServiceListing;
