import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.scss";

const Navigation = () => {
  const clazzNames = ({ isActive }) =>
    isActive ? "nav-link nav-link--active" : "nav-link";
  return (
    <Navbar expand="lg" variant="dark">
      <Link to="/" className="navbar-brand">
        <img
          className="header__logo"
          src={process.env.PUBLIC_URL + "/images/icons/light-logo.svg"}
          alt="logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/our-coffee" className={clazzNames}>
            Our coffee
          </NavLink>
          <NavLink to="/your-pleasure" className={clazzNames}>
            For your pleasure
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
