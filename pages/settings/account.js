import React from 'react';

// import node module libraries
import {
  Button,
  Container,
  Form,
  Image,
} from 'react-bootstrap';
import { Plus } from 'react-feather';

import SettingsLayout from './layout';

const Profile = () => {
  return (
    <Container fluid className="p-3 py-8">
      <h2 className="fw-bold ls-sm mb-8">Owner Profile</h2>
      <Form>
        <div className="d-flex align-items-center mb-6">
          <div className="position-relative">
            <Image
              src="https://via.placeholder.com/150"
              alt=""
              className="avatar-xxl avatar rounded-circle"
            />
            <div className="position-absolute top-0 end-0">
              <button className="btn btn-icon btn-primary">
                <Plus size={18} />
              </button>
            </div>
          </div>
          <div className="ms-3 lh-1">
            <h4 className="mb-2">Upload Your Photo</h4>
            <p className="mb-0">Your photo should be in PNG format</p>
          </div>
        </div>
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
        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 flex-grow-1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
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

Profile.Layout = SettingsLayout;

export default Profile;
