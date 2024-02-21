import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { event } from "../shared/events/event";
import "./allblog.scss";

export default function AllBlogs() {
const pageScroll  = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  return (
    <>
    {/* <div className="head">
    <h1 className="tophead">Our Blogs</h1>
    </div> */}
    <div className="container">
         <div className="row mt-6"style={{justifyContent: "center"}}>
              {event.map((item, index) => (
                <div className="col-lg-4 col-md-3 col-sm-12 col-sm-12 mb-5 mt-3 text-center" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                        <p className="text-center">
                          <img src={item.qoutesPic} alt={item.qoutesName} className="img-fluid" style={{height:"30vh", width:"80%"}} />
                        </p>
                        <h4 className="events-title">{item.eventsTitle}</h4>
                        <p className="mb-2">{item.eventsDesc}</p>
                        {/* <span className="pb-2 d-block">{item.eventsDate}</span> */}
                        <p className="readMore">
                          <Link className="link-style" to={`${item.eventId}`} onClick={pageScroll}>{item.readMoreText}
                          </Link>
                           </p>
                      </div>
                    </div>
                  </div>
              ))}
            <div>
       
      </div>
          </div>
    </div>
    </>
  );
}
