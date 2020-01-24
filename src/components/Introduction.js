import React from "react";

export const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-md-10 col-lg-8">
            <div className="intro">
              <div className="profile-img">
                <img src="/cover.jpg" alt="" />
              </div>
              <h2>
                <b>Ethan Ge</b>
              </h2>
              <h4 className="font-yellow">Web Developer</h4>
              <ul className="information margin-tb-30">
                <li>{/* <b>BORN : </b>March 17, 1990 */}</li>
                <li>
                  <b>EMAIL : </b>
                  <a href="mailto:ethan.ge73@outlook.com">
                    ethan.ge73@outlook.com
                  </a>
                </li>
                <li>{/* <b>MARITAL STATUS : </b>Single */}</li>
              </ul>
              <ul className="social-icons">
                {/* <li>
                  <a href="#">
                    <i className="ion-social-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-instagram"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.facebook.com/ge.yuqi">
                    <i className="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/EthanGe77">
                    <i className="ion-social-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
