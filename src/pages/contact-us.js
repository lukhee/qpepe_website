import * as React from "react"
import { Link } from "gatsby"

import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../components/layout"
import Seo from "../components/seo"

const site_key = "6Le3jFUbAAAAABQsfEn8Zjyk32hFk6R4nqoipDCO"

const ContactPage = () => {
  const onChange = () => {
    console.log("i am recaptha")
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
          <div className="container">
            <div className="row justify-content-around">
              <div className="text-center col-md-5 shadow-lg pt-4 p-3 rounded">
                <form>
                  <div className="row">
                    <label for="email" class="form-label text-start">
                      Full_Name
                    </label>
                    <div class="form-group mb-3">
                      <input
                        type="email"
                        class="form-control bg-light"
                        id="email"
                      />
                    </div>
                    <label for="fullname" class="form-label text-start">
                      Work Email
                    </label>
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control bg-light"
                        id="name"
                      />
                    </div>
                  </div>
                  <label for="comment" class="form-label text-start w-100">
                    Comment
                  </label>
                  <div class="form-group mb-3">
                    <textarea
                      class="form-control bg-light"
                      id="exampleFormControlTextarea1"
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
                      sitekey={site_key}
                      onChange={onChange}
                    />
                  </div>
                  <button className="btn w-100 fw-bold btn-warning col-12">
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
