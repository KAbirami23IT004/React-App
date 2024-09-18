import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <Container className="d-flex justify-content-around my-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>This is an example of a card component with an image.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>This is another card example.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>You can add as many cards as you want.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardComponent;