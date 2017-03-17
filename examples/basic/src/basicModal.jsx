import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const basicModalCode = `//basicModal.jsx

const basicModal = ({ hideModal }) => ({
  title: 'Congrats! You opened the modal.',
  body: <BasicModalBody />,
  footer: <Button onClick={hideModal}>Hide Modal</Button>,
  closeButton: true,
});
`;
const buttonCode = `//BasicExample.jsx
import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
...
import basicModal from './basicModal';

class BasicExample extends React.Component {
  render() {
    return (
      ...
      <Button onClick={() => this.props.modalProvider.showModal(basicModal)}>
        Click me for a modal predefined by an imported object
      </Button>
      ...
    )
  }
}

BasicExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExample);
`;

class BasicModalBody extends React.Component {
  render() {
    return (
      <div>
        <p>
          This is the basic example modal! We passed a function called <code>basicModal</code> to
          <code>this.props.modalProvider.showModal</code>.
        </p>
        <p>
          Note: <code>basicModal</code> could have also been a simple object instead of a function -
          we define it as a function in this case to have access to <code>hideModal</code>.
        </p>
        <p>
          Here is how <code>basicModal</code> was defined:
        </p>
        <pre>{ basicModalCode }</pre>
        <p>
          We then used it in the <code>onClick</code> function passed into the
          button that you just clicked like so:
        </p>
        <pre>{ buttonCode }</pre>
      </div>
    );
  }
}

const basicModal = ({ hideModal }) => ({
  title: 'Congrats! You opened the modal.',
  body: <BasicModalBody />,
  footer: <Button onClick={hideModal}>Hide Modal</Button>,
  closeButton: true,
});

export default basicModal;
