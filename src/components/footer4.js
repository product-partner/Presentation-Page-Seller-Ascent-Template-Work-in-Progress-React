import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="footer4-image"
      />
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link1 thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text20">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link2 thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text24">Services</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link3 thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text28">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link4 thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text23">FAQs</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link5 thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text19">Blog</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row1">
            <div className="footer4-container1">
              <span className="footer4-text10 thq-body-small">
                © 2025 Seller Ascent AI            ASINLift and Seller Ascent AI
                are trademarks of Product Parter AI Inc, 2025
              </span>
            </div>
            <div className="footer4-footer-links1">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text25">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text12 thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text13 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text22">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer4-row2">
            <div className="footer4-container2">
              <span className="footer4-text14 thq-body-small">
                Amazon and all related marks are trademarks of Amazon.com, Inc.
                or its affiliates. Seller Ascent is not affiliated with or
                endorsed by Amazon.
              </span>
            </div>
            <div className="footer4-footer-links2">
              <span className="footer4-text15 thq-body-small">
                {props.privacyLink1 ?? (
                  <Fragment>
                    <span className="footer4-text27">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text16 thq-body-small">
                {props.termsLink1 ?? (
                  <Fragment>
                    <span className="footer4-text26">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="footer4-text17 thq-body-small">
                {props.cookiesLink1 ?? (
                  <Fragment>
                    <span className="footer4-text21">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  termsLink: undefined,
  link5: undefined,
  link1: undefined,
  imageAlt: 'image',
  cookiesLink1: undefined,
  cookiesLink: undefined,
  link4: undefined,
  link2: undefined,
  privacyLink: undefined,
  imageSrc: '/sa%2048.svg',
  termsLink1: undefined,
  privacyLink1: undefined,
  link3: undefined,
}

Footer4.propTypes = {
  termsLink: PropTypes.element,
  link5: PropTypes.element,
  link1: PropTypes.element,
  imageAlt: PropTypes.string,
  cookiesLink1: PropTypes.element,
  cookiesLink: PropTypes.element,
  link4: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  imageSrc: PropTypes.string,
  termsLink1: PropTypes.element,
  privacyLink1: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer4
