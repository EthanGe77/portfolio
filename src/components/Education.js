import React from "react";

export const Education = () => {
  return (
    <section className="education-section section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="heading">
              <h3>
                <b>Education</b>
              </h3>
              <h6 className="font-lite-black">
                <b>ACADEMIC CAREER</b>
              </h6>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="education-wrapper">
              <div className="education margin-b-50">
                <h4>
                  <b>
                    MASTER OF APPLIED SCIENCE (M.A.Sc) IN COMPUTER ENGINEERING
                  </b>
                </h4>
                <h5 className="font-yellow">
                  <b>Memorial Univeristy of Newfoundland</b>
                </h5>
                <h6 className="font-lite-black margin-t-10">
                  GRADUATED IN MAY 2015(2 YEARS)
                </h6>
                <div className="margin-tb-30">
                  <ul className="list">
                    <li>Best Overall Performance</li>
                    <li>GPA 3.92/4</li>
                  </ul>
                </div>
              </div>

              <div className="education margin-b-50">
                <h4>
                  <b>BACHELOR'S DEGREE IN AUTOMATION</b>
                </h4>
                <h5 className="font-yellow">
                  <b>Northwest Polytechnical University</b>
                </h5>
                <h6 className="font-lite-black margin-t-10">
                  GRADUATED IN MAY 2012(4 YEARS)
                </h6>
                {/* <p className="margin-tb-30">
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
