import "./App.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import "../src/assets/css/media.css";
import "../src/assets/css/styeld.css";
import "../src/assets/css/color.css";

import Header from "./pages/Header";
import Banner from "./pages/Home/Banner";
import WorkListingSection from "./pages/Home/WorkListingSection";
import ClientSection from "./pages/Home/ClientSection";
import OurStoryComponent from "./pages/Home/OurStoryComponent";
import ServiceListing from "./pages/Home/ServiceListing";
import CareerHomeSection from "./pages/Home/CareerHomeSection";
import Footer from "./pages/Footer";
import BlogSection from "./pages/Home/BlogSection";
import Section from "./pages/Home/Section";
import Design from "./pages/Home/Design";
import HomeDesignAnimation from "./pages/Home/HomeDesignAnimation";
import SectionTest from "./pages/Home/SectionTest";
import FlySection from "./pages/Home/FlySection";
import BuildSection from "./pages/Home/BuildSection";
import MarketSection from "./pages/Home/MarketSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Section/>
      {/* <SectionTest/> */}
      {/* <HomeDesignAnimation/> */}
    <FlySection/>
    <BuildSection/>
    <MarketSection/>
      {/* <Design/>  */}
      <WorkListingSection />
      <OurStoryComponent />
      <ServiceListing />
      <ClientSection />
      <CareerHomeSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
