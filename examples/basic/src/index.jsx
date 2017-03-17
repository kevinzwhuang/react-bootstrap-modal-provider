import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from 'react-bootstrap-modal-provider';
import BasicExample from './BasicExample';

const container = document.getElementById('container');

ReactDOM.render(
  <ModalProvider>
    <BasicExample />
  </ModalProvider>,
  container,
);
