import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactUs= () => {
  return (
    <Container className="my-4">
      <h1 className="text-center">Contact Us</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;