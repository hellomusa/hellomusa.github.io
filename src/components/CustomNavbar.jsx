import "./CustomNavbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  const offset = -50;
  return (
    <Navbar
      className="black-navbar"
      fixed="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <div className="container">
        <Navbar.Brand>
          <Link
            className="lead"
            activeClass="my-active"
            to="index"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a href="#index" className="navbar-title">
              home
            </a>
          </Link>
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}

export default CustomNavbar;