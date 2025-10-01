import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta12.css'

const CTA12 = (props) => {
  return (
    <div className="cta12-container thq-section-padding">
      <div className="cta12-max-width thq-section-max-width">
        <div className="cta12-content">
          <h2 className="cta12-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta12-text1">
                  Ready to Elevate Your Amazon Selling Game?
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta12-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta12-text4">
                  Sign up now to experience the power of Seller Ascent in
                  growing your business on Amazon.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta12-actions">
            <button className="thq-button-filled cta12-button1">
              <span className="cta12-action1 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta12-text3">Get Started Today</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta12-button2">
              <span className="cta12-action2 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta12-text2">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA12.defaultProps = {
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  content1: undefined,
}

CTA12.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA12
