import "./servicesOffered.scss";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { serviceWeOffer } from "../../../../shared/service-we-offered/serviceWeOffered";
import service1 from "../../../../assests/images/services-page/service1.png";
import service2 from "../../../../assests/images/services-page/service2.jpg";
import service3 from "../../../../assests/images/services-page/service3.jpg";
import service4 from "../../../../assests/images/services-page/service4.jpg";
import service5 from "../../../../assests/images/services-page/service5.jpg";
import service6 from "../../../../assests/images/services-page/service6.jpg";
import service7 from "../../../../assests/images/services-page/service7.png";
import service8 from "../../../../assests/images/services-page/service8.jpg";
import service9 from "../../../../assests/images/services-page/service9.jpg";

export default function Events() {
  const pageScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <section className="Ourservice">
        <div className="container pb-5 pt-5">
          <div className="row mt-4 mb-4 WhoWeAre">
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Year-end Accounts Outsourcing</h3>
              <p>
                Processing year-end accounting outsourcing for accountants. Our
                expert team of accountants has will process the accounting
                information in IRIS, CCH, RAP, TaxCalc, also able to work in
                your software using RDP secured connection.
              </p>
              <p>– Full sets of accounts and tax</p>
              <p>– Preparation of working file (All format)</p>
              <p>– Trial Balance</p>
              <p>– Draft accounts for review</p>
              <p>– Posting accounts in the software</p>
              <p>– Filing of accounts</p>
            </div>
            <div className="col-md-6">
              <img src={service1} className="img-fluid" alt="flyfin" />
            </div>
          </div>
          <div className="row mt-5 mb-4 WhoWeAre">
            <div className="col-md-6">
              <img src={service2} className="img-fluid" alt="flyfin" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Bookkeeping & VAT Outsourcing</h3>
              <p>
                We make your job easy by taking care of all your bookkeeping
                tasks. By outsourcing bookkeeping services and faster turnaround
                times, you can focus more on your practice area and make it more
                profitable.
              </p>
              <p>– Basic Bookkeeping & VAT work</p>
              <p>– Bank account reconciliation</p>
              <p>– Management accounts</p>
              <p>– VAT Returns</p>
              {/* <p>Our complete list of services is provided here <br />
          <Link className="LinkStyle" to="/our-services">Click Here</Link>

          </p> */}
            </div>
          </div>
          <div className="row mt-4 mb-4 WhoWeAre">
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Corporation Tax Outsourcing</h3>
              <p>
                We offer tax processing services to accounting firms across the
                UK and Ireland. Many accountants use outsourcing services to
                prepare and file CT600 precisely and cost-effectively.
              </p>
              <p>– Tax computationx</p>
              <p>– CT600</p>
              <p>– Online filling of CT600 with HMRC</p>
            </div>
            <div className="col-md-6">
              <img src={service3} className="img-fluid" alt="flyfin" />
            </div>
          </div>
          <div className="row mt-5 mb-4 WhoWeAre">
            <div className="col-md-6">
              <img src={service4} className="img-fluid" alt="flyfin" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">
                Self-Assessment Tax Return Outsourcing
              </h3>
              <p>
                At FLYFIN for outsourcing self-assessment tax returns, we make
                sure accountants get full support during the busy January tax
                season. Every year out tax return team prepare hundreds of
                self-assessment tax return.
              </p>
              <p>– Preparation of tax return</p>
              <p>– Individual tax summary report</p>
              <p>– Online filing of tax return with HMRC before the deadline</p>
              <p>– Tax computation statement</p>
              {/* <p>Our complete list of services is provided here <br />
          <Link className="LinkStyle" to="/our-services">Click Here</Link>

          </p> */}
            </div>
          </div>
          <div className="row mt-4 mb-4 WhoWeAre">
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Payroll Outsourcing</h3>
              <p>
                We provide very efficient payroll outsourcing to accountants in
                the UK. We have formed extraordinary technology infrastructure
                to deliver accurate payroll outsourcing services.
              </p>
              <p>– Processing payroll</p>
              <p>– New company set-up and RTI</p>
              <p>– Producing payslips (Weekly and monthly)</p>
              <p>– Processing of P60 and P45</p>
              <p>– Year-end report</p>
              <p>– Pension Enrollment</p>
            </div>
            <div className="col-md-6">
              <img src={service5} className="img-fluid" alt="flyfin" />
            </div>
          </div>
          <div className="row mt-5 mb-4 WhoWeAre">
            <div className="col-md-6">
              <img
                src={service6}
                className="img-fluid"
                alt="flyfin"
                style={{ width: "90%" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Audit services you can trust</h3>
              <p>
                In times of change and uncertainty, confidence becomes more
                important than ever. Our award-winning audit service delivers
                the rigour and quality you need to gain the assurance and
                confidence that’s so essential for your business. Perfect blend
                of people and technology For some time now we have been
                investing in our AI and data analytics capabilities, which has
                helped drive innovation in our audit methodology and processes.
                Our commitment to technology is a fundamental part of our
                success and the way we work. We continue to invest in our human
                capabilities knowing that by bringing together the best people
                with cutting-edge technology, we can help our clients create
                long-term value and provide high-quality assurance.
              </p>
              <p>– Our services</p>
              <p>– Audit</p>
              <p>– Financial reporting</p>
              <p>– Nonprofit reporting</p>
              <p>- Royalty audits</p>
              {/* <p>Our complete list of services is provided here <br />
          <Link className="LinkStyle" to="/our-services">Click Here</Link>

          </p> */}
            </div>
          </div>
          <div className="row mt-4 mb-4 WhoWeAre">
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Virtual CFO</h3>
              <p>
                With the introduction of the concept of Virtual CFO small
                businesses now receive support that they could not have afford
                previously. Virtual CFO has crafted a way for small businesses,
                following which they can get access to an experienced financial
                professional at an affordable cost. Though the services of CFO
                differ from firm to firm, However, following services are common
                and often rendered to every firm who hire a Virtual CFO:
              </p>
              <p>
                – It takes control of all the duties of a traditional CFO, but
                solely on a part-time basis
              </p>
              <p>
                – Keeps an eye on the financial health of the business usually
                by adopting cloud technology
              </p>
              <p>
                – Offer financial guidance and insight to the business on the
                matters related to finance.
              </p>
              <p>
                – Give companies back-office functions which include managing
                account ledgers, depending on the client and their needs.
              </p>
              <p>
                Often companies who cannot afford to have in-house CFO prefers
                to go with Virtual CFO. Organizations deal with many challenges
                on a daily basis in terms of financial aspects, growth,
                accounting as well as management. To curb those challenges, a
                need arises to appoint a Virtual CFO who can primarily be
                responsible for managing activities like financial reporting,
                record keeping and financial risks of the company. Presence of
                Virtual CFO helps in meeting those challenges effectively by
                giving financial and professional aid, analysis and support to
                the management
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={service7}
                className="img-fluid"
                alt="flyfin"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row mt-5 mb-4 WhoWeAre">
            <div className="col-md-6">
              <img
                src={service8}
                className="img-fluid"
                alt="flyfin"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">MIS Reporting </h3>
              <p>
                The process of gathering, analysing, and presenting data in a
                useful and meaningful way to assist management and
                decision-making processes is referred to as MIS (Management
                Information System) reporting services. MIS reporting services
                can offer businesses insightful data on their performance,
                trends, and operations, empowering them to spot areas for
                development and take informed decisions. Using specialized
                software tools to gather and analyze data from numerous sources,
                including databases, spreadsheets, and other business systems,
                is a common practice for MIS reporting services. Reports,
                dashboards, and other visualizations are used to show the
                processed and transformed data as useful information. Finance,
                marketing, operations, and human resources are just a few of the
                corporate functions that might benefit from the use of MIS
                reporting services. Financial statements, sales reports,
                inventory reports, and customer analytics are a few examples of
                frequent MIS report types.
              </p>
              {/* <p>Our complete list of services is provided here <br />
          <Link className="LinkStyle" to="/our-services">Click Here</Link>

          </p> */}
            </div>
          </div>
          <div className="row mt-4 mb-4 WhoWeAre">
            <div className="col-md-6">
              <h3 className="mb-3 mt-4">Financial Modeling</h3>
              <p>
                financial modeling is about converting a business opportunity
                into some meaningful and realistic financial data. Financial
                models should help the management in decision making and
                therefore an inaccurate and inefficient financial model can
                cause significant losses. We therefore apply our years of
                industry knowledge, expertise and research in building seamless,
                flexible and highly accurate financial models. Our multi-domain
                and multi-geography understanding of businesses have helped us
                in building in-depth and logical financial models for
                corporates, investment banks, private equity funds, start-ups
                and advisors. We are industry leaders in financial modelling and
                have built and maintained financial models of global standards.
              </p>
              <h6>Our financial modeling domain service focuses on:</h6>
              <p>
                – Strive for 99%+ accuracy with multiple level of checks and error detecting mechanisms
              </p>
              <p>
                – Build models with flexibility to tackle multiple business swings and ability to evaluate multiple scenarios
              </p>
              <p>
                – Core focus remains on making models logical and easy to understand
              </p>
              <p>
                – Adopt global best-practices in creating smart interfaces which will leave a lasting impression on model users
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={service9}
                className="img-fluid"
                alt="flyfin"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{ background: "#ecf4fe" }}>
      <div className="container">
        <div className="row pb-4 specialization">
          <h2 className="sectionTitle text-center mt-5 mb-5">
          </h2>
         <div className="row mt-6"style={{justifyContent: "center"}}>
         {serviceWeOffer?.map((item, index) => (
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
        </div>
      </div>
    </section> */}
    </>
  );
}
