
import './App.css';
import './css/responsive.css';
import './css/style.css';
import './css/media.css';
import './css/styeld.css';
import './css/color.css'

import Header from './components/Header';
import Banner from './components/Home/Banner';
import WorkListingSection from './components/Home/WorkListingSection';
import ClientSection from './components/Home/ClientSection';
import OurStoryComponent from './components/OurStoryComponent';
import ServiceListing from './components/Home/ServiceListing';
import CareerHomeSection from './components/Home/CareerHomeSection';
import Footer from './components/Footer';

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
   <Footer/>
   
  
       </div>
  );
}

export default App;
