import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhoneAlt,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import * as style from "../styles/footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="pt-3 text-warning"> Stay Connected</h3>
          <h2 className="fs-1"> Let's build the next big thing together </h2>
          <button
            onClick={() => navigate("/contact-us")}
            className="btn btn-warning mb-3 rounded-0"
          >
            Get in Touch{" "}
            <span className="ms-2 p-1 px-2 rounded-circle bg-dark">
              <FontAwesomeIcon
                size="1x"
                icon={faGreaterThan}
                className="text-white"
              />
            </span>
          </button>
        </div>
        <div className="col-md-6 row justify-content-between">
          <div className="col-md-6">
            <h3 className="pt-3 text-warning"> Company </h3>
            <p className="mb-3 textSize_16">
              App Development Technology Consulting Research and Development
            </p>
            <p className="mb-1">
              <FontAwesomeIcon
                style={{ marginBottom: "-2px" }}
                size="1x"
                icon={faEnvelope}
                className="me-3"
              />
              <span className="textSize_16"> moshood@gmail.com </span>
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
            <h3 className="pt-3 text-warning"> Supports </h3>
            <p className='textSize_16 mb-2'> Privacy </p>
            <p className='textSize_16 mb-2'> Projects </p>
            <p className='textSize_16 mb-2'> FAQ </p>
            <p className=" text-white">
              <FontAwesomeIcon
                size="2x"
                icon={faFacebookF}
                className="me-3 pe-2 text-warning"
              />
              <FontAwesomeIcon
                size="2x"
                icon={faInstagram}
                className="me-3 pe-2 text-warning"
              />
              <FontAwesomeIcon
                size="2x"
                icon={faTwitter}
                className="me-3 pe-2 text-warning"
              />
              <FontAwesomeIcon
                size="2x"
                icon={faLinkedinIn}
                className="me-3 pe-2 text-warning"
              />
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
