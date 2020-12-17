import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${image1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
  }
`;

const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome to our Christmas Mood</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
};
export default Jumbotron;
