import "./applyForm.scss";

export default function ApplyForm() {
  return (
    <>
      <section className="applyForm pt-5 pb-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center mb-4">
            <div className="col-md-8">
              <h3 className="text-center">
                We are growing. Become a part of our growth. Fill in the form
                here to Apply-
              </h3>
            </div>
          </div>
          <div className="row pt-4 d-flex justify-content-center align-item-center">
            <div className="col-md-10 bg-light">
              <h4 className="form-name text-center mt-5 mb-4">
                Personal Details
              </h4>
              {/* <hr /> */}
              <form>
                <div className="row p-3">
                  <div className="col-md-4 mb-2">
                    <label for="" class="form-label">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-md-4 mb-2">
                    <label for="" class="form-label">
                      Mobile Number *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="col-md-4 mb-2">
                    <label for="" class="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-4 mb-2">
                    <label for="" class="form-label">
                      State *
                    </label>
                    <select className="form-control">
                      <option value="">Please Select State</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="" class="form-label">
                      City *
                    </label>
                    <select className="form-control">
                      <option value="">Please Select City</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="" class="form-label">
                      Age *
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Age"
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-between">
                    <label for="" class="form-label">
                      Gender *
                    </label>
                    <div class="form-check pt-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Male
                      </label>
                    </div>
                    <div class="form-check pt-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <h4 className="form-name mb-4 text-center mt-5 mb-5">
                  Educational Qualification
                </h4>
                <div className="row p-3">
                  <div className="col-md-6 mb-2">
                    <label for="" class="form-label">
                      Graduation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Graduation"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label for="" class="form-label">
                      Specialization *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Specialization *"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label for="" class="form-label">
                      Post Graduation *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Post Graduation *"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="" class="form-label">
                      Other Qualification
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Other Qualification"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <button
                      style={{ background: "rgb(0, 74,173)" }}
                      className="text-white fs-5 mt-4 form-control"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
