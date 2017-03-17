import React from 'react';
import modalProviderShape from './modalProviderShape';

const withModalProvider = (Component) => {
  const ComponentWithModalProvider = (props, context) =>
    <Component {...props} modalProvider={context.modalProvider} />;
  ComponentWithModalProvider.contextTypes = {
    modalProvider: modalProviderShape.isRequired,
  };
  return ComponentWithModalProvider;
};

export default withModalProvider;
