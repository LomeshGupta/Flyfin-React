import slidder1 from "../../../assests/images/banner/bann1.jpg"
import slidder2 from "../../../assests/images/banner/bann2.jpg"
import slidder3 from "../../../assests/images/banner/bann3.jpg"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import  "./banner.scss"
export default function Banner() {
  const linkPageScroll = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>

<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slidder1} className="d-block w-100 im" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-start">
        <h1 className="text-white mb-2 bt">Endeavour to Create Value Addition</h1>
        <p className="text-white letter">Endeavour to Create Value Addition: Driving Innovation for Greater Impact.</p>
        <Link to="/our-services"  onClick={linkPageScroll}><button className=" border-0 contact-us-btn">Our Services</button></Link>&nbsp;&nbsp;
        <Link to="/contact-us" onClick={linkPageScroll}><button className=" border-0">Contact Us</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slidder2} className="d-block w-100 im" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-start">
        <h1 className="text-white mb-2 bt">Our Services</h1>
        <p className="text-white letter">Our Services: Tailored Solutions for Your Unique Needs</p>
        <Link to="/our-services"  onClick={linkPageScroll}><button className=" border-0 contact-us-btn">Our Services</button></Link>&nbsp;&nbsp;
        <Link to="/contact-us" onClick={linkPageScroll}><button className=" border-0">Contact Us</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slidder3} className="d-block w-100 im" alt="..."/>
      <div className="carousel-caption d-none d-md-block  text-start">
      <h1 className="text-white mb-2 bt">Coorporate Services on a Global Arena</h1>
        <p className="text-white letter">Corporate Services on a Global Arena: Unlocking Boundless Opportunities</p>
        <Link to="/our-services"  onClick={linkPageScroll}><button className=" border-0 contact-us-btn">Our Services</button></Link>&nbsp;&nbsp;
        <Link to="/contact-us" onClick={linkPageScroll}><button className=" border-0">Contact Us</button></Link>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
