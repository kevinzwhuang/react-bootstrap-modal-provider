## React-Bootstrap-Modal-Provider

Work in progress

React-Bootstrap-Modal-Provider is a Component that renders React-Bootstrap
modals more performantly with less markup.

### API

`ModalProvider` is a component that renders a Modal for you alongside its
children. `ModalProvider` will take care of maintaining the state of its modal

- all you need to do is set this up and use `withModalProvider` to start creating
  modals on the fly. Props:

- `componentClass` (default: 'div'): The component rendered as the root element
of `ModalProvider`

`withModalProvider` is a Higher Order Component that decorates the component that you
provide it with a `modalProvider` prop.

In the component that you pass `withModalProvider`, you can pass an object with
your desired modal configuration to `modalProvider.showModal`:

```es6
this.props.modalProvider.showModal({
  title: 'This is a title',
  body: 'This is a body'
});
```

You can also pass a function to `showModal` to have access to modalProvider functions,
like so:

```es6
this.props.modalProvider.showModal((modalProvider) => {
  return {
    title: 'This is a title',
    body: 'This is a body',
    footer: <button onClick={ modalProvider.hideModal }>This button closes the modal</button>
  }
});
```

Recycling code for common modals is as simple as defining an export of a function or object to be passed to `this.props.modalProvider.showModal`:

```es6
//basicModal.js
...
const basicModal = ({ hideModal }) => ({
  title: 'Congrats! You opened the modal.',
  body: <BasicModalBody />,
  footer: <Button onClick={hideModal}>Hide Modal</Button>,
  closeButton: true,
});
export default basicModal;
```

```es6
//BasicExamplePage.jsx
import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
import basicModal from './basicModal';

class BasicExamplePage extends React.Component {
  render() {
    return (
      ...
        <Button onClick={() => this.props.modalProvider.showModal(basicModal)}>
          Click me for a modal predefined by an imported function
        </Button>
      ...
    )
  }
}
BasicExamplePage.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExamplePage);
...
```

You can also call `hideModal` to remove the modal that was just displayed.


### TODO:
- [x] Create ModalProvider component
- [x] Create withModalProvider HOC
- [x] Setup build script with webpack
- [x] Setup eslint
- [x] Add examples
- [ ] Add tests
- [ ] Write README.md
