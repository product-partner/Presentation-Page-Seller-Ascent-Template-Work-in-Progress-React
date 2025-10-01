import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta11.css'

const CTA11 = (props) => {
  return (
    <div className="cta11-container thq-section-padding">
      <div className="cta11-max-width thq-section-max-width">
        <div className="cta11-content">
          <h2 className="cta11-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta11-text2">
                  Call to action that excites the visitor to try your product
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta11-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta11-text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta11-actions">
            <button className="thq-button-filled cta11-button1">
              <span className="cta11-action1 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta11-text4">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta11-button2">
              <span className="cta11-action2 thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta11-text1">Secondary action</span>
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

CTA11.defaultProps = {
  action2: undefined,
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA11.propTypes = {
  action2: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA11
