import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

function About() {
  return (
    <div className="about-page">
      <Card className="shadow-sm mb-4">
        <Card.Header className="bg-primary text-white">
          <h4 className="mb-0">About User Management Dashboard</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={8}>
              <Card.Title className="mb-4">Project Overview</Card.Title>
              <Card.Text>
                This User Management Dashboard is a modern React-based web application that demonstrates CRUD operations
                using the JSONPlaceholder API. It provides a clean and intuitive interface for managing user data with
                comprehensive features and robust error handling.
              </Card.Text>

              <Card.Title className="mt-4 mb-3">Key Features</Card.Title>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item>
                  <i className="bi bi-people-fill me-2 text-primary"></i>
                  View and manage user records with pagination
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-person-plus-fill me-2 text-success"></i>
                  Add new users with form validation
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-pencil-square me-2 text-warning"></i>
                  Edit existing user information
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-trash-fill me-2 text-danger"></i>
                  Delete users from the system
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="bi bi-shield-check me-2 text-info"></i>
                  Comprehensive error handling and validation
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col lg={4}>
              <Card className="bg-light">
                <Card.Body>
                  <Card.Title className="mb-3">Technical Stack</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-light">
                      <i className="bi bi-react me-2 text-primary"></i>
                      React - Frontend Framework
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light">
                      <i className="bi bi-router me-2 text-success"></i>
                      React Router - Navigation
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light">
                      <i className="bi bi-bootstrap me-2 text-purple"></i>
                      React Bootstrap - UI Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light">
                      <i className="bi bi-arrow-repeat me-2 text-info"></i>
                      Axios - API Requests
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light">
                      <i className="bi bi-server me-2 text-warning"></i>
                      JSONPlaceholder - Mock API
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
