import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

const Testimonials = ({ data }) => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      {data.map(testimonial => (
        <div key={testimonial.name}>
          <GatsbyImage
            image={testimonial.image.src.childrenImageSharp[0].gatsbyImageData}
          />
          <div className="myCarousel">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.role}</h4>
            <p>{testimonial.content}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Testimonials
