import * as React from "react"
import PropTypes from "prop-types"
import { navigate, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhoneAlt,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => (
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="pt-3"> Stay Connected</h3>
          <h2 className="fs-1"> Let's build the next big thing together </h2>
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
            <h3 className="pt-3 "> Company </h3>
            <p className="mb-2 textSize_16">
              <span className="bg-white text-dark fw-bold p-1 me-1">qpepe</span>
              Development Technology Consulting Research and Development
            </p>
            <p className="mb-1">
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faEnvelope}
                className="me-3"
              />
              <span className="textSize_16">moshood@gmail.com </span>
            </p>
            <p>
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faPhoneAlt}
                className="me-3"
              />
              <span className="textSize_16">00090234765388 </span>
            </p>
          </div>
          <div className="col-md-5">
            <h3 className="pt-3 "> Supports </h3>
            <Link className='text-white' to="/">
              <p className="textSize_16 mb-2"> What we do? </p>
            </Link>
            <Link className='text-white' to="/projects">
              <p className="textSize_16 mb-2"> Our Projects </p>
            </Link>

            <Link className='text-white' to="/contact-us">
              <p className="textSize_16 mb-2"> Contact us </p>
            </Link>
            <p className=" text-white">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2x"
                  icon={faInstagram}
                  className="me-3 p-2 border-2 rounded-circle in"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2x"
                  icon={faTwitter}
                  className="me-3 p-2 border-2 rounded-circle tw"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2x"
                  icon={faLinkedinIn}
                  className="me-3 p-2 border-2 rounded-circle ldin"
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
