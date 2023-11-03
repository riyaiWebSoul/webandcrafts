import React from 'react';


function BlogCard({item}) {
  
  return (
    <div>
            <div class="d-none d-lg-block">
              <div class="blogItemCard_item_wrapper__94NRV ">
                <a
                  class="blogItemCard_link__LhPqr"
                  href="/blog/open-assistant-chatbots-to-transform-tech-driven-business"
                >
                  <div class="blogItemCard_image_wrapper__I3eje">
                    <img
                      alt="AI Chat Open Assistant Chatbot - Creating Breakthroughs in Tech-Driven Businesses"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="(max-width: 768px) 100vw, 
       (max-width: 1200px) 50vw, 25vw"
                      srcSet={`
       ${item.imageURL} 640w,
       ${item.imageURL} 750w,
       ${item.imageURL} 828w,
       ${item.imageURL} 1080w,
       ${item.imageURL} 1200w,
       ${item.imageURL} 1920w,
       ${item.imageURL} 2048w,
       ${item.imageURL} 4500w
     `}
                      src={item.imageURL}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: " 0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div class="blogItemCard_content_wrapper__MwV10">
                    <div class="blogItemCard_details__e4aLG">
                      <h3 class="blogItemCard_category__BtSTW fw-regular">
                        {item.title}<span>{item.time} {item.timeIn} {item.status}</span>
                      </h3>
                      <h3 class="blogItemCard_date_wrapper__HdP5_ fw-regular">
                        {item.month} {item.date},{item.year}
                      </h3>
                    </div>
                    <h4 class="blogItemCard_title__OxUEF fw-medium mb-0">
                      {item.bodyText}
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
  );
}

export default BlogCard;
