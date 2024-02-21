import { ourApproach } from "../../../shared/about/ourApproach";
import coreValue from "../../../assests/images/about-us/core-value.jpg";
import "./ourApproach.scss";
export default function OurApproach() {
  return (
    <>
      <div className="container ourApproach">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 pt-5">
            <h3 className="mb-4">Our Approach</h3>
            <ul className="ourApproach">
              {ourApproach?.map((item, index) => (
                <>
                  <li key={index} className="mb-3">
                    {item.name}
                  </li>
                  <ul className="mb-2">
                    {item?.fourPillars?.map((data, index) => (
                      <li
                        key={index}
                        className="mb-3"
                        dangerouslySetInnerHTML={{ __html: data.pillarsName }}
                      ></li>
                    ))}
                  </ul>
                </>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <img src={coreValue} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
