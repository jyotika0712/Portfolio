import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function SkillBar({ skill, value }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between">
      <strong>{skill}</strong>
      <span>{value}%</span>
      </div>
      <ProgressBar now={value} style={{ height: '8px'}} />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Skills</h2>
        <Row>
          <Col md={6}>
            <SkillBar skill="JavaScript" value={90} />
            <SkillBar skill="Node.js" value={80} />
            <SkillBar skill="MongoDB" value={70} />
          </Col>
          <Col md={6}>
            <SkillBar skill="React" value={85} />
            <SkillBar skill="Python" value={75} />
            <SkillBar skill="AWS" value={65} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;