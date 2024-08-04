import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './AboutUs.css'

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutUS() {


  return (
    <>

      
      <div className='Aboutus-body'>
        <h2 className='h2-About'>Kaka Krishi Seva Kendra </h2>
        <section class="about-us-sec">
          <h2>About Us</h2>
          <p>Kaka Krishi Seva Kendra was founded in 1990 by the visionary Gopal Ji Bhimawad and co-founder Promod Ji Bhimawad. Our company has been a trusted name in the agro-industry for over three decades.</p>
          <p>Specializing in fertilizers, pesticides, fungicides, and a range of agro products, we are also deeply committed to bio-farming solutions. Our mission is to provide sustainable and high-quality products at prices lower than the market average, ensuring that farmers have access to the best resources for their crops.</p>
          <p>At Kaka Krishi Seva Kendra, we believe in supporting agriculture through innovation and dedication, aiming to enhance farming practices and productivity across the region.</p>
        </section>

        <div className='founder-data'>
          <Container className='container-owner-data'>
            <Row>

              <Col xs={6} md={4}>
                <Image src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} width={200} roundedCircle />
              </Col>
              <Col xs={11} md={4} className='Owner-data'>
                <div className='owner-data-p'>
                  <p>Kaka Krishi Seva Kendra was founded in 1990 by the visionary Gopal Ji Bhimawad and co-founder Promod Ji Bhimawad. Our company has been a trusted name in the agro-industry for over three decades.</p>
                  <p>Specializing in fertilizers, pesticides, fungicides, and a range of agro products, we are also deeply committed to bio-farming solutions. Our mission is to provide sustainable and high-quality products at prices lower than the market average, ensuring that farmers have access to the best resources for their crops.</p>

                </div> </Col>

            </Row>
          </Container>
          <div>
            <img className='line-png' src="src\assets\images\10578804.png" alt="" />
          </div>
          <Container className='container-owner-data'>
            <Row>

              <Col xs={6} md={4}>
                <Image src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={200} width={200} roundedCircle />
              </Col>
              <Col xs={11} md={4} className='Owner-data'>
                <div className='owner-data-p'>
                  <p>Kaka Krishi Seva Kendra was founded in 1990 by the visionary Gopal Ji Bhimawad and co-founder Promod Ji Bhimawad. Our company has been a trusted name in the agro-industry for over three decades.</p>
                  <p>Specializing in fertilizers, pesticides, fungicides, and a range of agro products, we are also deeply committed to bio-farming solutions. Our mission is to provide sustainable and high-quality products at prices lower than the market average, ensuring that farmers have access to the best resources for their crops.</p>

                </div>
              </Col>

            </Row>
          </Container>



        </div>

      </div>
     
    </>
  )
}

export default AboutUS
