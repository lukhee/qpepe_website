import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGem,
  faChartLine,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"

const fontIcon = [faGem, faChartLine, faProjectDiagram]

const WhatWeDo = ({ whatWeOfferData }) => {
  return (
    <div className="mt-5 container">
      <p className="mt-4 text-center">
        <span
          className="underline fs-1"
          data-sal-delay="100"
          data-sal="zoom-in"
          data-sal-easing="ease"
        >
          What we offer
        </span>
      </p>
      <div className="row justify-content-between justify-content-between">
        {whatWeOfferData.map(data => (
          <div
            className="mb-2 col-12 col-md-4 mb-4"
            key={data.fontAwesomeIndex}
            data-sal-delay="300"
            data-sal="slide-left"
            data-sal-easing="ease"
          >
            <div className="row p-3 rounded m-1 h-100 shadow">
              <div className="col-md-2 col-12 mb-1 text-center">
                <FontAwesomeIcon
                  size="2x"
                  icon={fontIcon[data.fontAwesomeIndex]}
                  className="text-secondary"
                />
              </div>
              <div className="col-md-10 col-12 text-center">
                <h3 className="mb-3 text-md-start  text-dark">{data.title}</h3>
                <p className="mb-1 text-md-start">
                  <span className="bg-secondary text-white px-1 me-1 fw-bold">
                    {data.content.split("~")[0]}
                  </span>
                  <span className="text-secondary">
                    {data.content.split("~")[1]}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo
