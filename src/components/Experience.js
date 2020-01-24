import React from "react";

export const Experience = () => {
  return (
    <section className="experience-section section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="heading">
              <h3>
                <b>Professional Experience</b>
              </h3>
              <h6 className="font-lite-black">
                <b>PREVIOUS JOBS</b>
              </h6>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience margin-b-50">
              <h4>
                <b>Web Developer</b>
              </h4>
              <h5 className="font-yellow">
                <b>SomoPlay Inc.</b>
              </h5>
              <h6 className="margin-t-10">2019 Jan - Now</h6>
              <p className="font-semi-white margin-tb-30">
                Project description: International student online portal is an
                online web application for Canadian colleges and educational
                institutes to recruit international students and review their
                applications. It also serves as an online portal for
                international students and agents to submit applications, make
                payments and check status of the applications.
              </p>
              <ul className="list margin-b-30">
                <li>
                  Technology stack:React.js/Redux/Saga/Material
                  UI/Node.js/Express/MongoDB
                </li>
                <li>
                  Drafted and designed multiple reusable components and modules
                  using Material UI
                </li>
                <li>
                  Refactored legacy code to adapt new features (React hooks) and
                  improve reusability
                </li>
                <li>
                  Improved business logic control using Redux for state
                  management and Redux-Saga for API consumption
                </li>
                <li>Optimized routing system to enhance user experience</li>
                <li>
                  Developed front-end registration/authenticate system with
                  async validation
                </li>
                <li>
                  Extended the utility library for form validation and user
                  notifications
                </li>
                <li>
                  Collaborated with back-end team for API refinement and
                  improvement with Postman
                </li>
              </ul>
              <p className="font-semi-white margin-tb-30">
                Project description: A fully customizable small business landing
                page content management system (CMS). This is a side project to
                test Vue.js framework’s capability.
              </p>
              <ul className="list margin-b-30">
                <li>
                  Technology Stack: Vue.js/Vue-Router/Node.js/Express/MongoDB
                </li>
                <li>
                  Customized and deployed json-server for fast prototyping
                </li>
                <li>Coded multiple reusable UI templates and views</li>
              </ul>
            </div>

            <div className="experience margin-b-50">
              <h4>
                <b>IT Consultant</b>
              </h4>
              <h5 className="font-yellow">
                <b>RHK Consulting Group</b>
              </h5>
              <h6 className="margin-t-10">2017 April - 2019 Jan</h6>
              <ul className="list margin-b-30">
                <p className="font-semi-white margin-tb-30"></p>
                <li>
                  Designed and implemented automated Selenium service (in Java)
                  for web automation
                </li>
                <li>
                  Deployed virtual environment (VMware ESXi, Hyper-V) to host
                  web services
                </li>
                <li>Performed SQL database maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
