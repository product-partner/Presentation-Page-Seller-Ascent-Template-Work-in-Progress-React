import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  return (
    <div className="features2-layout302 thq-section-padding">
      <div className="features2-max-width thq-section-max-width">
        <div className="features2-section-title thq-flex-column">
          <span className="features2-text10 thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features2-text25">
                  Empowering Small Sellers with Smart Automation
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="features2-text11 thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features2-text22">
                  Key Features of Seller Ascent
                </span>
              </Fragment>
            )}
          </h2>
          <p className="features2-text12 thq-body-large">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features2-text16">
                  Discover the powerful features that make Seller Ascent the
                  ultimate AI tool for small Amazon sellers.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features2-content1">
          <div className="thq-grid-5">
            <div className="features2-feature1 thq-flex-column">
              <div className="thq-flex-column">
                <h3 className="features2-title11 thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features2-text24">
                        Simplified Selling
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features2-description11 thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features2-text21">
                        Seller Ascent simplifies the complexities of selling on
                        Amazon, making it easier for small sellers to navigate
                        the platform.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature2 thq-flex-column">
              <div className="thq-flex-column">
                <h3 className="features2-title12 thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features2-text20">Optimized Ads</span>
                    </Fragment>
                  )}
                </h3>
                <span className="features2-description12 thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features2-text19">
                        Seller Ascent optimizes ads to help small sellers reach
                        their target audience effectively and maximize their
                        advertising ROI.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature3 thq-flex-column">
              <div className="thq-flex-column">
                <h3 className="features2-title13 thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features2-text23">
                        Margin Protection
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features2-description13 thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features2-text15">
                        Protect your margins with Seller Ascent&apos;s smart
                        automation that helps you stay competitive without
                        compromising profitability.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature4 thq-flex-column">
              <div className="thq-flex-column">
                <h3 className="features2-title14 thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features2-text18">
                        Leveling the Playing Field
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features2-description14 thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features2-text13">
                        Seller Ascent empowers small sellers to compete against
                        larger brands by providing intelligent automation tools
                        that enhance their capabilities.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature5 thq-flex-column">
              <div className="thq-flex-column">
                <h3 className="features2-title15 thq-heading-3">
                  {props.feature5Title ?? (
                    <Fragment>
                      <span className="features2-text17">
                        Data-Driven Insights
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="features2-description15 thq-body-small">
                  {props.feature5Description ?? (
                    <Fragment>
                      <span className="features2-text14">
                        Gain valuable insights into your Amazon selling
                        performance with Seller Ascent&apos;s data-driven
                        analytics, helping you make informed decisions for
                        growth.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-actions"></div>
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature4Description: undefined,
  feature5Description: undefined,
  feature3Description: undefined,
  sectionDescription: undefined,
  feature5Title: undefined,
  feature4Title: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
  feature1Description: undefined,
  sectionTitle: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
  slogan: undefined,
}

Features2.propTypes = {
  feature4Description: PropTypes.element,
  feature5Description: PropTypes.element,
  feature3Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  feature5Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  slogan: PropTypes.element,
}

export default Features2
