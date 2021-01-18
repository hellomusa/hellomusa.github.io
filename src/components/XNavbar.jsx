import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

import "./XNavbar.css";

const XNavbar = () => {
  const offset = -50;
  return (
    <Navbar
      className="my-navbar"
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="light"
      >
        <div className="container">
          <Navbar.Brand>
            <Link
              className="lead"
              activeClass="my-active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <a href="#home" className="navbar-title">
                musa
              </a>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="lead"
                activeClass="my-active"
                to="about"
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
              >
                <Nav.Link className="lead navbar-option" eventKey={1}>
                  about
                </Nav.Link>
              </Link>

              <Link
                className="lead"
                activeClass="my-active"
                to="experience"
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
              >
                <Nav.Link className="lead navbar-option" eventKey={2}>
                  experience
                </Nav.Link>
              </Link>

              <Link
                className="lead"
                activeClass="my-active"
                to="projects"
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
              >
                <Nav.Link className="lead navbar-option" eventKey={3}>
                  projects
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}

export default XNavbar;