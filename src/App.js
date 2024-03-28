//Routes
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Professional from "./pages/professionals/Professionals";
// import LifeAtFlyfin from "./pages/Career/LifeAtFlyfin";
// import ApplyForm from "./pages/apply-form/ApplyForm";
import EventDetails from "./pages/event-details/EventDetails";
// import Assurance from "./pages/our-services/Assurance";
// import BusinessAdvisory from "./pages/our-services/BusinessAdvisory";
// import DirectTax from "./pages/our-services/DirectTax";
// import GoodsAndServicesTax from "./pages/our-services/GoodsAndServicesTax";
// import InvestmentAdvisory from "./pages/our-services/InvestmentAdvisory";
import OurServices from "./pages/our-services/our-service/OurServices";
import ContactUs from "./pages/contact-us/ContactUs";
import Blogs from "./pages/Our-blogs/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/ourblogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
