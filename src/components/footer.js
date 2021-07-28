import * as React from "react"
import PropTypes from "prop-types"
import { navigate, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhoneAlt,
  faGreaterThan,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
const facebook_url = process.env.FACEBOOK_URL
const linkedIn_url = process.env.LINKEDIN_URL
const twitter_url = process.env.TWITTER_URL
const instagram_url = process.env.INSTAGRAM_URL

const Footer = ({ siteTitle }) => (
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="pt-3"> Stay Connected</h3>
          <h2 className="fs-4 lh-base">
            <span className="bg-white text-dark fw-bold p-1 me-1">qpepe</span>
            Development Technology Consulting Research and Development{" "}
          </h2>
          <button
            onClick={() => navigate("/contact-us")}
            className="btn btn-light fw-bold text-dark mb-3"
          >
            Get in Touch
            <span className="ms-2 p-1 px-2 rounded-circle bg-dark">
              <FontAwesomeIcon
                size="1x"
                icon={faGreaterThan}
                className="text-white"
              />
            </span>
          </button>
        </div>
        <div className="col-md-6 row justify-content-between fw-bold">
          <div className="col-md-6">
            <h3 className="pt-3 "> Contact </h3>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faEnvelope}
                className="me-3"
              />
              <span className="textSize_16">Info@qpepe.com</span>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faPhoneAlt}
                className="me-3"
              />
              <span className="textSize_16">+65 8401 3953 </span>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faMapMarkedAlt}
                className="me-3"
              />
              <span className="textSize_16">
                4a Jalan Ayer, 389142 Singapore
              </span>
            </p>
          </div>
          <div className="col-md-5">
            <h3 className="pt-3 "> Supports </h3>
            <Link className="text-white" to="/">
              <p className="textSize_16 mb-2"> What we do? </p>
            </Link>
            <Link className="text-white" to="/projects">
              <p className="textSize_16 mb-2"> Our Projects </p>
            </Link>

            <Link className="text-white" to="/contact-us">
              <p className="textSize_16 mb-2"> Contact us </p>
            </Link>
            <p className=" text-white">
              <a href={twitter_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  size="2x"
                  icon={faTwitter}
                  className="me-3 p-2 border-2 rounded-circle tw fa-height"
                />
              </a>
              <a href={instagram_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  size="2x"
                  icon={faInstagram}
                  className="me-3 p-2 border-2 rounded-circle in fa-height"
                />
              </a>
              <a href={facebook_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  size="2x"
                  icon={faFacebook}
                  className="me-3 p-2 border-2 rounded-circle ldin fa-height"
                />
              </a>
              <a href={linkedIn_url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  size="2x"
                  icon={faLinkedinIn}
                  className="me-3 p-2 border-2 rounded-circle ldin fa-height"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-white mt-2" />
      <p className="text-center mb-0 text-muted">Qpepe @copyright 2021</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
