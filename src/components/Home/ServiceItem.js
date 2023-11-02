// ServiceItem.js

import React from 'react';

function ServiceItem({ title, description, imageUrl, link }) {
  return (
    <div className="col-12">
      <div className="ServiceListing_services_item__8Gs0X">
        <div className="listingCard_listing_card__vSgnM listingCard_withBg__S__Ml">
          <div className="listingCard_image__ix2C0 ratio ratio-1">
            <img
              alt={title}
              loading="lazy"
              src={imageUrl}
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="listingCard_context_wrapper__ihkvq">
            <h3 className="listingCard_title__ufYqF fw-regular">{title}</h3>
            <p className="listingCard_description__Q5VTW fs-18 mb-2 mb-lg-3 lh-primary">{description}</p>
            <a aria-label={`Learn more about ${title}`} className="btn btn-secondary stretched-link" href={link}>
              Learn more <span className="listingCard_screen_reader__Ml_9f">about {title}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
