import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        height: '80px',
        backgroundColor: '#212529',
        color: '#fff',
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '30px',
        }}
      >
        <p>&copy; Copyright Iryna Zalata 2020</p>
      </Container>
    </Container>
  );
};

export default Footer;
