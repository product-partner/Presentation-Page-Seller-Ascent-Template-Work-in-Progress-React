import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <div className="contact1-max-width thq-section-max-width">
        <div className="contact1-content1">
          <div className="contact1-contact-info1">
            <div className="contact1-content2">
              <h3 className="contact1-text1 thq-heading-3">Email</h3>
              <p className="contact1-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact1-text8">
                      Have questions or want to learn more about Seller Ascent?
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-email thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact1-text6">info@sellerascent.ai</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact1-content3">
          <div className="contact1-contact-info2">
            <div className="contact1-content4">
              <h3 className="contact1-text3 thq-heading-3">Office</h3>
              <p className="contact1-text4 thq-body-large">
                {props.content3 ?? (
                  <Fragment>
                    <span className="contact1-text7">
                      Fill out the form below or reach out to us via phone or
                      email.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-address thq-body-small">
              {props.address1 ?? (
                <Fragment>
                  <span className="contact1-text5">
                    2104 38thn Avenue East, Seattle, WA 98112
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  address1: undefined,
  email1: undefined,
  content3: undefined,
  content1: undefined,
}

Contact1.propTypes = {
  address1: PropTypes.element,
  email1: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact1
