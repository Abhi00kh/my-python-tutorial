import React from 'react';
import { Nav, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ topics }) => {
  return (
    <Col md={3} className="d-none d-md-block">
      <Nav className="flex-column" style={{ height: "100%" }}>
        {topics.map((topic) => (
          <Nav.Item key={topic.id}>
            <Link to={topic.path} className="nav-link">
              {topic.name}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default Sidebar;