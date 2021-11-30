import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="s-contact target-section">
        <div className="row s-contact__header">
          <div className="column large-12">
            <h3 className="section-header-allcaps">Contact Me</h3>
          </div>
        </div>
        <div className="row s-contact__content">
          <div className="column large-7 medium-12">
            <h4 className="huge-text">
              Let's build the future! To collaborate with me please contact me
              at the following:
            </h4>
          </div>
          <div className="column large-4 medium-12">
            <div className="row contact-infos">
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">Email</h5>
                  <p className="contact-block__content">
                    <a className="mailtoui" href="mailto:j.ayala0695@gmail.com">
                      j.ayala0695@gmail.com
                    </a>
                  </p>
                </div>{" "}
                {/* end contact-block */}
              </div>
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">Phone</h5>
                  <p className="contact-block__content">
                    <a href="tel:+17140000000">+714 000 0000</a>
                  </p>
                </div>{" "}
                {/* end contact-block */}
              </div>
              <div className="column large-12">
                <a
                  href="mailto:j.ayala0695@gmail.com"
                  className="mailtoui btn btn--primary h-full-width"
                >
                  Let's Collaborate
                </a>
              </div>
            </div>
            {/* end contact-infos */}
          </div>
        </div>{" "}
        {/* s-contact__content */}
      </section>
    );
  }
}
