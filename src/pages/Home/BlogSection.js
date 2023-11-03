import React from "react";
import aiImage from "../../assets/images/AI_Chat_Open_Assistant_Chatbot_Creating_Breakthroughs_in_Tech_Driven_Businesses_5cf51c2a75.avif";
import aiImage1 from "../../assets/images/Top_Advantages_Disadvantages_and_Limitations_of_Ecommerce_A_Complete_Guide_9f7ce4a36a.avif";
import aiImage2 from "../../assets/images/DSC_09058_2ceec90ced.avif";

const BlogSection = () => {
  const data = [
    {
      imageURL: aiImage,
      title: "Blog",
      time: 7,
      timeIn: "min",
      status: "read",
      month: "October",
      date: 30,
      year: 2023,
      bodyText: "AI Chat Open Assistant Chatbot: Creating...",
    },
    {
      imageURL: aiImage1,
      title: "Blog",
      time: 7,
      timeIn: "min",
      status: "read",
      month: "October",
      date: 30,
      year: 2023,
      bodyText: "AI Chat Open Assistant Chatbot: Creating...",
    },
    {
      imageURL: aiImage2,
      title: "Blog",
      time: 7,
      timeIn: "min",
      status: "read",
      month: "October",
      date: 30,
      year: 2023,
      bodyText: "AI Chat Open Assistant Chatbot: Creating...",
    },
  ];

  return (
    <section
      className="BlogInsights_section__3hRg2 bg-secondary"
      id="homeBlogsWidget8"
    >
      <div className="container">
        <h2 className="ttl-80 mb-lg-6 fw-regular mb-1 displayStart">
          Insights
        </h2>
        <div class="row  row-cols-lg-3 BlogInsights_row__jNVK_">
         {data.map(item=>{
          return(
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
          )
         })}
        
         
        </div>
        <div className="BlogInsights_btn_wrapper__NUkFE text-center">
          <a className="btn btn-primary" href="insights.html">
            <span>Explore all insights</span>
            <span>
              <svg
                className=""
                style={{ display: "inline-block", verticalAlign: "middle" }}
                width="15"
                height="15"
                viewBox="0 0 1538 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512z"></path>
                <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
