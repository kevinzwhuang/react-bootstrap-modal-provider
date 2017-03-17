import React from 'react';

const modalExplanation = `//anotherBasicModal.jsx

const anotherBasicModal = {
  title: 'Congrats! You opened another modal.',
  body: 'This time we defined the modal using a plain object instead of a function. Check it out in the footer!',
  footer: <Foo>, // This element you're reading right now!
  closeButton: true,
}
export default anotherBasicModal;
`;

const buttonExplanation = `//BasicExample.jsx
import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
...
import anotherBasicModal from './anotherBasicModal';

class BasicExample extends React.Component {
  render() {
    return (
      ...
      <Button onClick={() => this.props.modalProvider.showModal(anotherBasicModal)}>
        Click here for a modal with its contents generated at runtime by random numbers
      </Button>
      ...
    )
  }
}

BasicExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExample);
`;

const anotherBasicModal = {
  title: 'Congrats! You opened another modal.',
  body: 'This time we defined the modal using a plain object instead of a function. Check it out in the footer!',
  footer: <div className="text-left">
    <p>Instead of a function like the previous modal, we define the layout of this modal with an object named <code>anotherBasicModal</code> like so:.</p>
    <pre>{ modalExplanation }</pre>
    <p>We then import <code>anotherBasicModal</code> and pass it into <code>this.props.modalProvider.showModal</code> in the <code>onClick</code> function of the button you just clicked.</p>
    <pre>{ buttonExplanation }</pre>
  </div>,
  closeButton: true,
};
export default anotherBasicModal;
