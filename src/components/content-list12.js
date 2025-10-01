import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list12.css'

const ContentList12 = (props) => {
  return (
    <div className="content-list12-container thq-section-padding">
      <div className="content-list12-max-width thq-section-max-width">
        <div className="content-list12-content thq-flex-column">
          <ul className="content-list12-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list12-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list12-text13">
                      Empower Your Amazon Selling
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list12-text15">
                      Seller Ascent is the AI tool you need to simplify your
                      selling process and optimize your ads. Let AI do the heavy
                      lifting for you.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list12-text16">
                      Level the Playing Field
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list12-text21">
                      Don&apos;t let larger brands overshadow your potential.
                      Seller Ascent empowers small sellers with intelligent
                      automation to compete effectively.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list12-text14">
                      Automated Ad Campaign Management
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list12-text12">
                      Say goodbye to manual ad management. Seller Ascent
                      automates your ad campaigns, saving you time and
                      maximizing your ROI.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list12-text20">
                      Margin Protection Tools
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list12-text17">
                      Protect your margins with Seller Ascent&apos;s advanced
                      tools that ensure you stay profitable in a competitive
                      marketplace.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list12-text19">
                      Data-Driven Insights
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list12-text10">
                      Make informed decisions with deep insights from Brand
                      Analytics data provided by Seller Ascent. Let data guide
                      your strategies.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list12-text11">
                      Simplify Your Selling Journey
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list12-text18">
                      Seller Ascent is designed to simplify the selling journey
                      for small Amazon sellers. Focus on growth while AI handles
                      the rest.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList12.defaultProps = {
  content5: undefined,
  heading6: undefined,
  content3: undefined,
  heading1: undefined,
  heading3: undefined,
  content1: undefined,
  heading2: undefined,
  content4: undefined,
  content6: undefined,
  heading5: undefined,
  heading4: undefined,
  content2: undefined,
}

ContentList12.propTypes = {
  content5: PropTypes.element,
  heading6: PropTypes.element,
  content3: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  content1: PropTypes.element,
  heading2: PropTypes.element,
  content4: PropTypes.element,
  content6: PropTypes.element,
  heading5: PropTypes.element,
  heading4: PropTypes.element,
  content2: PropTypes.element,
}

export default ContentList12
