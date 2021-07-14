import * as React from "react"
import { navigate, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Testimonial from "../components/widgets/testimonial"
import DropDown from "../components/widgets/dropDown"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const testimonialData = data.allDataJson.edges[0].node.testimonial
  return (
    <Layout>
      <Seo title="Home" />
      <div className="container py-5">
        <div className="banner">
          <div className="col-12 col-md-6 my-auto col-xs-12 p-2 h-100">
            <div className="bg-white p-5 shadow-lg h-100">
              <h1 className="fs-1">
                Grab <span className="underline">Your Visitors</span> Attention
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button
                onClick={() => navigate("/contact-us")}
                className="btn btn-warning mb-3 rounded-0"
              >
                Get in Touch
              </button>
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
                    // layout="fixed"
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
          <p>
            <span className="underline fs-3"> Get to know us better </span>
          </p>
          <p className="col-md-8 col-12">
            Trusting a company and investing your hard-earned money is a quite
            challenging and an overwhelming process. In order to guide you in
            the process and make a better decision, we have explained each and
            every steps right from How MacAppStudio is created to our process.
          </p>
          <div className="row mb-3 justify-content-between">
            <div className="col-md-5">
              <div className="h-175 mb-3">
                <div className="p-5 bg-secondary">
                  <StaticImage
                    src="../images/banners/rubaitul-azad-QeXsrpjsVPM-unsplash.jpg"
                    alt="logo 2"
                    placeholder="blurred"
                    // layout="fixed"
                    width={360}
                    height={460}
                    className="m-auto w-100"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pb-3">
                <h3 className="lh-base">
                  We love to work with clients all over the world to develop
                  unique, <span className="underline"> innovative </span> and{" "}
                  <span className="underline"> modern websites.</span>
                </h3>
                <div>
                  <h4 className="mb-1">Everything at one place</h4>
                  <p className="fst-italic">
                    The foundation of MacAppStudio is the friendship between
                    George and Suresh. MacAppStudio is founded based on trust
                    and that is the core of our company culture till today. Our
                    intention is to create end to end applications which are
                    simple to use and which would transform lives of millions.
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">You are never alone</h4>
                  <p className="fst-italic">
                    Our devoted customer support team with great problem solving
                    skills is always ready to assist you.
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">On-the-go solutions</h4>
                  <p className="fst-italic">
                    Keep up with back-office tasks within a few clicks. It’s not
                    a problem if you are on your way somewhere! SabeeApp hotel
                    management software runs in the cloud and you can reach it
                    from anywhere and from any device.
                  </p>
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div>
                  {/* <p className="fst-italic">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
                </div>
              </div>
            </div>
          </div>
          <DropDown />
        </div>
      </div>

      {/* Clients */}
      <div className="container pb-5 pt-4">
        {/* <p>
        <span className="underline fs-3"> Our Clients </span>
      </p> */}
        <div className="row justify-content-around text-center m-auto">
          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo4.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              // height={30}
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo5.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              // height={40}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo4.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              // height={40}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo5.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              // height={40}
              className="m-auto"
            />
          </div>

          <div className="col col-lg-1 col-md-4 col-sm-3 col-xs-3 text-center m-auto">
            <StaticImage
              src="../images/logo/product_logo4.svg"
              alt="logo 2"
              placeholder="blurred"
              width={200}
              // height={40}
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
        <div className="text-center my-4 container">
          <div className="col col-md-10 m-auto bg-light py-5 shadow-sm border border-light">
            <h2> Let’s Transform your business for a change that matters </h2>
            <button
              onClick={() => navigate("/contact-us")}
              className="btn btn-warning mb-3 rounded-0 fw-bold"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query testimonialQuery {
    allDataJson(
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
  }
`
