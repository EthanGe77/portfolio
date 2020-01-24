import React, { useState, useEffect, useRef } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import { ProgressProvider } from "../ulti/ProgressProvider";
import TrackVisibility from "react-on-screen";

export const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="heading">
              <h3>
                <b>About me</b>
              </h3>
              <h6 className="font-lite-black">
                <b>PROFESSIONAL PATH</b>
              </h6>
            </div>
          </div>
          <div className="col-sm-8">
            <p className="margin-b-50">
              A passionate front-end developer over one year of experience in
              project analysis, design, development of Web-Based Applications
              using JavaScript frameworks React.js and Vue.js. Strong working
              experience in SPA (single page application) with Redux.
            </p>

            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="radial-progress">
                  <div className="margin-b-30">
                    <TrackVisibility>
                      <ProgressProvider
                        valueStart={0}
                        valueEnd={90}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {value => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbarWithChildren
                              value={value}
                              strokeWidth={5}
                              styles={buildStyles({
                                pathColor: "#ffa804",
                                pathTransition: "none"
                              })}
                            >
                              <h3 className="progress-percentage">
                                {roundedValue}%
                              </h3>
                              <h6 className="progress-title">React.JS</h6>
                            </CircularProgressbarWithChildren>
                          );
                        }}
                      </ProgressProvider>
                    </TrackVisibility>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="radial-progress">
                  <div className="margin-b-30">
                    <TrackVisibility>
                      <ProgressProvider
                        valueStart={0}
                        valueEnd={70}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {value => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbarWithChildren
                              value={value}
                              strokeWidth={5}
                              styles={buildStyles({
                                pathColor: "#ffa804",
                                pathTransition: "none"
                              })}
                            >
                              <h3 className="progress-percentage">
                                {roundedValue}%
                              </h3>
                              <h6 className="progress-title">Vue.JS</h6>
                            </CircularProgressbarWithChildren>
                          );
                        }}
                      </ProgressProvider>
                    </TrackVisibility>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="radial-progress">
                  <div className="margin-b-30">
                    <TrackVisibility>
                      <ProgressProvider
                        valueStart={0}
                        valueEnd={85}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {value => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbarWithChildren
                              value={value}
                              strokeWidth={5}
                              styles={buildStyles({
                                pathColor: "#ffa804",
                                pathTransition: "none"
                              })}
                            >
                              <h3 className="progress-percentage">
                                {roundedValue}%
                              </h3>
                              <h6 className="progress-title">JavaScript</h6>
                            </CircularProgressbarWithChildren>
                          );
                        }}
                      </ProgressProvider>
                    </TrackVisibility>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="radial-progress margin-b-50">
                  <div className="margin-b-50">
                    <TrackVisibility>
                      <ProgressProvider
                        valueStart={0}
                        valueEnd={65}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {value => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbarWithChildren
                              value={value}
                              strokeWidth={5}
                              styles={buildStyles({
                                pathColor: "#ffa804",
                                pathTransition: "none"
                              })}
                            >
                              <h3 className="progress-percentage">
                                {roundedValue}%
                              </h3>
                              <h6 className="progress-title">
                                Node.JS/Express
                              </h6>
                            </CircularProgressbarWithChildren>
                          );
                        }}
                      </ProgressProvider>
                    </TrackVisibility>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
