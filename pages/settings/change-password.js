import React from 'react';

// import node module libraries
import {
  Button,
  Container,
  Form,
} from 'react-bootstrap';

import SettingsLayout from './layout';

const ChangePassword = () => {
  return (
    <Container fluid className="p-3 py-8">
      <h2 className="fw-bold ls-sm mb-8">Change Password</h2>
      <Form>
        <Form.Group className="mb-3 flex-grow-1">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Enter current password" />
        </Form.Group>
        <Form.Group className="mb-3 flex-grow-1">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter new password" />
        </Form.Group>
        <Form.Group className="mb-3 flex-grow-1">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm new password" />
        </Form.Group>
        <footer className="d-flex justify-content-end mt-12">
          <Button variant="link" style={{ marginRight: "12px" }}>
            CANCEL
          </Button>
          <Button type="submit" variant="primary">
            SAVE
          </Button>
        </footer>
      </Form>
    </Container>
  );
};

ChangePassword.Layout = SettingsLayout;

export default ChangePassword;
