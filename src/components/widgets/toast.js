import React, { useState, useEffect } from "react"
import { Toast } from "react-bootstrap"

const ToastSample = ({ toastValue }) => {
  const [show, setShow] = useState(null)
  useEffect(() => {
    setShow(toastValue)
  }, [toastValue])

  return (
    <Toast
      className="bg-success position-absolute top-0 end-0 text-white"
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Body>Your message sent successfully</Toast.Body>
    </Toast>
  )
}

export default ToastSample
