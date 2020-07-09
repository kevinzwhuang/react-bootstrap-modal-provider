import React from 'react';

const ModalProviderContext = React.createContext({
  hideModal: () => {},
  showModal: () => {},
});

export default ModalProviderContext;
