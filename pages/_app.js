import "../styles/globals.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>E2E Task</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="E2E Task, Shopping Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/frontend/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/frontend/assets/css/main.css" />
        <link rel="stylesheet" href="/frontend/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/frontend/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/frontend/assets/css/plugins/animate.min.css"
        />
        <link rel="stylesheet" href="/frontend/css/app.css" />
      </Head>

      <Component {...pageProps} />
      <footer className="main footer-dark">
        <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20">Best Ecommerce Product</h2>
                    <p className="mb-50">Best Ecommerce Product</p>
                    <form className="form-subcriber d-flex">
                      <input type="hidden" />{" "}
                      <input
                        type="email"
                        placeholder="Your emaill address"
                        required=""
                        name="email"
                      />
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <img
                    src="../upload/banner/1766569978974370.png"
                    alt="footer banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-1.png"
                      alt="best prices"
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Best prices & offers</h3>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-2.png"
                      alt="free delivery"
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Free delivery</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-3.png"
                      alt="great daily deal"
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Great daily deal</h3>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-4.png"
                      alt=""
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Wide assortment</h3>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-5.png"
                      alt=""
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Easy returns</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="banner-icon">
                    <img
                      src="../frontend/assets/imgs/theme/icons/i-6.png"
                      alt=""
                    />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Safe delivery</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding footer-mid dark-section main-footer-custom">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="logo mb-30">
                    <a href="#." className="mb-15">
                      <img src="e2e.png" alt="E2E Logo" width="100" />
                    </a>
                    <ul className="contact-infor">
                      <li>
                        <h4 className="widget-title">Install App</h4>
                        <p className="">From App Store or Google Play</p>
                        <div className="download-app">
                          <a href="#." className="hover-up mb-sm-2">
                            <img
                              src="../frontend/assets/imgs/theme/google-play.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-12">
                <div className="row justify-content-between">
                  <div className="col-sm-6 col-md-3 col-12">
                    <div
                      className="footer-link-widget wow animate__animated animate__fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <h4 className="widget-title">Account</h4>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                        <li>
                          <a href="#.">Sign In</a>
                        </li>
                        <li>
                          <a href="#.">View Cart</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-12">
                    <div
                      className="footer-link-widget wow animate__animated animate__fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <h4 className="widget-title">Company</h4>
                      <ul className="footer-list mb-sm-5 mb-md-0">
                        <li>
                          <a href="#.">About us</a>
                        </li>
                        <li>
                          <a href="#.">Return Policy</a>
                        </li>
                        <li>
                          <a href="#.">Support &amp; Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ms-xl-auto col-md-5 col-12 mr-0 d-sm-none d-md-block">
                    <div
                      className="footer-link-widget wow animate__animated animate__fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <h4 className="widget-title">CONTACT INFO</h4>
                      <ul className="contact-infor">
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="me-2 text-white"
                          />
                          <strong>Address: </strong> <span>Cairo,Egypt</span>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="me-2 text-white"
                          />

                          <strong>Call Us: </strong>
                          <a href="tel:(+02) 10 907 23497">
                            (+02) 10 907 23497
                          </a>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="me-2 text-white"
                          />
                          <strong>Email: </strong>
                          <a href="mailto:ahmed.mostafa@titegypt.com">
                            ahmed.mostafa@titegypt.com
                          </a>
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faClock}
                            className="me-2 text-white"
                          />
                          <strong>Hours:</strong>
                          <span> 10:00 - 8:00, Sa - Thu</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mr-0 d-sm-block d-md-none">
                <div
                  className="footer-link-widget wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4 className="widget-title">CONTACT INFO</h4>
                  <ul className="contact-infor">
                    <li>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="me-2 text-white"
                      />
                      <strong>Address: </strong> <span>Cairo,Egypt</span>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="me-2 text-white"
                      />
                      <strong>Call Us: </strong>
                      <a href="tel:(+02) 10 907 23497">(+02) 10 907 23497</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="me-2 text-white"
                      />
                      <strong>Email: </strong>
                      <a href="mailto:ahmed.mostafa@titegypt.com">
                        ahmed.mostafa@titegypt.com
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="me-2 text-white"
                      />
                      <strong>Hours:</strong>
                      <span> 10:00 - 8:00, Sa - Thu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="pb-30 wow animate__animated animate__fadeInUp dark-section"
          data-wow-delay="0"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 mb-30">
                <div className="footer-bottom"></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0">
                  Copyright © 20243. All Rights Reserved By{" "}
                  <a href="">Ahmed Mostafa</a>
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="mobile-social-icon justify-content-center">
                  <h6>Follow Us</h6>
                  <a href="#">
                    <img
                      src="../frontend/assets/imgs/theme/icons/icon-facebook-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../frontend/assets/imgs/theme/icons/icon-twitter-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../frontend/assets/imgs/theme/icons/icon-instagram-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../frontend/assets/imgs/theme/icons/icon-pinterest-white.svg"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../frontend/assets/imgs/theme/icons/icon-youtube-white.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <a href="#">
                  <img
                    className=""
                    src="../frontend/assets/imgs/theme/payment-method.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
