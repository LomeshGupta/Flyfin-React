import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const [formstate, setformstate] = useState({});
  const changehandler = (Event) => {
    setformstate({ ...formstate, [Event.target.name]: Event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const Body =
      "Name : " + formstate.name + "\n Company : " + formstate.company;

    emailjs
      .sendForm("service_guf0xqn", "template_iqnxscl", form.current, {
        publicKey: "1iH__A9UU69Je6fGy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Form Submitted Successfully!");
          document.getElementById("formdata").reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // const submithandler = () => {
  //   const config = {
  //     SecureToken: "b2bfa8e8-81ff-4e25-bd54-df9168af516a",
  //     To: formstate.emails,
  //     From: "Info@flyfin.in",
  //     Subject: "FlyFin Alert",
  //     Body:
  //       "Dear " +
  //       formstate.name +
  //       "\n\nThank you for Reaching out to us.\n" +
  //       " We will try to revert back as soon as possible.",
  //   };
  //   window.Email.send(config).then((mesaage) => alert(mesaage));
  //   const config2 = {
  //     SecureToken: "b2bfa8e8-81ff-4e25-bd54-df9168af516a",
  //     To: "Info@flyfin.in",
  //     From: "Info@flyfin.in",
  //     Subject: "FlyFin Alert",
  //     Body:
  //       "Dear Info, \n" +
  //       formstate.name +
  //       " from comapny : " +
  //       formstate.company +
  //       "tried Contacting you. email :" +
  //       formstate.emails +
  //       ", Phone :" +
  //       formstate.phone +
  //       "and Their Enquiry :" +
  //       formstate.enquiry,
  //   };
  // };
  // const submithandler2 = () => {
  //   const config = {
  //     SecureToken: "b2bfa8e8-81ff-4e25-bd54-df9168af516a",
  //     To: "Info@flyfin.in",
  //     From: "Info@flyfin.in",
  //     Subject: "FlyFin Alert",
  //     Body:
  //       "Dear Info, " +
  //       formstate.name +
  //       " from comapny : " +
  //       formstate.company +
  //       ",   tried Contacting you. email :" +
  //       formstate.emails +
  //       ",   Phone :" +
  //       formstate.phone +
  //       "and   Their Enquiry is: " +
  //       formstate.enquiry,
  //   };
  //   window.Email.send(config).then((mesaage) => alert(mesaage));
  // };
  return (
    <>
      <div className="section contact-us">
        <ToastContainer />
        <div className="container">
          <div className="row mt-5 mb-5 d-flex justify-content-center">
            <div className="col-md-6 border bg-light">
              <form id="formdata" ref={form} onSubmit={sendEmail}>
                <div className="row p-3">
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      onChange={changehandler}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Company Name
                    </label>
                    <input
                      id="company"
                      onChange={changehandler}
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Phone Number
                    </label>
                    <input
                      onChange={changehandler}
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="" className="form-label">
                      Email Address
                    </label>
                    <input
                      onChange={changehandler}
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label htmlFor="" className="form-label">
                      Enquiry
                    </label>
                    <textarea
                      onChange={changehandler}
                      type="text"
                      id="enquiry"
                      name="enquiry"
                      className="form-control"
                      placeholder="Enquiry"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-check pt-1">
                      <input
                        id="checkbox"
                        name="checkbox"
                        onChange={changehandler}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        I'm happy to recieve promotion information from FLYFIN
                        Outsourcing.
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <input
                      type="submit"
                      style={{ background: "rgb(0, 74,173)" }}
                      className="text-white fs-5 mt-4 form-control"
                      value="send email"
                      // onClick={submithandler2}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
