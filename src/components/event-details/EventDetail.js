import { eventsDetail } from "../../shared/event-detail/eventDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./event-details.scss";

export default function EventDetails() {
  const { eventId } = useParams();
  const eventDetailsData = eventsDetail.filter((c) => c.id === eventId)[0];
  const [getEventsData, setgetEventsData] = useState(eventDetailsData);
  const [display, setDisplay] = useState(false);
  return (
    <>
      <section className="services-banner mb-5 app">
        <div className="row col-md-12">
          <h1 className="text-center text-white">{getEventsData?.title}</h1>
          <span className="border-bottom separator"></span>
        </div>
      </section>

      <div className="container event-Detail">
        <div className="row">
          {getEventsData?.descImg ? (
            <img
              className="template"
              src={getEventsData?.descImg}
              alt={getEventsData?.title}
            />
          ) : null}
        </div>
        <div className="row mb-4">
          <div className="posted-date d- mt-4 mb-1">
            {/* <span>{getEventsData?.title}</span> */}
          </div>
          {/* <div className="posted-time d-inline">
            <span>Posted at {getEventsData?.postTime}</span>
            <span>
              in Uncategorized by{" "}
              <span className="hover-effects">
                {getEventsData?.categorizedBy} &nbsp;
              </span>
            </span>
            <span>
              <span className="hover-effects list">
                {getEventsData?.comments} &nbsp;
              </span>
            </span>
            <span>
              <span className="hover-effects list">
                {getEventsData?.likes} &nbsp;
              </span>
            </span>
          </div> */}
        </div>
        <div className="row">
          <div className="head">
            <h1 className="tophead">{getEventsData?.missText}</h1>
            <p>{getEventsData.note}</p>
          </div>
        </div>
        <div className="row mb-2">
          <h6 className="headingh6">{getEventsData?.eventDesc}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line1 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h2}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.Line2 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h3}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line3 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h4}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line4 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h5}</h6>
          <p className="para">{getEventsData?.line5}</p>
          <h6 className="headingh6">{getEventsData?.h6}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line6 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h7}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line7 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h8}</h6>
          <p
            className="para"
            dangerouslySetInnerHTML={{ __html: getEventsData?.line8 }}
          ></p>
          <h6 className="headingh6">{getEventsData?.h9}</h6>
          <p className="para">{getEventsData?.line9}</p>
          <h6 className="headingh6">{getEventsData?.h10}</h6>
          <p className="para">{getEventsData?.line10}</p>
          <h6 className="headingh6">{getEventsData?.h11}</h6>
          <p className="para">{getEventsData?.line11}</p>
          <h6 className="headingh6">{getEventsData?.h12}</h6>
          <p className="para">{getEventsData?.line12}</p>
          <h6 className="headingh6">{getEventsData?.h13}</h6>
          <p className="para">{getEventsData?.line13}</p>
        </div>

        <div
          className={`container ${
            getEventsData?.id == "datasecurity" ? "dis" : "non"
          }`}
        >
          <div className="row pb-4 specialization"></div>
          <div className="row mt-6" style={{ justifyContent: "center" }}>
            <h1 className="sectionTitle text-center mt-5 mb-5">
              {getEventsData?.heading}
            </h1>
            <div className="card">
              <img src={getEventsData?.im1} className="d-block ig" alt="..." />
              <h5>{getEventsData?.imd1}</h5>
            </div>
            <div className="card">
              <img src={getEventsData?.im2} className="d-block ig" alt="..." />
              <h5>{getEventsData?.imd2}</h5>
            </div>
            <div className="card">
              <img src={getEventsData?.im3} className="d-block ig" alt="..." />
              <h5>{getEventsData?.imd3}</h5>
            </div>
            <div className="card">
              <img src={getEventsData?.im4} className="d-block ig" alt="..." />
              <h5>{getEventsData?.imd4}</h5>
            </div>
            <div className="card">
              <img src={getEventsData?.im5} className="d-block ig" alt="..." />
              <h5>{getEventsData?.imd5}</h5>
            </div>
          </div>
        </div>
        <div
          className={`container ${
            getEventsData?.id == "datasecurity" ? "dis" : "non"
          }`}
        >
          <div className="row pb-4 specialization"></div>
          <div className="row mt-6" style={{ justifyContent: "center" }}>
            <h1 className="sectionTitle text-center mt-5 mb-5">
              Staff & Office access
            </h1>
            <div className="card">
              <img
                src={getEventsData?.image}
                className="d-block ig"
                alt="..."
              />
              <h5>
                Employees are not allowed to take their laptops, iPad, mobile.
                They can use only a company-provided device
              </h5>
            </div>
            <div className="card">
              <img src={getEventsData?.img2} className="d-block ig" alt="..." />
              <h5>Website access restriction on a few domains</h5>
            </div>
            <div className="card">
              <img src={getEventsData?.img3} className="d-block ig" alt="..." />
              <h5>Restricted door access and CCTV cameras</h5>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <h3>{eventDetailsData.comments}</h3>
        </div> */}
      </div>
    </>
  );
}
