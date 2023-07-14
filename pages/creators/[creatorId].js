import React from 'react';

// import node module libraries
import {
  Button,
  Card,
  Container,
  Image,
} from 'react-bootstrap';
import { Trash2 } from 'react-feather';

const CreatorDetails = () => {
  const [showAddCreator, setShowAddCreator] = React.useState(false);

  return (
    <Container fluid className="p-6">
      <Card className="h-100 p-6">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <div>
              <Image
                src="/images/avatar/avatar-4.jpg"
                alt=""
                className="avatar-xxl avatar rounded-circle"
              />
            </div>
            <div className="ms-3 lh-1">
              <h3 className="mb-2">Robert Fox</h3>
              <h4 className="mb-2">Robert@Fox</h4>
              <p className="mb-0">Robert.Fox@example.com</p>
            </div>
          </div>
          <div>
            <Trash2 size={24} />
            <Button variant="primary" className="ms-4">
              LOG IN
            </Button>
          </div>
        </div>
        <h4 className="my-6">Assigned to</h4>
        <div className="d-flex align-items-center">
          <div>
            <Image
              src="/images/avatar/avatar-4.jpg"
              alt=""
              className="avatar-xl avatar rounded-circle"
            />
          </div>
          <div className="ms-3 lh-1">
            <h4 className="mb-2">Robert Fox</h4>
            <p className="mb-2">Robert@Fox</p>
            <span className="mb-0">Robert.Fox@example.com</span>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default CreatorDetails;
