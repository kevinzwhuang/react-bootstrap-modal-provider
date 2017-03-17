## React-Bootstrap-Modal-Provider

Work in progress

React-Bootstrap-Modal-Provider is a Component that renders React-Bootstrap
modals more performantly with less markup.

### API

`ModalProvider` is a component that renders a Modal for you alongside its
children. `ModalProvider` will take care of maintaining the state of its modal

- all you need to do is set this up and use `withModal` to start creating
  modals on the fly. Props:

- `componentClass` (default: 'div'): The component rendered as the root element
of `ModalProvider`

`withModal` is a Higher Order Component that decorates the component that you
provide it with a `modalProvider` prop. In the component that you pass
`withModal`, you can call `showModal` from the `modalProvider` prop to display
a new modal like so:

```es6
this.props.modalProvider.showModal({
  title: 'This is a title',
  body: 'This is a body'
});
```

You can also call `hideModal` to remove the modal that was just displayed.


### TODO:
- [x] Create ModalProvider component
- [x] Create withModal HOC
- [x] Setup build script with webpack
- [x] Setup eslint
- [x] Add examples
- [ ] Add tests
- [ ] Write README.md
