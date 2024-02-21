import { Link } from "react-router-dom";
import header from "./header.scss";
// import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { FaEnvelope, FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import navbar from "../../json/navbar/navbar.json";
// import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

import logotext from "../../assests/images/logo/text-logo.png";
import logo from "../../assests/images/logo/only-logo.png";
import { RiTextSpacing } from "react-icons/ri";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [scrollIsVisible, setscrollIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", showschroll);
    return () => window.removeEventListener("scroll", showschroll);
  }, []);

  const showschroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (window.scrollY > 200) {
      setscrollIsVisible(false);
      document.getElementById("navbar_top").classList.add("fixed-top");
      let navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      setscrollIsVisible(true);
      document.getElementById("navbar_top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  };
  const linkPageScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* 
     <div className={`scrollShow ${scrollIsVisible ==true ? "d-none" : "d-block"}`} onClick={linkPageScroll}>
          <i className="fas fa-angle-up moveScroll-icon"><AiOutlineArrowUp/></i>
        </div> */}

      <nav className="navbar navbar-expand-lg bg-light" id="navbar_top">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6HHQ636"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <div className="container">
          <Link
            className="navbar-brand logo-style d-inline-block"
            to="/"
            onClick={linkPageScroll}
          >
            <img src={logo} alt="FLYFIN" style={{ width: "45px" }} />
            <img src={logotext} alt="FLYFIN" />
          </Link>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {isVisible == false ? (
              <span className="navbar-toggler-icon navbar-toggler">
                <AiOutlineMenu />
              </span>
            ) : (
              <span className="navbar-toggler-icon navbar-toggler">
                <AiOutlineClose />
              </span>
            )}
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={linkPageScroll}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                  aria-current="page"
                  to="/about-us"
                  onClick={linkPageScroll}
                >
                  About Us
                </Link>
                {/* <a
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                About Us
                </a> */}
                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/about-us"  onClick={linkPageScroll}>
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FLYFIN Profile
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/professional"
                  onClick={linkPageScroll}
                >
                  Professionals
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                  aria-current="page"
                  to="/our-services"
                  onClick={linkPageScroll}
                >
                  Our Services
                </Link>
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a> */}
                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link  className="dropdown-item" to="/assurance" onClick={linkPageScroll}>
                      Assurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/business-advisory" onClick={linkPageScroll}>
                      Business Advisory
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/direct-tax" onClick={linkPageScroll}>
                      Direct Tax
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/goods-&-services-tax" onClick={linkPageScroll}>
                      Goods and Service tax
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/investment-advisory">
                      Investment Advisory
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Other Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outsourcing Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project Financing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Risk Management
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Secretarial Compilance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Startup Advisory
                    </a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Ourblogs"
                  onClick={linkPageScroll}
                >
                  Our Blogs
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
              <Link className="nav-link active"
                  role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                  aria-current="page" to="/life-at-flyfin"  onClick={linkPageScroll}>
                  Career
                </Link>
                </li>            */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={linkPageScroll}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://wa.me/+919311357594"
                  style={{ fontSize: "150%" }}
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="containernew">
        <div
          className="container"
          // className={`auto-move-paragraph ${isHovered ? "paused" : ""}`}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <p className="text-white butto">
            Phone : +44-2071708077 &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email :
            Info@flyfin.in
            <a
              style={{ marginLeft: "55%" }}
              className="text-white"
              href="https://www.facebook.com/profile.php?id=100094038165628&sk=about"
            >
              <FaFacebook />
            </a>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <a
              className="text-white"
              href="https://www.linkedin.com/company/flyfin-consultancy-pvt-ltd/"
            >
              <FaLinkedinIn />
            </a>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <a
              className="text-white"
              href="https://www.instagram.com/flyfinconsultancy/"
            >
              <FaInstagram />
            </a>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <a className="text-white" href="mailto: Info@flyfin.in">
              <FaEnvelope />
            </a>
          </p>
        </div>
      </nav>
    </>
  );
}
