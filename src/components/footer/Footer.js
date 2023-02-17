import Stripes from '../stripes/Stripes';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.scss';

function Footer ({ showCurrentPage }) {

  return (
    <footer className='footer'>
      <Container>
        <Row className="footer__row footer__row--first justify-content-center align-items-end">
          <Col xs={12} sm="3" md={3} lg={2} xl={2} className='footer__col'>
            <a 
              href="#home" 
              className="footer__link"
              onClick={(e) => showCurrentPage(e)} >
              <img 
                data-page="home"
                src="/images/icons/dark-logo.svg" 
                alt="logo" 
                className="footer__logo" />
            </a>
          </Col>
          <Col xs={12} sm="2" md={2} lg={2} xl={1} className='footer__col'>
            <a 
              data-page="our-coffee"
              href="#our-coffee" 
              className="footer__link" 
              onClick={(e) => showCurrentPage(e)} >Our coffee</a>
          </Col>
          <Col xs={12} sm="3" md={3} lg={2} xl={2} className='footer__col'>
            <a 
              data-page="your-pleasure"
              href="#your-pleasure" 
              className="footer__link"
              onClick={(e) => showCurrentPage(e)} >For your pleasure</a>
          </Col>
        </Row>
        <Row className="footer__row footer__row--second justify-content-md-center">
          <Col xs>
            <Stripes
              lightness="dark"
              blockClassPrefix="footer" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;