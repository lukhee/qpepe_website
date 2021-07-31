import * as React from "react"
import { navigate, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Testimonial from "../components/widgets/testimonial"
import WhatWeDo from "../components/widgets/whatWeDo"
import ContactCard from "../components/widgets/contactCard"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const testimonialData = data.testimonial.edges[0].node.testimonial
  const whatWeOfferData = data.what_we_offer.edges[0].node.whatweoffer
  return (
    <Layout>
      <Seo title="Home" />
      <div className="container py-5">
        <div className="banner">
          <div className="col-12 col-md-6 my-auto col-xs-12 p-2 h-100">
            <div
              data-sal-delay="200"
              data-sal="fade"
              data-sal-easing="ease"
              className="bg-white p-5 shadow-lg h-100 rounded"
            >
              <div className="m-auto">
                <h1
                  className="fs-1"
                  data-sal-delay="400"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  Grow your <span className="underline"> Business</span> with
                  QPEPE
                </h1>
                <div
                  data-sal-delay="900"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  <p className="text-secondary">
                    QPEPE delivers the technical capability and professional
                    solutions that enable exceptional client services
                  </p>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="btn btn-secondary fw-bold mb-3"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-container col-md-8 col-xs-12 banner-image">
            <div className=" h-100">
              <div className="h-100 m-auto">
                <div>
                  <StaticImage
                    src="../images/banners/christina-wocintechchat-com-PbUShBsiwZI-unsplash.jpg"
                    alt="logo 2"
                    placeholder="blurred"
                    width={800}
                    height={650}
                    className="my-auto w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Page */}
      <div className="bg-white py-5 mb-4">
        <div className="container">
          <p className="text-md-start text-center">
            <span className="underline fs-1"> Get to know us better </span>
          </p>
          <p className="col-md-8 col-12 text-secondary">
            QPEPE is a web development agency. Our experienced web designers,
            UX/UI specialists, web developers, SEOs, digital marketers and
            managers specialize in business websites creation. We will deliver
            you marketing and technology solutions to achieve your company's
            goals in the best way.
          </p>
          <div className="row mb-3 justify-content-between">
            <div className="col-md-5">
              <div className="h-175 mb-3">
                <div className="p-5 bg-secondary rounded">
                  <StaticImage
                    src="../images/banners/rubaitul-azad-QeXsrpjsVPM-unsplash.jpg"
                    alt="logo 2"
                    placeholder="blurred"
                    width={360}
                    height={430}
                    className="m-auto w-100 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pb-3 text-md-start text-center">
                <p className="lh-base">
                  We love to work with clients all over the world to develop
                  unique,{" "}
                  <span className="underline fw-bold"> innovative </span> and{" "}
                  <span className="underline fw-bold">modern websites</span>{" "}
                  using the following methods:
                </p>
                <div
                  data-sal-delay="600"
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  className="bg-light shadow-lg border border-light rounded p-2 pt-3 mb-4"
                >
                  <h4 className="mb-2">
                    <span className="bg-secondary text-white px-2 py-1 rounded">
                      DESIGN SERVICE
                    </span>
                  </h4>
                  <p className="text-secondary pb-0 mb-1 txt-wrap">
                    qpepe digital design agency creates the professional,
                    mobile-friendly, sustainable website design, that converts
                    visitors into customers and increases ranking in Google and
                    major search engines.
                  </p>
                </div>
                <div
                  data-sal-delay="800"
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  className="bg-light shadow-lg border border-light rounded p-2 pt-3 mb-4"
                >
                  <h4 className="mb-2">
                    <span className="bg-secondary text-white px-2 py-1 rounded">
                      SEO SERVICES
                    </span>
                  </h4>
                  <p className="text-secondary pb-0 mb-1 txt-wrap">
                    Your business site has to be a good source of leads and
                    revenue for you. QPEPE’s professional SEO services connect
                    your audience with your business online. We create the
                    proper SEO marketing strategy that will significantly
                    increase the visibility and authority of your business.
                  </p>
                </div>
                <div
                  data-sal-delay="1000"
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  className="bg-light shadow-lg border border-light rounded p-2 pt-3 mb-4"
                >
                  <h4 className="mb-1">
                    <span className="bg-secondary text-white px-2 py-1 rounded">
                      Business Packages
                    </span>
                  </h4>
                  <p className="text-secondary pb-0 mb-1 txt-wrap">
                    Website development package is the special offer for a
                    business. It means the low cost beautiful responsive
                    tailor-made websites at fixed prices. All web development
                    packages include responsive web design, WordPress
                    development, a set of pages, basic SEO and other features
                    which provided for by this package.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* What we / what we offer */}
          <WhatWeDo whatWeOfferData={whatWeOfferData} />
        </div>
      </div>

      {/* Clients */}
      <div className="container pb-5 pt-4">
        <div className="row justify-content-around text-center m-auto">
          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo1.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo3.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo2.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo4.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo5.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              className="m-auto"
            />
          </div>
        </div>
      </div>

      {/* User Feedback */}
      <div className="bg-white py-5">
        <div className="container py-4">
          <div className="row justify-content-around">
            <p className="text-center mb-0">
              <span className="underline fs-1"> Satisfied clients </span>
            </p>
            <Testimonial data={testimonialData} />
          </div>
        </div>

        {/* Call of Action */}
        <ContactCard />
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query testimonialQuery {
    testimonial: allDataJson(
      filter: {
        testimonial: { elemMatch: { category: { in: "testimonial" } } }
      }
    ) {
      edges {
        node {
          id
          testimonial {
            name
            role
            company
            content
            image {
              src {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
    what_we_offer: allDataJson(
      filter: {
        whatweoffer: { elemMatch: { category: { in: "what_we_offer" } } }
      }
    ) {
      edges {
        node {
          id
          whatweoffer {
            content
            fontAwesomeIndex
            title
          }
        }
      }
    }
  }
`
