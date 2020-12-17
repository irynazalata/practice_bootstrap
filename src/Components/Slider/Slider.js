import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';

const Slider = () => {
  return (
    <Carousel
      style={{
        display: 'block',
        width: '800px',
        height: '400px',
        margin: '0 auto 50px',
      }}
    >
      <Carousel.Item
        style={{
          marginBottom: '50px',
        }}
      >
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          marginBottom: '50px',
        }}
      >
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          marginBottom: '50px',
        }}
      >
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          marginBottom: '50px',
        }}
      >
        <img className="d-block w-100" src={image4} alt="Fourth slide" />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
