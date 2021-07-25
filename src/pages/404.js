import * as React from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container bg-light text-center my-4">
      <div className="col col-md-6text-center m-auto">
        <StaticImage
          src="../images/logo/page-not-found.svg"
          alt="logo 2"
          placeholder="blurred"
          width={200}
          className="m-auto mb-3"
        />
      </div>
      <p className="text-danger fw-bold"> Page you are requesting doesn't exit please!!!</p>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  </Layout>
)

export default NotFoundPage
