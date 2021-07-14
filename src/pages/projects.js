import React from "react"
import { navigate, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectsPage = ({ data }) => {
  const projects = data.allDataJson.nodes[0].projects
  return (
    <Layout>
      <Seo title="Page two" />
      <div>
        <div className="container py-3 text-center">
          <h1>
            <span className="underline"> Projects </span>
          </h1>
        </div>
        <div className="bg-white text-center py-5">
          <div className="container">
            <h1> Our Beautifully Crafted Apps</h1>
            <div className="row">
              {projects.map(product => (
                <div key={product.id} className="col-sm-12 col-md-4">
                  <div className="m-2">
                    <div className="card rounded-0 border-0">
                      <div className="card-body text-start bg-light shadow-sm">
                        <h3 className="card-title">{product.title}</h3>
                        <p className="card-text">{product.description}</p>
                        <GatsbyImage
                          image={
                            product.image.src.childrenImageSharp[0]
                              .gatsbyImageData
                          }
                          alt="logo 2"
                          placeholder="blurred"
                          width={500}
                          height={420}
                          className="my-auto rounded-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Call of Action */}
          <div className="text-center mt-4 container">
            <div className="col col-md-10 m-auto bg-light py-5 shadow-sm">
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
      </div>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query products {
    allDataJson {
      nodes {
        projects {
          description
          title
          id
          image {
            src {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 10)
              }
            }
          }
        }
      }
    }
  }
`
