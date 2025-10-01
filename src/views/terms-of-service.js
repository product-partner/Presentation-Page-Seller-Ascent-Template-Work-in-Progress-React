import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContentList11 from '../components/content-list11'
import './terms-of-service.css'

const TermsOfService = (props) => {
  return (
    <div className="terms-of-service-container1">
      <Helmet>
        <title>Terms-of-Service - Seller Ascent</title>
        <meta property="og:title" content="Terms-of-Service - Seller Ascent" />
      </Helmet>
      <div className="terms-of-service-navbar">
        <div className="terms-of-service-container2">
          <div className="terms-of-service-logo">
            <img
              alt="image"
              src="/seller%20assent%20logo%20with%20wb.svg"
              className="terms-of-service-image1"
            />
            <span className="terms-of-service-text10">
              A service of Product Partner AI
            </span>
          </div>
        </div>
        <div className="terms-of-service-links-container1">
          <a href="#features" className="terms-of-service-link1 Anchor">
            features
          </a>
          <a href="#about-us" className="terms-of-service-link2 Anchor">
            About Us
          </a>
          <span className="terms-of-service-link3 Anchor">contact</span>
        </div>
        <div className="terms-of-service-cta-container">
          <a
            href="#contact-form-1-name"
            className="terms-of-service-cta-btn1 button"
          >
            GET EARLY ACCESS
          </a>
          <div data-role="BurgerMenu" className="terms-of-service-burger-menu">
            <svg viewBox="0 0 1024 1024" className="terms-of-service-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <div data-role="MobileMenu" className="terms-of-service-mobile-menu">
          <div className="terms-of-service-top">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="terms-of-service-image2"
            />
            <div
              data-role="CloseMobileMenu"
              className="terms-of-service-container3"
            >
              <svg viewBox="0 0 1024 1024" className="terms-of-service-icon12">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="terms-of-service-mid">
            <div className="terms-of-service-links-container2">
              <a href="#features" className="terms-of-service-link4 Anchor">
                features
              </a>
              <span className="terms-of-service-link5 Anchor">services</span>
              <a href="#about-us" className="terms-of-service-link6 Anchor">
                About Us
              </a>
              <span className="terms-of-service-link7 Anchor">contact</span>
            </div>
            <button className="terms-of-service-cta-btn2 Anchor button">
              sTART BUILDING
            </button>
          </div>
          <div className="terms-of-service-bot">
            <div className="terms-of-service-social-links-container">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="terms-of-service-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="terms-of-service-icon16"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="terms-of-service-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 className="terms-of-service-text11 thq-heading-2">
        Terms of Service - Effective Date 09/15/2025
      </h2>
      <ContentList11
        content1={
          <Fragment>
            <span className="terms-of-service-text12">
              By accessing or using Seller Ascent, you agree to these Terms of
              Service. If you do not agree, you may not use the platform.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="terms-of-service-text13">
              You must be a brand-registered seller or authorized agent of one
              to use Seller Ascent.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="terms-of-service-text14">
              <span>
                You authorize Seller Ascent to access your Amazon Brand
                Analytics data through SP-API.
              </span>
              <br></br>
              <br></br>
              <span>
                You may use the platform only for your own authorized Amazon
                seller account.
              </span>
              <br></br>
              <br></br>
              <span>
                You agree not to share, resell, or misuse data retrieved from
                Amazon.
              </span>
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="terms-of-service-text22">
              <span>
                You may not use Seller Ascent to violate Amazon’s policies,
                applicable laws, or intellectual property rights.
              </span>
              <br></br>
              <br></br>
              <span>
                You may not reverse engineer or attempt to access systems
                without authorization.
              </span>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="terms-of-service-text27">
              <span>
                Subscription fees are billed monthly or annually as selected.
              </span>
              <br></br>
              <br></br>
              <span>All payments are processed securely via Stripe.</span>
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="terms-of-service-text32">
              <span>
                We comply with Amazon’s Acceptable Use Policy (AUP) and Data
                Protection Policy (DPP). Specifically:
              </span>
              <br></br>
              <br></br>
              <span>
                We do not aggregate or combine data across sellers (AUP 4.4).
              </span>
              <br></br>
              <br></br>
              <span>
                We do not publish insights about Amazon’s business (AUP 4.5).
              </span>
              <br></br>
              <br></br>
              <span>
                We disclose all subprocessors that may receive Amazon
                Information (AUP 4.6).
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-of-service-text43">
              1. Acceptance of Terms
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="terms-of-service-text44">2. Eligibility</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="terms-of-service-text45">3. Use of Services</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="terms-of-service-text46">4. Restrictions</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="terms-of-service-text47">5. Fees and Payment</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="terms-of-service-text48">
              6. Data Protection &amp; Compliance
            </span>
          </Fragment>
        }
        content61={
          <Fragment>
            <span className="terms-of-service-text49">
              Our liability is limited to the amount paid by you in the last 12
              months.
            </span>
          </Fragment>
        }
        content62={
          <Fragment>
            <span className="terms-of-service-text50">
              Seller Ascent provides insights “as is” without warranty of
              accuracy or fitness for purpose.
            </span>
          </Fragment>
        }
        content63={
          <Fragment>
            <span className="terms-of-service-text51">
              We may suspend or terminate your access if you violate these Terms
              or Amazon’s policies.
            </span>
          </Fragment>
        }
        heading61={
          <Fragment>
            <span className="terms-of-service-text52">
              9. Limitation of Liability
            </span>
          </Fragment>
        }
        heading62={
          <Fragment>
            <span className="terms-of-service-text53">8. Disclaimers</span>
          </Fragment>
        }
        heading63={
          <Fragment>
            <span className="terms-of-service-text54">7. Termination</span>
          </Fragment>
        }
        content611={
          <Fragment>
            <span className="terms-of-service-text55">
              <span className="terms-of-service-text56">
                Questions? Contact legal@sellerascent.ai
              </span>
              <br className="terms-of-service-text57"></br>
              <span>.</span>
            </span>
          </Fragment>
        }
        heading611={
          <Fragment>
            <span className="terms-of-service-text59">10. Contact</span>
          </Fragment>
        }
      ></ContentList11>
      <div className="terms-of-service-footer"></div>
    </div>
  )
}

export default TermsOfService
