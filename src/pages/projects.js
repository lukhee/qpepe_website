import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ContactCard from "../components/widgets/contactCard"
import Seo from "../components/seo"

const ProjectsPage = ({ data }) => {
  const projects = data.allDataJson.nodes[0].projects
  return (
    <Layout>
      <Seo title="Page two" />
      <div>
        <div className="container-fluid py-5 text-center bg-light">
          <h1>
            <span> Projects </span>
          </h1>
        </div>
        <div className="bg-white text-center py-5">
          <div className="container">
            <h1> Our Sample Apps</h1>
            <div className="row">
              {projects.map(product => (
                <div key={product.id} className="col-sm-12 col-md-4">
                  <div className="m-2">
                    <div className="card rounded-0 border-0">
                      <div className="card-body text-start bg-light shadow-lg rounded">
                        <h3 className="card-title">{product.title}</h3>
                        <p className="card-text text-secondary">
                          {product.description}
                        </p>
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
          <ContactCard />
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
