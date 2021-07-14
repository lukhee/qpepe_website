import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Nav, Container, Navbar } from "react-bootstrap"

import { navData } from "../utitlity/data"
import * as style from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" collapseOnSelect expand="sm" className="bg-light">
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
        <Nav className="ps-1 mt-2">
          {navData.map(nav => (
            <h5
              key={nav.title}
              className={
                nav.title === "Contact-Us" ? style.contact : style.navLink
              }
            >
              <Link
                to={nav.linkTo}
                activeClassName={
                  nav.title !== "Contact-Us" ? style.underline : ""
                }
              >
                {nav.title}
              </Link>
            </h5>
          ))}
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
