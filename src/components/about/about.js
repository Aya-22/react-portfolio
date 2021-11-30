import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/avatars/0.jpg" alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              I am currently working at WG as an Assistant Account Manager. I
              have been at the company for 4 years. 
              
              In addition to work, I am a
              student wiht the UCI coding bootcamp. My graduation date for
              bootcamp is December 1, 2021.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Jennifer Ayala <br />
                  Santa Ana, CA 92704 US <br />
                  <a href="tel:+714000000">+714000000</a> <br />
                  <a href="mailto:#0">j.ayala0695@gmail.com</a>
                </p>
              </div>
              {/* <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                  Download CV
                </a>
              </div> */}
            </div>
          </div>
        </div>{" "}
        {/* end row */}
      </section>
    );
  }
}
