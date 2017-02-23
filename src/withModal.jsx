import React from 'react';

const withModal = (Component) => {
  const ComponentWithModal = props => <Component {...props} />;
  ComponentWithModal.contextTypes = {
    modalProvider: React.PropTypes.object.isRequired,
  };
  return ComponentWithModal;
};

export default withModal;
