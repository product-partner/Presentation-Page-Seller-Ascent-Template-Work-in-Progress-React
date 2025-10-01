import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list13.css'

const ContentList13 = (props) => {
  return (
    <div className="content-list13-container thq-section-padding">
      <div className="content-list13-max-width thq-section-max-width">
        <div className="content-list13-content thq-flex-column">
          <ul className="content-list13-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list13-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list13-text20">
                      Empower Your Amazon Business
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list13-text18">
                      Seller Ascent is an AI tool that simplifies the selling
                      process, optimizes ads, provides data-driven insights, and
                      protects margins for small Amazon sellers.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list13-text12">
                      Level the Playing Field
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list13-text14">
                      Our tool aims to level the playing field for small sellers
                      against larger brands through intelligent automation and
                      advanced features.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list13-text16">
                      Automated Ad Campaign Management
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list13-text21">
                      Seller Ascent offers automated ad campaign management to
                      help sellers reach their target audience effectively and
                      efficiently.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list13-text10">
                      Margin Protection Tools
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list13-text19">
                      Protect your margins with our margin protection tools that
                      ensure you are maximizing profits on every sale.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list13-text13">
                      Deep Insights from Brand Analytics Data
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list13-text17">
                      Gain deep insights from Brand Analytics data to make
                      informed decisions and drive your Amazon business forward.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="content-list13-li6 list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list13-text15">
                      Simplify Your Selling Process
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list13-text11">
                      With Seller Ascent, selling on Amazon becomes simpler and
                      more streamlined, allowing you to focus on growing your
                      business.
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

ContentList13.defaultProps = {
  heading4: undefined,
  content6: undefined,
  heading2: undefined,
  heading5: undefined,
  content2: undefined,
  heading6: undefined,
  heading3: undefined,
  content5: undefined,
  content1: undefined,
  content4: undefined,
  heading1: undefined,
  content3: undefined,
}

ContentList13.propTypes = {
  heading4: PropTypes.element,
  content6: PropTypes.element,
  heading2: PropTypes.element,
  heading5: PropTypes.element,
  content2: PropTypes.element,
  heading6: PropTypes.element,
  heading3: PropTypes.element,
  content5: PropTypes.element,
  content1: PropTypes.element,
  content4: PropTypes.element,
  heading1: PropTypes.element,
  content3: PropTypes.element,
}

export default ContentList13
