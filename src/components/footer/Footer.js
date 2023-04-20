import {Link, NavLink} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Stripes from "../stripes/Stripes";
import "./Footer.scss";

function Footer() {
  const clazzNames = ({isActive}) => isActive ? 'footer__link footer__link--active' : 'footer__link';
  return (
    <footer className="footer">
      <Container>
        <Row className="footer__row footer__row--first justify-content-center align-items-end">
          <Col xs={12} sm="3" md={3} lg={2} xl={2} className="footer__col">
            <Link to="/" className="footer__link">
              <img
                src={process.env.PUBLIC_URL + "/images/icons/dark-logo.svg"}
                alt="logo"
                className="footer__logo"
              />
            </Link>
          </Col>
          <Col xs={12} sm="2" md={2} lg={2} xl={1} className="footer__col">
            <NavLink
              to="/our-coffee"
              className={clazzNames}
            >
              Our coffee
            </NavLink>
          </Col>
          <Col xs={12} sm="3" md={3} lg={2} xl={2} className="footer__col">
            <NavLink
              to="your-pleasure"
              className={clazzNames}
            >
              For your pleasure
            </NavLink>
          </Col>
        </Row>
        <Row className="footer__row footer__row--second justify-content-md-center">
          <Col xs>
            <Stripes lightness="dark" blockClassPrefix="footer" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
