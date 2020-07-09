import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {
  modalProviderShape,
  withModalProvider,
} from 'react-bootstrap-modal-provider';

function ChildModalBody({ modalProvider }) {
  return (
    <div>
      <Button
        onClick={() =>
          modalProvider.showModal({
            title: 'The is the second modal',
            body: 'Hello!',
          })
        }
      >
        Click Me
      </Button>
    </div>
  );
}

ChildModalBody.propTypes = { modalProvider: modalProviderShape.isRequired };

const ChildModalBodyWithModalProvider = withModalProvider(ChildModalBody);

const childModal = ({ hideModal }) => ({
  title: 'This child modal will open up a secondary modal',
  body: <ChildModalBodyWithModalProvider />,
  footer: <Button onClick={hideModal}>Close modal</Button>,
  closeButton: true,
});
export default childModal;
