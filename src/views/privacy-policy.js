import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContentList1 from '../components/content-list1'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container1">
      <Helmet>
        <title>Privacy-Policy - Seller Ascent</title>
        <meta property="og:title" content="Privacy-Policy - Seller Ascent" />
      </Helmet>
      <div className="privacy-policy-navbar">
        <div className="privacy-policy-container2">
          <div className="privacy-policy-logo">
            <img
              alt="image"
              src="/seller%20assent%20logo%20with%20wb.svg"
              className="privacy-policy-image1"
            />
            <span className="privacy-policy-text10">
              A service of Product Partner AI
            </span>
          </div>
        </div>
        <div className="privacy-policy-links-container1">
          <a href="#features" className="privacy-policy-link1 Anchor">
            features
          </a>
          <a href="#about-us" className="privacy-policy-link2 Anchor">
            About Us
          </a>
          <span className="privacy-policy-link3 Anchor">contact</span>
        </div>
        <div className="privacy-policy-cta-container">
          <a
            href="#contact-form-1-name"
            className="privacy-policy-cta-btn1 button"
          >
            GET EARLY ACCESS
          </a>
          <div data-role="BurgerMenu" className="privacy-policy-burger-menu">
            <svg viewBox="0 0 1024 1024" className="privacy-policy-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <div data-role="MobileMenu" className="privacy-policy-mobile-menu">
          <div className="privacy-policy-top">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="privacy-policy-image2"
            />
            <div
              data-role="CloseMobileMenu"
              className="privacy-policy-container3"
            >
              <svg viewBox="0 0 1024 1024" className="privacy-policy-icon12">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="privacy-policy-mid">
            <div className="privacy-policy-links-container2">
              <a href="#features" className="privacy-policy-link4 Anchor">
                features
              </a>
              <a href="#services" className="privacy-policy-link5 Anchor">
                services
              </a>
              <a href="#about-us" className="privacy-policy-link6 Anchor">
                About Us
              </a>
              <span className="privacy-policy-link7 Anchor">contact</span>
            </div>
            <button className="privacy-policy-cta-btn2 Anchor button">
              sTART BUILDING
            </button>
          </div>
          <div className="privacy-policy-bot">
            <div className="privacy-policy-social-links-container">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="privacy-policy-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="privacy-policy-icon16"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="privacy-policy-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 className="privacy-policy-text11 thq-heading-2">
        Privacy Policy - Last Updated 9/15/2025
      </h2>
      <ContentList1
        content1={
          <Fragment>
            <span className="privacy-policy-text12">
              Seller Ascent (“we,” “our,” or “us”) respects your privacy and is
              committed to protecting the information you provide to us. This
              Privacy Policy explains how we collect, use, share, and protect
              information when you use our services, including any information
              accessed from Amazon through the Selling Partner API (SP-API).   
                                                                               
                  
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="privacy-policy-text13">
              <span>
                Amazon Information: Brand Analytics data (Search Query
                Performance, Market Basket Analysis, Item Comparison &amp;
                Alternate Purchase Behavior, Brand Share) accessed only from
                sellers who explicitly authorize us via SP-API.
              </span>
              <br></br>
              <br></br>
              <span>
                Account Information: Name, email address, and billing details
                when you register with Seller Ascent.
              </span>
              <br></br>
              <br></br>
              <span>
                Usage Data: Information about how you interact with our website
                and platform, such as log files and analytics.
              </span>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="privacy-policy-text21">
              <span>
                Provide dashboards, analytics, and reporting for the seller who
                authorized us.
              </span>
              <br></br>
              <br></br>
              <span>Maintain and improve our platform.</span>
              <br></br>
              <br></br>
              <span>Provide customer support and communicate with users.</span>
              <br></br>
              <br></br>
              <span>Meet legal, regulatory, and security requirements.</span>
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="privacy-policy-text32">
              <span>
                We do not sell or disclose Amazon Information to third parties
                for their own purposes. We share Amazon Information only with
                trusted subprocessors that help us operate the platform, under
                written agreements requiring security and confidentiality
                protections:
              </span>
              <br></br>
              <br></br>
              <span>
                Hosting &amp; Infrastructure: Amazon Web Services (AWS) – secure
                storage and compute.
              </span>
              <br></br>
              <br></br>
              <span>
                Monitoring &amp; Logging: [e.g., Datadog/Sentry] – application
                performance telemetry.
              </span>
              <br></br>
              <br></br>
              <span>
                Email &amp; Support: Google Workspace, SendGrid, Intercom –
                communications with customers.
              </span>
              <br></br>
              <br></br>
              <span>
                Billing: Stripe – payment and subscription processing.
              </span>
              <br></br>
              <br></br>
              <span>
                We never aggregate or combine data across different sellers (AUP
                4.4). We never publish insights about Amazon’s business (AUP
                4.5).
              </span>
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="privacy-policy-text49">
              We retain Amazon Information only as long as needed to provide the
              service. If we ever process Amazon Customer PII, it is retained no
              longer than 30 days after order delivery, and only for permitted
              purposes.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="privacy-policy-text50">
              With Seller Ascent, small sellers can enhance their performance on
              Amazon by utilizing data-driven optimization techniques that drive
              sales and increase visibility.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-policy-text51">Introduction</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="privacy-policy-text52">
              Information We Collect
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="privacy-policy-text53">
              How We Use Information
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="privacy-policy-text54">Data Sharing</span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="privacy-policy-text55">Data Retention</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="privacy-policy-text56">Security</span>
          </Fragment>
        }
        heading7={
          <Fragment>
            <span className="privacy-policy-text57">Your Rights</span>
          </Fragment>
        }
        content61={
          <Fragment>
            <span className="privacy-policy-text58">
              You may access, update, or delete your personal information by
              contacting us at privacy@sellerascent.ai
            </span>
          </Fragment>
        }
      ></ContentList1>
      <div className="privacy-policy-footer"></div>
    </div>
  )
}

export default PrivacyPolicy
