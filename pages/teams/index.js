import React, { useState } from 'react';

// import node module libraries
import {
  Button,
  Container,
  Form,
  Offcanvas,
} from 'react-bootstrap';
// import sub components
import { TeamsTable } from 'sub-components';

const Teams = () => {
  const [showAddTeam, setShowAddTeam] = useState(false);

  const handleClose = () => setShowAddTeam(false);

  return (
    <Container fluid className="p-6">
      <TeamsTable onAddTeam={() => setShowAddTeam(true)} />
      <Offcanvas placement="end" show={showAddTeam}>
        <Offcanvas.Header>
          <Offcanvas.Title
            style={{
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Add Team Member
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div style={{ height: "100%" }}>
            <Form>
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 flex-grow-1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group className="mb-3 flex-grow-1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>User ID</Form.Label>
                <Form.Control type="text" placeholder="Enter user ID" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Creators</Form.Label>
                <Form.Select>
                  <option>Select creator</option>
                  <option value="1">Creator 1</option>
                  <option value="2">Creator 2</option>
                  <option value="3">Creator 3</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          <footer className="d-flex justify-content-end">
            <Button
              variant="link"
              style={{ marginRight: "18px" }}
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button variant="primary" onClick={handleClose}>
              SAVE
            </Button>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Teams;
