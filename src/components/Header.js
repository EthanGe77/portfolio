import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="heading-wrapper">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="info">
                <i className="icon ion-ios-location-outline"></i>
                <div className="right-area">
                  <h5>75 Bamburgh Cir</h5>
                  <h5>Toronto, CA</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="info">
                <i className="icon ion-ios-telephone-outline"></i>
                <div className="right-area">
                  <h5>
                    <a href="tel:6472700636">(647) 270-0636</a>
                  </h5>
                  <h6>MIN - FRI, 9AM - 7PM</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="info">
                <i className="icon ion-ios-chatboxes-outline"></i>
                <div className="right-area">
                  <h5>
                    <a href="mailto:ethan.ge73@outlook.com">
                      ethan.ge73@outlook.com
                    </a>
                  </h5>
                  <h6>REPLY IN 24 HOURS</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="downlad-btn"
          href="https://drive.google.com/file/d/1Du6-72YmZQRV6OtX4cR0IlwzR44A4r8a/view?usp=sharing"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};
