import React from 'react';

// import node module libraries
import { Container } from 'react-bootstrap';
import CreatorsTable from 'sub-components/creators/CreatorsTable';

const Creators = () => {
  return (
    <Container fluid className="p-6">
      <CreatorsTable />
    </Container>
  );
};

export default Creators;
