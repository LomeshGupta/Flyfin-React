import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { event } from "../../../shared/events/event";
import "./events.scss"

export default function Events() {
const pageScroll  = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
      ],
    };

  return (
    <>
    {/* <div className="head">
    <h1 className="tophead">Our Blogs</h1>
    </div> */}
    <div className="container mb-3 mt-2 cont">
      <div className="col-md-12 mt-1 mx">
            <Slider {...settings}>
              {event.map((item, index) => (
                <div key={index} className="mt-4">
                    <div className="card h-100 pb-3 border-0 events">
                      <div className="card-body text-danger">
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
            </Slider>
            <div>
       
      </div>
          </div>
    </div>
    </>
  );
}
