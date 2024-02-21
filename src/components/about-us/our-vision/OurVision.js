import aboutImg from "../../../assests/images/about-us/about-img.jpg"
import "./ourVision.scss";
export default function OurVision() {
  return (
    
    <>
    <section className="ourVision pt-5 pb-5">
       <div className="container">
        <div className="row">

        <div className="col-md-3">
            <img src={aboutImg} className="img-fluid" alt="About us" />
        </div>
        <div className="col-md-9">
            <h3>Our Vision</h3>
            <p>At Flyfin, our vision is to create a professional hub that embodies the principles of trust, integrity, and quality. We are committed to assisting and adding values to organization by offering innovative business solutions. Our website will serve as a reliable platform,  providing  expert insights, cutting-edge resources, and a collaborative environment to empower businesses and foster growth. With a focus on building long lasting relationships, we aspire to be the go-to destination for all seeking excellence in their ventures. Together, we will pave the way for success and a brighter future."</p>
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
