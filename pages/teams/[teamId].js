import React from 'react';

import ConfirmationModal from 'components/ConfirmationModal';
import TeamsData from 'data/teams/TeamsData';
// import node module libraries
import {
  Button,
  Card,
  Container,
  Form,
  Image,
  Table,
} from 'react-bootstrap';
import {
  Edit2,
  Eye,
  LogOut,
  Plus,
  Trash2,
} from 'react-feather';

const TeamDetails = () => {
  const [showAddCreator, setShowAddCreator] = React.useState(false);

  return (
    <>
      <Container fluid className="p-6">
        <Card className="h-100">
          <div className="d-flex align-items-start justify-content-between mb-4 p-6">
            <div className="d-flex align-items-center">
              <div>
                <Image
                  src="/images/avatar/avatar-4.jpg"
                  alt=""
                  className="avatar-xxl avatar rounded-circle"
                />
              </div>
              <div className="ms-3 lh-1">
                <h4 className="mb-2">Robert Fox</h4>
                <p className="mb-2">Robert@Fox</p>
                <p className="mb-0">Robert.Fox@example.com</p>
              </div>
            </div>
            <div>
              <Edit2 size={24} />
              <Trash2 size={24} className="ms-4" />
            </div>
          </div>
          <Card.Header className="bg-white py-4 d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Assigned Creators</h4>
            <Button onClick={() => setShowAddCreator(true)}>
              <Plus
                size={18}
                style={{
                  marginRight: "12px",
                }}
              />
              <span className="align-middle">ADD CREATOR</span>
            </Button>
          </Card.Header>
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>User ID</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {TeamsData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">{item.email}</td>
                    <td className="align-middle">
                      <LogOut
                        size={20}
                        style={{
                          marginRight: "18px",
                          cursor: "pointer",
                        }}
                      />
                      <Eye
                        size={20}
                        style={{
                          marginRight: "18px",
                          cursor: "pointer",
                        }}
                      />
                      <Trash2
                        size={20}
                        onClick={() => {
                          setShowDeleteConfirmation(true);
                        }}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Container>
      <ConfirmationModal
        show={showAddCreator}
        onHide={() => setShowAddCreator(false)}
        title="Assign Creator"
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        onSubmit={() => setShowAddCreator(false)}
        onCancel={() => setShowAddCreator(false)}
      >
        <Form>
          <Form.Group className="mt-2">
            <Form.Select>
              <option>Select creator</option>
              <option value="1">Creator 1</option>
              <option value="2">Creator 2</option>
              <option value="3">Creator 3</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </ConfirmationModal>
    </>
  );
};

export default TeamDetails;
