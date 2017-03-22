## React-Bootstrap-Modal-Provider

Work in progress

React-Bootstrap-Modal-Provider is a Component that renders React-Bootstrap
modals more performantly with less markup.

### API

##### `ModalProvider`
`ModalProvider` is a component that renders a Modal for you alongside its
children. `ModalProvider` will take care of maintaining the state of its modal.

`ModalProvider` can receive the following props:

Prop | Type | Default | Description
:---|:---|:---|:---
`componentClass` | `String` or `Component` | `'div'` | The root container of ModalProvider
`modalProps` | `Object` | `{}` | Props to be provided to the `<Modal>`

##### `withModalProvider`

`withModalProvider` is a Higher Order Component that decorates the component that you
provide it with a `modalProvider` prop.

The `modalProvider` prop provided by `withModalProvider` has the following shape:

Provided Prop | Type | Description
:---|:---|:---
`showModal(options: Object)` | `Function` | A function that will render a modal with the options you provide it.
`hideModal()` | `Function` | A function that will hide the modal of the current `<ModalProvider>` scope. When called within a nested `<ModalProvider>`, it will close the nested modal only.

`showModal` can take the following options:

Option | Type | Description
:---|:---|:---
`body` (required) | `String` or `ReactElement` | The content rendered inside `<Modal.Body>`.
`closeButton` | `Boolean` | Displays a closeButton on `<Modal.Header>` when set to true.
`footer` | `String` or `ReactElement` | The content rendered inside `<Modal.Footer>`. No `<Modal.Footer>` is rendered when this is `null.
`modalProps` | `Object` | Props that are passed to `<Modal>`.
`title` | `String` or `ReactElement` | The content rendered inside `<Modal.Title>`. No `<Modal.Title>` is rendered when this is `null`

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


### TODO:
- [x] Create ModalProvider component
- [x] Create withModalProvider HOC
- [x] Setup build script with webpack
- [x] Setup eslint
- [x] Add examples
- [ ] Add tests
- [ ] Write README.md
