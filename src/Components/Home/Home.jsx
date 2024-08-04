import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Figure from 'react-bootstrap/Figure';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>

     

      <h2>Products Types</h2>
      {/* Grid Image */}

      <div className="row-items">
        <Container >
          <Row >
            <Col xs={6} md={4} className='res_mob_product'>
              <h4>Seeds</h4>
              <Image src="https://www.agroinfomart.com/images/category/seeds.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4} className='res_mob_product'>
              <h4>Pesticides</h4>
              <Image src="https://www.agroinfomart.com/images/category/pesticide.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4} className='res_mob_product'>
              <h4>Fertilisers</h4>
              <Image src="https://www.agroinfomart.com/images/category/fertilizer.jpg" roundedCircle />
            </Col>

          </Row>
        </Container>
      </div>
      {/* Coursel */}



      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-main'>
      <Carousel.Item>
        <img height={400}
          className="d-block w-100 custom-height"
          src="\assets\images\ag3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>Nurting the seeds of Success.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height={400}
          className="d-block w-100 custom-height"
          src="\assets\images\ag7.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>Trust is Us.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height={400}
          className="d-block w-100 custom-height"
          src="\assets\images\ag5.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>We grow Happiness.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height={400}
          className="d-block w-100 custom-height"
          src="\assets\images\ag2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p className='carousel-text'>From farm to fork.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
      <h2>Popular Products</h2>
      {/* Grid Image */}
      <Container >
        <Row>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://www.farmersstop.com/cdn/shop/products/WhatsApp_Image_2021-10-18_at_2.36.31_PM-removebg-preview-removebg-preview_438x530.png?v=1710229386" roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://images.meesho.com/images/products/297524439/vsos6_512.webp " roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://5.imimg.com/data5/ANDROID/Default/2023/2/LN/KV/ND/70087425/product-jpeg-500x500.jpg" roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://4.imimg.com/data4/FX/GN/ANDROID-32236375/product.jpeg" roundedCircle height={150} width={150} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image className='res_mob_product_img' src="https://tiimg.tistatic.com/fp/5/008/139/high-yield-variety-special-wheat-seeds-hd-2967-40-kg-bag-packing-441.jpg" roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://5.imimg.com/data5/SELLER/Default/2022/8/VD/XW/AS/57404107/sumo-plus-hybrid-maize-seeds-500x500.jpg " roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://5.imimg.com/data5/ANDROID/Default/2023/11/360471649/MT/LB/KZ/33315848/product-jpeg-500x500.jpeg" roundedCircle height={150} width={150} />
          </Col>
          <Col xs={6} md={3} className='res_mob_product'>
            <Image src="https://5.imimg.com/data5/ANDROID/Default/2022/4/IX/BK/CS/24448088/product-jpeg.jpg  " roundedCircle height={150} width={150} />
          </Col>

        </Row>


      </Container>

      {/* Figure-customer */}
      <h2>Ratings & Rankings</h2>
      <Container className='Cont_rating_rank'>
        <Figure className='m-4 px-5'>
          <Figure.Image
            width={100}
            height={120}
            alt="171x180"
            src="/assets/images/deal.png"
          />
          <Figure.Caption className='figure_caption'>
          ★★★★★<br/> Rating <br/>
          Costomer's Satifaction and Trust.
          </Figure.Caption>
        </Figure>
        <Figure className='m-2 px-5'>
          <Figure.Image
            width={80}
            height={80}
            alt="171x180"
            src="/assets/images/pngwing.com.png"
          />
          <Figure.Caption className='figure_caption'>
          ★★★★★<br/> Rating <br/>
          Complete Protection of Costmer's Crop.
          </Figure.Caption>
        </Figure> <Figure className='m-4 px-5'>
          <Figure.Image
            width={100}
            height={120}
            alt="171x180"
            src="/assets/images/best-product.png"
          />
          <Figure.Caption className='figure_caption'>
          ★★★★★<br/> Rating <br/>
         Government Authorized Dealer.
          </Figure.Caption>
        </Figure>
      </Container>


      {/* Footer */}
     
    </>
  )
}

export default Home
