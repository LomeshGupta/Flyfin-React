import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Professional from "./pages/professionals/Professionals"
import LifeAtFlyfin from "./pages/Career/LifeAtFlyfin";
import ApplyForm from "./pages/apply-form/ApplyForm";
import EventDetails from "./pages/event-details/EventDetails";
import Assurance from "./pages/our-services/Assurance";
import BusinessAdvisory from "./pages/our-services/BusinessAdvisory";
import DirectTax from "./pages/our-services/DirectTax";
import GoodsAndServicesTax from "./pages/our-services/GoodsAndServicesTax";
import InvestmentAdvisory from "./pages/our-services/InvestmentAdvisory";
import OurServices from "./pages/our-services/our-service/OurServices";
import ContactUs from "./pages/contact-us/ContactUs";
import Blogs from "./pages/Our-blogs/Blogs";

function App() {

  
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/professional" element={<Professional/>}/>
      <Route path="/life-at-flyfin" element={<LifeAtFlyfin/>}/>
      <Route path="/apply-now" element={<ApplyForm/>}/>
      <Route path="/events/:eventId" element={<EventDetails/>}/>
      <Route path="/assurance" element={<Assurance/>}/>
      <Route path="/business-advisory" element={<BusinessAdvisory/>}/>
      <Route path="/direct-tax" element={<DirectTax/>}/>
      <Route path="/goods-&-services-tax" element={<GoodsAndServicesTax/>}/>
      <Route path="/investment-advisory" element={<InvestmentAdvisory/>}/>
      <Route path="/our-services" element={<OurServices/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/ourblogs" element={<Blogs/>}/>   
    </Routes>
  );
}

export default App;
