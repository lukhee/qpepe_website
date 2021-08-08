import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Container, Navbar } from "react-bootstrap"
import * as style from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <Navbar
    sticky="top"
    collapseOnSelect
    expand="md"
    className="bg-light rounded"
  >
    <Container className={style.header}>
      <Navbar.Brand
        className="justify-content-between"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}
      >
        <Link to="/">
          <span>q</span>
          <span>p</span>
          <span className="bg-primary text-danger">e<span className="text-warning">pe</span> </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ padding: "3px 7px", fontSize: "1rem" }}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="ps-1 m-2 inline-block">
          <span className="fw-bold">
            <Link to="/" className={style.link}>
              Who we are ?
            </Link>
          </span>
        </Nav>
        <Nav className="ps-1 m-2 inline-block">
          <span className="fw-bold">
            <Link to="/projects" className={style.link}>
              Our Projects
            </Link>
          </span>
        </Nav>
        <Nav className="ps-1 m-2 inline-block">
          <span className="fw-bold">
            <Link
              to="/contact-us"
              // activeClassName={style.underline}
              className="btn btn-primary text-white btn-sm fw-bold"
            >
              Contacts Us
            </Link>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
