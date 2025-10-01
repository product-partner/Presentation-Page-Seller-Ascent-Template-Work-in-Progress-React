import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta13.css'

const CTA13 = (props) => {
  return (
    <div className="cta13-container thq-section-padding">
      <div className="cta13-max-width thq-section-max-width">
        <div className="cta13-content">
          <h2 className="cta13-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta13-text4">
                  Call to action that excites the visitor to try your product
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta13-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta13-text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta13-actions">
            <button className="thq-button-filled cta13-button1">
              <span className="cta13-action1 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta13-text2">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta13-button2">
              <span className="cta13-action2 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta13-text1">Secondary action</span>
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

CTA13.defaultProps = {
  action2: undefined,
  action1: undefined,
  content1: undefined,
  heading1: undefined,
}

CTA13.propTypes = {
  action2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA13
