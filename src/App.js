
import './App.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/style.css';
import '../src/assets/css/media.css';
import '../src/assets/css/styeld.css';
import '../src/assets/css/color.css'

import Header from './pages/Header';
import Banner from './pages/Home/Banner';
import WorkListingSection from './pages/Home/WorkListingSection';
import ClientSection from './pages/Home/ClientSection';
import OurStoryComponent from './pages/Home/OurStoryComponent';
import ServiceListing from './pages/Home/ServiceListing';
import CareerHomeSection from './pages/Home/CareerHomeSection';
import Footer from './pages/Footer';
import BlogSection from './pages/Home/BlogSection';

function App() {
  return (
    <div className="App">
       <Header/>
   <Banner/>
   <WorkListingSection/>
   <OurStoryComponent/>
   <ServiceListing/>
   <ClientSection/>
   <CareerHomeSection/>
   <BlogSection/>
   <Footer/>
   
  
       </div>
  );
}

export default App;