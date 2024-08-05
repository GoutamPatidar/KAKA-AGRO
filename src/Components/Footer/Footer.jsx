
import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import './Footer.css'



function Footer() {
  return (
    <div className="abc">
      <Container className='bg-items'>
        <Row>
          <Col>
            <div className="final">
              <div className="first">
                <h6 className='footer_logo'  >
                  <NavLink to="/"  className='footer_logo'>
                    KAKA-AGRO
                  </NavLink>
                </h6>
              </div>
              <div className="second">
                <a href='https://www.facebook.com/'> <Image className='second_image' src="\assets\images\facebook.png" roundedCircle height={30} width={30} /></a>
                <a href=' https://x.com/'> <Image href='' className='second_image' src="\assets\images\1690643640twitter-x-icon-png.png" roundedCircle height={25} width={25} /></a>
                <a href='https://www.instagram.com/'> <Image href='' className='second_image' src="\assets\images\you-tube.png" roundedCircle height={30} width={30} /></a>
              </div>
              <div className='third'>
                <p className='mx-6' > Created by Love ❤️<br />Copyright @2023-2024. </p>
              </div>
            </div>
          </Col>
          <Col>

            <div>
              <Nav defaultActiveKey="/" className="flex-column  footer_right">
                <Nav.Link className='mx-5 ' >
                  <NavLink to="/" className={({ isActive }) => `${isActive ? 'active-link ' : 'inactive-link'} mx-5-custom-footer`}>
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link className='mx-5 ' >
                  <NavLink to="/AboutUS" className={({ isActive }) => `${isActive ? 'active-link ' : 'inactive-link'} mx-5-custom-footer`}>
                    AboutUs
                  </NavLink>
                </Nav.Link>
                <Nav.Link className='mx-5 '>
                  <NavLink to="/ContactUs" className={({ isActive }) => `${isActive ? 'active-link ' : 'inactive-link'} mx-5-custom-footer`}>
                    ContactUs
                  </NavLink>
                </Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                </Nav.Link>
              </Nav>
            </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Footer;