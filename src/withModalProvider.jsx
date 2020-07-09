import React from 'react';
import ModalProviderContext from './ModalProviderContext';

const withModalProvider = Component => {
  const ComponentWithModalProvider = props => (
    <ModalProviderContext.Consumer>
      {modalProvider => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...props} modalProvider={modalProvider} />;
      }}
    </ModalProviderContext.Consumer>
  );
  return ComponentWithModalProvider;
};

export default withModalProvider;
