import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <Container >
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="text-center mb-5">
          I'm a passionate full-stack developer with 3+ years of experience creating web applications that solve real-world problems. 
          I love working with modern technology and am always eager to learn new things.
        </p>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="text-center shadow-sm mb-3">
              <Card.Body>
                <h5>Clean Code</h5>
                <Card.Text>Writing maintainable, scalable code that follows best practices</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-3">
              <Card.Body>
                <h5>Responsive Design</h5>
                <Card.Text>Creating beautiful, mobile-first designs that work on all devices</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm mb-3">
              <Card.Body>
                <h5>Performance</h5>
                <Card.Text>Optimizing applications for speed and  best user experience</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;