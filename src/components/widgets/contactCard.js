import React from "react"
import { navigate } from "gatsby"

const ContactCard = () => {
  return (
    <div className="text-center my-4 container rounded">
      <div className="col col-md-10 m-auto bg-light py-5 shadow-sm border border-light">
        <h2> Let’s Transform your business for a change that matters </h2>
        <button
          onClick={() => navigate("/contact-us")}
          className="btn btn-secondary text-white mb-3 fw-bold"
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default ContactCard
