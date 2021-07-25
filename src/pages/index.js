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
                  Grab <span className="underline">Your Visitors</span>{" "}
                  Attention
                </h1>
                <div
                  data-sal-delay="900"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
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
            Trusting a company and investing your hard-earned money is a quite
            challenging and an overwhelming process. In order to guide you in
            the process and make a better decision, we have explained each and
            every steps right from How MacAppStudio is created to our process.
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
                <h3 className="lh-base">
                  We love to work with clients all over the world to develop
                  unique, <span className="underline"> innovative </span> and{" "}
                  <span className="underline"> modern websites.</span>
                </h3>
                <div
                  data-sal-delay="600"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  <h4 className="mb-1">
                    <span className="bg-secondary text-white px-2 py-1">
                      Everything at one place
                    </span>
                  </h4>
                  <p className="text-secondary">
                    The foundation of MacAppStudio is the friendship between
                    George and Suresh. MacAppStudio is founded based on trust
                    and that is the core of our company culture till today. Our
                    intention is to create end to end applications which are
                    simple to use and which would transform lives of millions.
                  </p>
                </div>
                <div
                  data-sal-delay="800"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  <h4 className="mb-1">
                    <span className="bg-secondary text-white px-2 py-1">
                      You are never alone
                    </span>
                  </h4>
                  <p className="text-secondary">
                    Our devoted customer support team with great problem solving
                    skills is always ready to assist you.
                  </p>
                </div>
                <div
                  data-sal-delay="1000"
                  data-sal="fade"
                  data-sal-easing="ease"
                >
                  <h4 className="mb-1">
                    <span className="bg-secondary text-white px-2 py-1">
                      On-the-go solutions
                    </span>
                  </h4>
                  <p className="text-secondary">
                    Keep up with back-office tasks within a few clicks. It’s not
                    a problem if you are on your way somewhere! SabeeApp hotel
                    management software runs in the cloud and you can reach it
                    from anywhere and from any device.
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
