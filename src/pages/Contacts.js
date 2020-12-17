import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container>
      <h2>Contacts Page</h2>
      <Table striped border hover>
        <thead>
          <th>Your Phonebook</th>
          <th>NAME</th>
          <th>SURNAME</th>
          <th>NUMBER</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iryna</td>
            <td>Zalata</td>
            <td>0668185655</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mishenka</td>
            <td>Glodian</td>
            <td>0990001122</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Hanna</td>
            <td>Popova</td>
            <td>0662223355</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan="2">Petro Andrijchuk</td>
            <td>0446789809</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Contacts;
