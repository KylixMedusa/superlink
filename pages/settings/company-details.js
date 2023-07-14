import React from 'react';

// import node module libraries
import {
  Button,
  Container,
  Form,
} from 'react-bootstrap';

import SettingsLayout from './layout';

const CompanyDetails = () => {
  return (
    <Container fluid className="p-3 py-8">
      <h2 className="fw-bold ls-sm mb-8">Company Details</h2>
      <Form>
        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>Street</Form.Label>
            <Form.Control required type="text" placeholder="Enter street" />
          </Form.Group>
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="Enter city" />
          </Form.Group>
        </div>
        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>ZIP/Postal Code</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter zip/postal code"
            />
          </Form.Group>
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" placeholder="Enter state" />
          </Form.Group>
        </div>
        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>Landmark</Form.Label>
            <Form.Control type="number" placeholder="Enter landmark" />
          </Form.Group>
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>Country</Form.Label>
            <Form.Control required type="text" placeholder="Enter country" />
          </Form.Group>
        </div>
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

CompanyDetails.Layout = SettingsLayout;

export default CompanyDetails;
