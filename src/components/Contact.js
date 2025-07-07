
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Contact() {

    const defaultStyle = {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <section id="contact" className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center fw-bold mb-3">Get In Touch</h2>
        <p className="text-center mb-4">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>

        <Row className="text-center mb-4">
          <Col md={4} className="contact-box">
          <div
              style={defaultStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            <h6>Email</h6>
            <p>jyotikachourasia11@email.com</p>
            </div>
          </Col>
          <Col md={4} className="contact-box">
          <div
              style={defaultStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
            <h6>Phone</h6>
            <p>+91 9234128086</p>
            </div>
          </Col>
          <Col md={4} >
          <div
              style={defaultStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

            <h6>Location</h6>
            <p>Bhubaneswar , Odisha</p>
            </div>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="outline-light" className="me-2">LinkedIn</Button>
          <Button variant="outline-light" className="me-2">GitHub</Button>
          <Button variant="outline-light">Twitter</Button>
        </div>
      </Container>
        
      
    </section>
    
  );
}

export default Contact; 