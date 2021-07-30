import React, { useState, useEffect } from "react"
import { Toast } from "react-bootstrap"

const ToastSample = ({ toastValue }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(toastValue)
  }, [toastValue])

  return (
    <Toast
      className="bg-white text-success position-absolute top-0 end-0 text-center fw-bold border shadow-md"
      onClose={() => setShow(false)}
      show={show}
      delay={9000}
      autohide
    >
      <Toast.Body>Thank you!</Toast.Body>
    </Toast>
  )
}

export default ToastSample
