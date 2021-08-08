import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShieldAlt,
  faHeadphones,
  faProjectDiagram,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"

const fontIcon = [faShieldAlt, faHeadphones, faChartLine]
const bgColor = ["bg-warning", "bg-primary", "bg-danger"]

const WhatWeDo = ({ whatWeOfferData }) => {
  return (
    <div className="mt-5 container">
      <h1 className="mt-4 text-center">
        <span
          data-sal-delay="100"
          data-sal="zoom-in"
          data-sal-easing="ease"
        >
          What we offer
        </span>
      </h1>
      <div className="row justify-content-between">
        {whatWeOfferData.map(data => (
          <div
            className="mb-2 col-12 col-lg-4 mb-4"
            key={data.fontAwesomeIndex}
            // data-sal-delay="300"
            // data-sal="slide-left"
            // data-sal-easing="ease"
          >
            <div className="row p-3 rounded m-1 h-100 border border-light shadow">
              <div className="col-lg-2 col-12 mb-1 text-center p-0">
                <div
                  className={`p-2 rounded ${bgColor[data.fontAwesomeIndex]}`}
                >
                  <FontAwesomeIcon
                    size="2x"
                    icon={fontIcon[data.fontAwesomeIndex]}
                    className="text-white"
                  />
                </div>
              </div>
              <div className="col-md-10 col-12 text-center">
                <h3 className="mb-3 text-md-start  text-dark">{data.title}</h3>
                <p className="mb-1 text-md-start">
                  <span className="border-warning border text-dark rounded px-1 me-1 fw-bold">
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
