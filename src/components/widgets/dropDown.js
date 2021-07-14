import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGem,
  faChartLine,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"

const DropDown = () => {
  return (
    <div className="mt-5">
      <p className="mt-4 text-center">
        <span className="underline fs-3"> What we offer </span>
      </p>
      <div className="row justify-content-between justify-content-between">
        {[faChartLine, faGem, faProjectDiagram].map(data => (
          <div className="mb-2 col-12 col-md-4 mb-5" key={data}>
            <div className="row">
              <div className="col-md-2 col-12 mb-1 text-center">
                <FontAwesomeIcon size="2x" icon={data} className="text-dark" />
              </div>
              <div className="col-md-10 col-12 text-center">
                <h3 className="mb-3 text-md-start">
                  Development
                </h3>
                <p className="mb-1 text-md-start">
                  <span className="text-warning"> Manage </span> your daily
                  administrative tasks conveniently from one place.
                  Reservations, invoices, guest communication, housekeeping and
                  reporting.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown
