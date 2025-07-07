import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack web app built with React, Node.js, MongoDB',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Task Management App',
    desc: 'Responsive mobile-first application with real-time updates',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    title: 'Data Visualization Dashboard',
    desc: 'Dashboard for analytics and reporting',
    tags: ['D3.js', 'Python', 'Flask', 'PostgreSQL']
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Featured Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100"style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';                        }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                     }}
                >
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <div className="mb-2">
                    {proj.tags.map((tag, i) => (
                      <Badge bg="secondary" className="me-1" key={i}>{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="outline-primary" className="me-2">Code</Button>
                  <Button variant="primary">Demo</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;