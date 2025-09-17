import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContactForm1 from '../components/contact-form1'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>
          Presentation Page - Seller Ascent Template - Work in Progress
        </title>
        <meta
          property="og:title"
          content="Presentation Page - Seller Ascent Template - Work in Progress"
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container2">
            <div className="home-logo">
              <img
                alt="image"
                src="/seller%20assent%20logo%20with%20wb.svg"
                className="home-image1"
              />
            </div>
          </div>
          <div className="home-links-container1">
            <a href="#features" className="home-link1 Anchor">
              features
            </a>
            <a href="#about-us" className="home-link2 Anchor">
              About Us
            </a>
            <span className="home-link3 Anchor">contact</span>
          </div>
          <div className="home-cta-container">
            <a href="#contact-form-1-name" className="home-cta-btn1 button">
              GET EARLY ACCESS
            </a>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="home-image2"
              />
              <div data-role="CloseMobileMenu" className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container2">
                <a href="#features" className="home-link4 Anchor">
                  features
                </a>
                <a href="#services" className="home-link5 Anchor">
                  services
                </a>
                <a href="#about-us" className="home-link6 Anchor">
                  About Us
                </a>
                <span className="home-link7 Anchor">contact</span>
              </div>
              <button className="home-cta-btn2 Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading1">Level the playing field.  </h1>
          <span className="home-text10">
            Seller Ascent simplifies Amazon’s complexity with AI that protects
            your margins, optimizes your ads, and safeguards your
            products.  Smart automation that makes small sellers mighty.
          </span>
          <a href="#contact-form-1-email" className="home-cta-btn3 button">
            GET EARLY ACCESS
          </a>
        </div>
        <div className="home-image3">
          <img
            alt="image"
            src="/workshop%20ii1-1500w.png"
            className="home-image4"
          />
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div id="features" className="home-features">
        <div className="home-heading-container1">
          <h2 className="home-heading2 Section-Heading">
            Built for the small seller
          </h2>
          <span className="home-text11">
            Small sellers fuel Amazon’s marketplace, but they don’t have the
            time, teams, or tools that larger brands use. We give them invisible
            intelligence—automation that protects margins, grows sales, and
            takes the complexity out of selling.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-feature-card1">
            <div className="home-container4">
              <img
                alt="image"
                src="/little%20box%20against%20big%20boxes-300w.png"
                className="home-image5"
              />
            </div>
            <span className="home-heading3 Card-Heading">Why</span>
            <span className="home-text12">
              Small Amazon sellers don’t have the time or expertise to manage
              complex ad tools. They’re builders, not ad managers. Without help,
              they lose sales or margin.
            </span>
          </div>
          <div className="home-feature-card2">
            <div className="home-container5">
              <img
                alt="image"
                src="/futuristic%20knob-300w.png"
                className="home-image6"
              />
            </div>
            <span className="home-heading4 Card-Heading">What</span>
            <span className="home-text13">
              <span>
                ASIN Lift is an AI automation tool. It takes your goals—sales,
                profit, budget—and transforms them into optimized ad campaigns
                that run themselves.
              </span>
              <br className="Card-Text"></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
              nisi. Nulla quis sem at nibh elementum imperdiet.
            </span>
          </div>
          <div className="home-feature-card3">
            <img
              alt="image"
              src="/hero%20image-200h.png"
              className="home-image7"
            />
            <span className="home-heading5 Card-Heading">How</span>
            <span className="home-text16">
              Behind the scenes, AI constantly analyzes data, optimizes bids,
              protects margins, and even defends against competitors. You set
              the guardrails. The AI does the work.
            </span>
          </div>
        </div>
      </div>
      <div id="services" className="home-services">
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text17 BigCard-Heading">Service name</h3>
            <span className="home-text18 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button1 button Anchor">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card2">
          <div className="home-card-content2">
            <h3 className="home-text19 BigCard-Heading">Service name</h3>
            <span className="home-text20 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button2 button Anchor">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card3">
          <div className="home-card-content3">
            <h3 className="home-text21 BigCard-Heading">Service name</h3>
            <span className="home-text22 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button3 Anchor button">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card4">
          <div className="home-card-content4">
            <h3 className="home-text23 BigCard-Heading">Service name</h3>
            <span className="home-text24 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button4 button Anchor">READ MORE</button>
          </div>
        </div>
      </div>
      <div id="about-us" className="home-about-us">
        <div className="home-heading-container2">
          <h2 className="home-text25 Section-Heading">
            Why we built Seller Ascent
          </h2>
        </div>
        <div className="home-text-container">
          <span className="home-text26">
            Amazon has become the world’s largest storefront, but behind its
            scale are millions of small sellers — the makers, families, and
            one-product brands who keep the marketplace alive. Most of them have
            fewer than ten products. They are lean, original, and ambitious. But
            Amazon wasn’t built for them. Its systems demand constant learning,
            constant tuning, and constant defense. The very people bringing
            fresh ideas to market often get buried under dashboards, acronyms,
            and endless upkeep.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text27">
            {' '}
            We believe tools should serve the creator, not the other way around.
            That’s why Seller Ascent is priced simply, works seamlessly, and
            evolves constantly with Amazon’s rules. We exist so the smallest
            sellers can compete on ideas, not resources. Because when the right
            tools disappear into the background, the work of creating takes
            center stage.
          </span>
        </div>
        <button className="home-cta-btn4 button Anchor">START BUILDING</button>
      </div>
      <div className="home-stay-in-the-loop">
        <div className="home-contact-us"></div>
        <ContactForm1
          ctaBtn={
            <Fragment>
              <span className="home-text28">SUBMIT</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text29 Section-Text">
                Join the list to hear what’s next and get early access before
                anyone else.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text30">Stay in the loop</span>
            </Fragment>
          }
        ></ContactForm1>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-footer"></div>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text31">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text32">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text33">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text34">FAQs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text35">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text36">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text37">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text38">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
