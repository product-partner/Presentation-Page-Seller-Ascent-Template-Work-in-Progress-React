import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing1.css'

const Pricing1 = (props) => {
  return (
    <div
      className={`pricing1-pricing1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="pricing1-max-width thq-section-max-width">
        <div className="pricing1-section-title">
          <div className="pricing1-content1">
            <h2 className="pricing1-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing1-text26">
                    Choose the Right Plan for Your Business
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="pricing1-text11 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="pricing1-text22">
                    <span className="pricing1-text23">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="pricing1-content2 thq-card">
          <div className="pricing1-price">
            <p className="pricing1-text12 thq-body-large">
              {props.plan1 ?? (
                <Fragment>
                  <span className="pricing1-text18">Starter Plan</span>
                </Fragment>
              )}
            </p>
            <h3 className="pricing1-text13 thq-heading-3">
              {props.plan1Price ?? (
                <Fragment>
                  <span className="pricing1-text25">$39.99/month</span>
                </Fragment>
              )}
            </h3>
          </div>
          <div className="pricing1-list">
            <div className="pricing1-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature1 ?? (
                  <Fragment>
                    <span className="pricing1-text19">
                      AI-powered product optimization
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature2 ?? (
                  <Fragment>
                    <span className="pricing1-text27">
                      Automated ad campaign management
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature3 ?? (
                  <Fragment>
                    <span className="pricing1-text21">
                      Data-driven insights and analytics
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature4 ?? (
                  <Fragment>
                    <span className="pricing1-text20">
                      Margin protection tools
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing1.defaultProps = {
  plan1: undefined,
  plan1Feature1: undefined,
  plan1Feature4: undefined,
  plan1Feature3: undefined,
  rootClassName: '',
  content2: undefined,
  plan1Price: undefined,
  heading1: undefined,
  plan1Feature2: undefined,
}

Pricing1.propTypes = {
  plan1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature4: PropTypes.element,
  plan1Feature3: PropTypes.element,
  rootClassName: PropTypes.string,
  content2: PropTypes.element,
  plan1Price: PropTypes.element,
  heading1: PropTypes.element,
  plan1Feature2: PropTypes.element,
}

export default Pricing1
