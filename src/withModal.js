import React from 'react';

const withModal = Component => {
  const ComponentWithModal = class extends React.Component {
    render() {return <Component {...this.props} />}
  }
  ComponentWithModal.contextTypes = {
    modalProvider: React.PropTypes.object.isRequired
  };
  return ComponentWithModal;
}

export default withModal;
