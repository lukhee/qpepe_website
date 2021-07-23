import React, { useState } from "react"
import { Link } from "gatsby"

import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "emailjs-com"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Toast from "../components/widgets/toast"

const service_id = process.env.EMAILJS_SERVICE_ID
const template_id = process.env.EMAILJS_TEMPLATE_ID
const user_id = process.env.EMAILJS_USER_ID
// ! please change the secret key from recapcha
const recaptha_key = process.env.RECAPTHA_SECRET_KEY

const ContactPage = () => {
  const [toastValue, setToastValue] = useState(false)
  const [visibility, setVisibility] = useState(false)

  const recaptchaHandler = value => {
    setVisibility(true)
  }

  const sendEmail = e => {
    e.preventDefault()
    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      result => {
        console.log(result.text)
        setToastValue(true)
      },
      error => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }
  return (
    <Layout>
      <Seo title="Contact Page" />
      <div>
        <div className="container py-3 text-center">
          <h1>
            <span className="underline"> Get in Touch </span>
          </h1>
        </div>
        <div className="py-4 bg-white">
          <div className="container position-relative">
            <Toast toastValue={toastValue} />
            <div className="row justify-content-around">
              <div className="text-center col-md-5 shadow-lg pt-4 p-3 rounded">
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <label
                      htmlFor="full_name"
                      className="form-label text-start"
                    >
                      Full_Name
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="full_name"
                        name="full_name"
                        required
                      />
                    </div>
                    <label htmlFor="email" className="form-label text-start">
                      Work Email
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control bg-light"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="message"
                    className="form-label text-start w-100"
                  >
                    Comment
                  </label>
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control bg-light"
                      id="massage"
                      name="massage"
                      rows="7"
                    ></textarea>
                  </div>
                  <p style={{ fontSize: "14px", textAlign: "left" }}>
                    By submitting this form you consent to us emailing you
                    occasionally about our products and services. You can
                    unsubscribe from emails at any time, and we will never pass
                    your email onto third parties.{" "}
                  </p>

                  <div>
                    <ReCAPTCHA
                      className="w-100 my-3"
                      sitekey={recaptha_key}
                      onChange={recaptchaHandler}
                    />
                  </div>
                  <button
                    disabled={!visibility}
                    className="btn w-100 fw-bold btn-warning col-12"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
