import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.scss';

const Navigation = ({ showCurrentPage }) => {

  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand 
        href="#home"
        onClick={(e) => showCurrentPage(e)} >
        <img 
          data-page="home"
          className="header__logo" 
          src={process.env.PUBLIC_URL + "/images/icons/light-logo.svg"} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link 
            href="#our-coffee"
            data-page="our-coffee"
            onClick={(e) => showCurrentPage(e)} >Our coffee</Nav.Link>
          <Nav.Link 
            href="#your-pleasure"
            data-page="your-pleasure"
            onClick={(e) => showCurrentPage(e)} >For your pleasure</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;