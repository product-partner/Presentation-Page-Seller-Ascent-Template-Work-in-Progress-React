import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form1.css'

const ContactForm1 = (props) => {
  return (
    <div className="contact-form1-contact1 thq-section-padding">
      <div className="contact-form1-max-width thq-section-max-width">
        <div className="contact-form1-container1">
          <div className="contact-form1-section-title thq-card">
            <h2 className="contact-form1-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form1-text6">Contact us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form1-text5 Section-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <form
            enctype="application/x-www-form-urlencoded"
            method="POST"
            action="https://api.sellerascent.ai/contact/"
            name="contact_form"
            target="self"
            id="contact_form"
            className="thq-card"
          >
            <div className="contact-form1-container2">
              <div className="contact-form1-input1 thq-flex-row">
                <input
                  type="text"
                  id="contact-form-1-name"
                  placeholder="Name"
                  name="name"
                  className="contact-form1-text-input1 thq-input"
                />
              </div>
              <div className="contact-form1-input2 thq-flex-row">
                <input
                  type="email"
                  id="contact-form-1-email"
                  required="true"
                  placeholder="Email"
                  name="email"
                  className="contact-form1-text-input2 thq-input"
                />
              </div>
            </div>
            <div className="contact-form1-checkbox1 thq-flex-row">
              <input
                type="checkbox"
                id="contact-form-1-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-1-check" className="thq-body-small">
                I accept the Terms
              </label>
            </div>
            <button className="contact-form1-cta-btn button">
              <span>
                {props.ctaBtn ?? (
                  <Fragment>
                    <span className="contact-form1-text7">
                      GET EARLY ACCESS
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm1.defaultProps = {
  content1: undefined,
  heading1: undefined,
  ctaBtn: undefined,
}

ContactForm1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  ctaBtn: PropTypes.element,
}

export default ContactForm1
