import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-bootstrap-modal-provider';
import NestedExample from './NestedExample';

const container = document.getElementById('container');

ReactDOM.render(
  <ModalProvider>
    <NestedExample />
  </ModalProvider>,
  container,
);
