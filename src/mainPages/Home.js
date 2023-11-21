import Banner from "../pages/Home/Banner";
import BuildSection from "../pages/Home/BuildSection";
import FlySection from "../pages/Home/FlySection";
import MarketSection from "../pages/Home/MarketSection";
import WorkListingSection from "../pages/Home/WorkListingSection";
import OurStoryComponent from "../pages/Home/OurStoryComponent";
import ServiceListing from "../pages/Home/ServiceListing";
import ClientSection from "../pages/Home/ClientSection";
import CareerHomeSection from "../pages/Home/CareerHomeSection";
import BlogSection from "../pages/Home/BlogSection";
import Section from "../pages/Home/Section";
import SectionTest from "../pages/Home/SectionTest";



function HomePage() {
  return (
    <div className="App">
    <Banner/>
     <Section/>
     {/* <SectionTest/> */}
    <FlySection/>
    <BuildSection/>
    <MarketSection/>
    <WorkListingSection/>
      <OurStoryComponent />
      <ServiceListing />
      <ClientSection />
      <CareerHomeSection />
      <BlogSection />
    </div>
  );
}

export default HomePage;
