import "./experts.scss";
import {Link} from "react-router-dom"

export default function Experts() {
  const pageScroll = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className="experts pb-5 pt-5">
      <div className="container-fluid">
        <div className="pt-3 d-lg-flex d-md-flex d-sm-block sm-mb-4 justify-content-center">
          <div className="">
            <p className="text-white text-left">
              Expert Financial and Business Consulting with 14 Years of Global
              Experience
            </p>
          </div>
          
        </div>
        <div className="text-center pb-2 pt-4">
        
            <button className="border-0" to="/our-services"><Link className="nav-link active" aria-current="page" to="/our-services"  onClick={pageScroll}>
        Explore Our Services
                </Link></button>
          </div>
      </div>
    </section>
  );
}
