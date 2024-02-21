import "./ourTeamMember.scss";
import { teaMember } from "../../../shared/professionals/TeamMember";
import { founder } from "../../../shared/professionals/founder";
import { founder2 } from "../../../shared/professionals/founder2";

export default function OurTeamMember() {
  return (
    <>
      <section className="ourTeamMember">
        <div className="container pt-2 pb-2">
          <div className="row mt-4 mb-4" style={{ justifyContent: "center" }}>
            <div className="divv">
              <h3 className="text-center mb-3">Founder</h3>
              <p className="text-center mb-5">
                “A leader is a person who can inspire other to dream more, learn
                more, do more and become more.” Flyfin , where innovation meets
                integrity in the world of finance. As the founder, my vision for
                this company has always been centered on providing unparalleled
                expertise and professionalism.
              </p>
            </div>
            {founder?.map((item, index) => (
              <div className="col-md-4 mb-4 spans" key={index}>
                <div className={`card ${index % 2 != 0 ? "team-membre" : ""}`}>
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <img
                      className="mb-2 img-fluid1"
                      src={item.TeamMemberImg}
                      alt={item.TeamMemberName}
                      width="60%"
                    />
                    <div className="ok1">
                      <h4 className="mb-2">{item.TeamMemberName}</h4>
                      <p>{item.TeamMemberDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-4 mb-4" style={{ justifyContent: "center" }}>
            {founder2?.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className={`card ${index % 2 != 0 ? "team-membre" : ""}`}>
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <img
                      className="mb-2 img-fluid2"
                      src={item.TeamMemberImg}
                      alt={item.TeamMemberName}
                      width="60%"
                    />
                    <div className="ok2">
                      <h4 className="mb-2">{item.TeamMemberName}</h4>
                      <p>{item.TeamMemberDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container pt-2 pb-2">
          <div className="row mt-4 mb-4" style={{ justifyContent: "center" }}>
            <h3 className="text-center mb-3">Our Advisors</h3>
            <p>
              <br></br>
            </p>
            {/* <p className="text-center mb-5">
              “A leader is a person who can inspire other to dream more, learn
              more, do more and become more.” FLYFIN is lead by a team of
              professionals having expertise in their core field and ample
              experience of providing quality services across the industries.
              Our professional team comprises of:
            </p> */}
            {teaMember?.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className={`card ${index % 2 != 0 ? "team-membre" : ""}`}>
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <img
                      className="mb-2 img-fluid"
                      src={item.TeamMemberImg}
                      alt={item.TeamMemberName}
                      width="60%"
                    />
                    <div className="ok">
                      <h4 className="mb-2">{item.TeamMemberName}</h4>
                      <p>{item.TeamMemberDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
