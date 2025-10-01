import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer className="footer3-footer4 thq-section-padding">
      <div className="footer3-max-width thq-section-max-width">
        <div className="footer3-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-row">
            <div className="footer3-footer-links">
              <Link
                to="/privacy-policy"
                className="footer3-link11 thq-body-small"
              >
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer3-text2">Privacy Policy</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/terms-of-service"
                className="footer3-link12 thq-body-small"
              >
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer3-text3">Terms of Service</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/data-sharing-data-usage"
                className="footer3-link13 thq-body-small"
              >
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer3-text1">
                      Data Sharing and IUsage
                    </span>
                  </Fragment>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  cookiesLink: undefined,
  privacyLink: undefined,
  termsLink: undefined,
}

Footer3.propTypes = {
  cookiesLink: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
}

export default Footer3
