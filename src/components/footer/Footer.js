import "./footer.scss";
import footerLink from "../../json/footer-link/footerLink.json";
import PageScroll from "../../utils/pageScroll/PageScroll";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botimg from "../../assests/images/Bot.png";
import React, { useState } from "react";
import SimpleForm from "./chatbot";

const pageScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function GoToPage() {
  return (
    <div>
      <a href="/events/datasecurity" className="text-white" target="_blank">
        Click here to Go to Page
      </a>
    </div>
  );
}
function GoToPage2() {
  return (
    <div>
      <a href="/our-services" className="text-white" target="_blank">
        Click here to Go to Page
      </a>
    </div>
  );
}

// function App() {
//     return (
//
//     );
// }
export default function Footer() {
  const pageScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  const theme = {
    background: "lightblue",
    headerBgColor: "darkblue",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    floating: true,
    botAvatar: botimg,
  };

  return (
    <>
      <div className="App">
        {/* <SimpleForm /> */}
      </div>
      <section className="footer">
        <PageScroll />
        <div className="container-fluid">
          <div className="row pt-5 d-flex">
            <div className="col-md-4 about-us mb-3 ml-2 px-3">
              <h3 className="text-white">About Us</h3>
              <p className="text-white mt-4">
                FLYFIN Consultancy is a dedicated supplier of financial service
                to accounting professionals & Firms in ireland, UK, Dubai, USA
                headquartered in Delhi, India, with a focus on delivering
                exceptional outsourcing services to our clients.
              </p>
              <span className="text-white d-inline-block mb-2">Learn More</span>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 mb-3">
              <h3 className="text-white mb-3">Site Links</h3>
              <ul className="footer-link text-white m-0 p-0">
                {footerLink?.map((item, index) => (
                  <Link
                    to={item.linkPath}
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    onClick={pageScroll}
                    key={index}
                  >
                    <li>{item.linkName}</li>
                  </Link>
                ))}
                <a
                  href={require("../../assests/FlyFin.pdf")}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  download="FlyFin.pdf"
                >
                  <li>Download Brochure</li>
                  <Link
                    to="/events/Terms&Condition"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    onClick={pageScroll}
                  >
                    <li>Terms & Condition</li>
                  </Link>
                  <Link
                    to="/events/privacypolicy"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    onClick={pageScroll}
                  >
                    <li>Privacy Policy</li>
                  </Link>
                </a>
              </ul>
            </div>
            <div className="col-lg-4 mb-3 col-md-6 col-sm-12">
              <h3 className="text-white">Contact Us</h3>
              <h7 className="text-white">Address: "1 Gibson drive, Bracknell, Berkshire"</h7>
              <div className="contact-us">
                {/* <div className="d-lg-flex d-sm-block mt-4">
                  <input type="text" placeholder="Your Full Name" />
                  <input type="email" placeholder="Your E-Mail Address" />
                </div>
                <textarea placeholder="Your Message Here"></textarea>
                <button className="border-0 px-3 py-2">Submit</button> */}
                <h3>
                  <a href="https://www.facebook.com/profile.php?id=100094038165628&sk=about">
                    <FaFacebook />
                  </a>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/company/flyfin-consultancy-pvt-ltd/">
                    <FaLinkedinIn />
                  </a>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <a href="https://www.instagram.com/flyfinconsultancy/">
                    <FaInstagram />
                  </a>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <a className="text-white" href="mailto: Info@flyfin.in">
                    <FaEnvelope />
                  </a>
                </h3>
                <iframe
                  className="mt-3 round-5 gmap_iframe"
                  width="90%"
                  height="20%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=1 Gibson Dr, Bracknell RG12 9NQ, UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
