import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Container, Navbar } from "react-bootstrap"

import { navData } from "../utitlity/data"
import * as style from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" collapseOnSelect expand="md" className="bg-secondary">
    <Container className={style.header}>
      <Navbar.Brand
        className="justify-content-between"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}
      >
        <Link to="/">
          qp<span className="bg-warning">epe </span>
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
            <Link to="/" activeClassName={style.underline}>
              Who we are ?
            </Link>
          </span>
        </Nav>
        <Nav className="ps-1 m-2 inline-block">
          <span className="fw-bold">
            <Link to="/projects" activeClassName={style.underline}>
              Our Projects
            </Link>
          </span>
        </Nav>
        <Nav className="ps-1 m-2 inline-block">
          <span className="fw-bold">
            <Link
              to="/contact-us"
              activeClassName={style.underline}
              className="btn btn-warning btn-sm fw-bold"
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
