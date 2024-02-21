import { ourMission } from "../../../shared/about/about";
import "./ourMissionStatement.scss";
import "../../home/our-specilization/ourSpecialization.scss";
export default function OurMissionStatement() {
  return (
    <>
      <div className="container pb-5 ourMission">
        <h3 className="text-center pt-4 mt-5 mb-5">Our Mission</h3>
        <div className="row specialization">
          {ourMission?.map((item, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-12 mb-4 mt-1 text-center"
              key={index}
            >
              <div className="card h-100">
                <div className="card-body">
                  {/* <p className="center-icon">
                    <item.iconData />
                  </p> */}
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
