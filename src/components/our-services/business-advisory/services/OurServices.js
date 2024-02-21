import "./our-services.scss";
import { ourSidebarSrvices } from "../../../../components/our-services/business-advisory/services/our-Services";
import { BusinessAdvisoryText } from "../../../../components/our-services/business-advisory/services/our-Services";
export default function OurServices() {
  return (
    <>
      <div className="container">
        <div className="row pt-5 pb-5 g-5">
          <div className="col-md-4 other-services-sidebar">
            <div className="">
              <h3 className="mb-3">Our Services</h3>
              {ourSidebarSrvices?.map((item, index) => (
                <div className="ourServicesList pt-2 mb-0 pb-0" key={index}>
                  <p>{item.servicesname}</p>
                  <b>
                    <item.icon />
                  </b>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="business-advisory-content">
              {BusinessAdvisoryText?.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  {item?.subItem?.map((data, index) => (
                    <div className="sub-content" key={index}>
                      <h3>{data.subtitle}</h3>
                      <p>{data.subText}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
