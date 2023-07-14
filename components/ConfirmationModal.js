import React from 'react';

import {
  Button,
  Modal,
} from 'react-bootstrap';

const ConfirmationModal = ({
  title,
  children,
  footer,
  primaryButtonText,
  secondaryButtonText,
  onSubmit,
  onCancel,
  ...props
}) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="confirmation-modal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>
          {primaryButtonText.toUpperCase()}
        </Button>
        <Button variant="light" onClick={onCancel}>
          {secondaryButtonText.toUpperCase()}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
