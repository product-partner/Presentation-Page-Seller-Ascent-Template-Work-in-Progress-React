import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list1-text17">
                      Empowerment for Small Sellers
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list1-text18">
                      Seller Ascent provides small Amazon sellers with powerful
                      AI tools to simplify the selling process and optimize
                      their ads, giving them a competitive edge in the market.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list1-text20">
                      Intelligent Automation
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list1-text13">
                      Our AI tool automates various aspects of selling on
                      Amazon, saving time and effort for sellers while ensuring
                      efficiency and accuracy in their operations.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list1-text12">
                      Margin Protection
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list1-text15">
                      Seller Ascent helps protect margins for small sellers by
                      providing insights and strategies to maintain
                      profitability even in competitive environments.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list1-text10">
                      Data-Driven Insights
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list1-text16">
                      By leveraging data analytics, Seller Ascent offers sellers
                      valuable insights into market trends, customer behavior,
                      and competitor strategies to make informed decisions.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list1-text22">
                      Leveling the Playing Field
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list1-text21">
                      We aim to level the playing field for small sellers
                      against larger brands by empowering them with advanced
                      tools and technologies previously accessible only to big
                      corporations.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="content-list1-heading61 thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list1-text19">
                      Optimized Performance
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list1-text14">
                      With Seller Ascent, small sellers can enhance their
                      performance on Amazon by utilizing data-driven
                      optimization techniques that drive sales and increase
                      visibility.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list1-text23">
                      Optimized Performance
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content61 ?? (
                  <Fragment>
                    <span className="content-list1-text11">
                      With Seller Ascent, small sellers can enhance their
                      performance on Amazon by utilizing data-driven
                      optimization techniques that drive sales and increase
                      visibility.
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

ContentList1.defaultProps = {
  heading4: undefined,
  content61: undefined,
  heading3: undefined,
  content2: undefined,
  content6: undefined,
  content3: undefined,
  content4: undefined,
  heading1: undefined,
  content1: undefined,
  heading6: undefined,
  heading2: undefined,
  content5: undefined,
  heading5: undefined,
  heading7: undefined,
}

ContentList1.propTypes = {
  heading4: PropTypes.element,
  content61: PropTypes.element,
  heading3: PropTypes.element,
  content2: PropTypes.element,
  content6: PropTypes.element,
  content3: PropTypes.element,
  content4: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  heading6: PropTypes.element,
  heading2: PropTypes.element,
  content5: PropTypes.element,
  heading5: PropTypes.element,
  heading7: PropTypes.element,
}

export default ContentList1
