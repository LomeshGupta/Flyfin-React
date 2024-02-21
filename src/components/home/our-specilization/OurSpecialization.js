import { ouSpecializaion } from "../../../shared/our-specialization/ourSpecialization";
import xero from "../../../assests/images/software/xero.png"
import quic from "../../../assests/images/software/quicbooks.png"
import sage from "../../../assests/images/software/sage.png"
import cch from "../../../assests/images/software/cch.png"
import dext from "../../../assests/images/software/dext.png"
import relate from "../../../assests/images/software/relate.png"
import surf from "../../../assests/images/software/surf.png"
import zoho from "../../../assests/images/software/zoho.png"
import payroll from "../../../assests/images/software/payroll.png"
import "./ourSpecialization.scss";

export default function OurSpecialization() {
  return (
    <section style={{ background: "#ecf4fe" }}>
      <div className="container">
        <div className="row pb-4 specialization">
          <h2 className="sectionTitle text-center mt-5 mb-5">
            Certifications
          </h2>
         <div className="row mt-6"style={{justifyContent: "center"}}>
         {ouSpecializaion?.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12 col-sm-12 mb-5 mt-3 text-center" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <p className="center-icon">
                    <item.iconData />
                  </p>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
         </div>
         <div>
         <h2 className="sectionTitle text-center mt-5 mb-5">
            Software Expertise
          </h2>
          <div className="row mt-6"style={{justifyContent: "center"}}>
          <img src={xero} className="d-block soft" alt="..."/>
           <img src={quic} className="d-block soft" alt="..."/>
           <img src={sage} className="d-block sage" alt="..."/>
           <img src={cch} className="d-block soft" alt="..."/>
           <img src={dext} className="d-block soft" alt="..."/>
           <img src={relate} className="d-block soft" alt="..."/>
           <img src={surf} className="d-block soft" alt="..."/>
           <img src={zoho} className="d-block soft" alt="..."/>
           <img src={payroll} className="d-block soft" alt="..."/>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
}
