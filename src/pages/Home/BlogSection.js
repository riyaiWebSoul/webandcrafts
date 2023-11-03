import React from "react";
import aiImage from "../../assets/images/AI_Chat_Open_Assistant_Chatbot_Creating_Breakthroughs_in_Tech_Driven_Businesses_5cf51c2a75.avif";
import aiImage1 from "../../assets/images/Top_Advantages_Disadvantages_and_Limitations_of_Ecommerce_A_Complete_Guide_9f7ce4a36a.avif";
import aiImage2 from "../../assets/images/DSC_09058_2ceec90ced.avif";
import BlogCard from "../../common/BlogCard";

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
         {data.map(item=><BlogCard item={item}/>)}
        
         
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
