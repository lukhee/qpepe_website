import React from "react"
import { navigate } from "gatsby"
import ConnectIcon from "../../images/earth-grid.svg"

const ContactCard = () => {
  return (
    <div className="text-center my-4 container rounded">
      <div
        className="col col-md-10 m-auto bg-light py-5 px-3 px-md-5 shadow-sm border border-light position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="connect_img">
          <ConnectIcon />
        </div>
        <div className="row justify-content-between">
          <h2 className="col-12 col-lg-6 text-lg-start mb-3 mb-lg-0">
            Stay connected for our{" "}
            <span className="underline_light"> amazing offers </span>
          </h2>
          <div className="col-12 col-lg-6 my-auto text-lg-end">
            <button
              onClick={() => navigate("/contact-us")}
              className="btn btn-primary text-white fw-bold mr-auto"
            >
              Connect Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
