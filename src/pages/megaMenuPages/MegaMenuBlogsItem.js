import React ,{useEffect}from 'react';

import blogMegaMenuImage from '../../assets/images/blogMegaMenuImage.webp'

const MegaMenuBlogsItem = () => {

  return (
    <div data-aos="fade-up" data-aos-delay="100" className='aos'>
    <div className="megaMenuBlogs_menu_item__JYfOF opacity-100">
      <div className="megaMenuBlogs_blog_one__JP_nl opacity-100">
        <a className="megaMenuBlogs_blog_main__rQPHJ opacity-100 text-start" href="/blog/types-of-application-software">
          <div className="megaMenuBlogs_image_wrapper__IoylR">
            {/* Image Component */}
            <img
              objectFit="cover"
              alt="What is Application Software - Different Types and Advantages - A Detailed Guide"
              fetchpriority="high"
              decoding="async"
              data-nimg="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
              srcSet={blogMegaMenuImage}
              src={blogMegaMenuImage}
              style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
            />
          </div>
          <div className="megaMenuBlogs_content_wrapper__HpYFs opacity-100">
            <div className="megaMenuBlogs_info__SOsay opacity-100">
              <h3>Blog</h3>
              <p>10 min read</p>
            </div>
            <div className="megaMenuBlogs_description__z4nRQ text-start">
              What is Application Software? Types of Application Software: A Detailed Guide
            </div>
            <div className="megaMenuBlogs_link_main__1xw9i" style={{ transform: 'none', rotate: 'none', scale: 'none', willChange: 'transform', opacity: 1, visibility: 'inherit', transform: 'translate3d(0px, 0px, 0px)' }}>
      <div className="megaMenuBlogs_link__rAyce stretched-link">
        Explore
        <svg className="" width="15" height="15" viewBox="0 0 1538 1024" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <path d="M1006.294 1024l-67.791-70.432 458.589-441.568-458.687-441.568 67.791-70.432 531.956 512" style={{ fill: 'rgb(227, 227, 227)' }}></path>
          <path d="M1467.329 560.813h-1467.329v-97.822h1467.329z" style={{ fill: 'rgb(227, 227, 227)' }}></path>
        </svg>
      </div>
    </div>
          </div>
        </a>
      </div>
      <div className="megaMenuBlogs_blog_two__8mT_O">
      <div className="megaMenuBlogs_blog_two_inner__EO5vi">
        <a
          className="megaMenuBlogs_blog_item_small__DRt6t opacity-100 text-start"
          href="/blog/user-experience-design-strategies-for-business-growth"
        >
          <div className="megaMenuBlogs_content_wrapper__HpYFs ">
            <div className="megaMenuBlogs_info__SOsay">
              <h3>Blog</h3>
              <p>7 min read</p>
            </div>
            <div className="megaMenuBlogs_description__z4nRQ">
              From Interface to Interaction: Mastering User Experience Design Strategies for Business Growth
            </div>
          </div>
        </a>
        <a
          className="megaMenuBlogs_blog_item_small__DRt6t opacity-100 text-start"
          href="/blog/christmas-branding-and-marketing-ideas"
        >
          <div className="megaMenuBlogs_content_wrapper__HpYFs">
            <div className="megaMenuBlogs_info__SOsay">
              <h3>Blog</h3>
              <p>7 min read</p>
            </div>
            <div className="megaMenuBlogs_description__z4nRQ">
              How To Get Your Brand Ready For Christmas?
            </div>
          </div>
        </a>
        <a className="megaMenuBlogs_blog_item_small__DRt6t opacity-100 text-start" href="/blog/headless-cms">
          <div className="megaMenuBlogs_content_wrapper__HpYFs">
            <div className="megaMenuBlogs_info__SOsay">
              <h3>Blog</h3>
              <p>12 min read</p>
            </div>
            <div className="megaMenuBlogs_description__z4nRQ">
              Headless CMS: Everything You Want to Know
            </div>
          </div>
        </a>
      </div>
      <div className="megaMenuBlogs_btn___6DNE opacity-100 text-start">
        <a className="btn btn-primary light" href="/blog">
          <span>Explore all blogs</span>
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
      {/* Additional blog items */}
      {/* ... */}
    </div>
    </div>
  );
};

export default MegaMenuBlogsItem;
