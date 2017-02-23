import React from 'react';
const Modal = require('react-bootstrap/lib/Modal');

const modalProviderInitialState = {
  body: null,
  closeButton: null,
  footer: null,
  modalProps: {},
  title: null
};

class ModalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = modalProviderInitialState;
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  getChildContext() {
    const modalProvider = {showModal: this.showModal, hideModal: this.hideModal};
    return {modalProvider};
  }
  showModal(options) {
    if(!options.body) { return false }
    this.setState(options);
  }
  hideModal() {
    this.setState(modalProviderInitialState);
  }
  renderModalBody() {
    return <Modal.Body>{this.state.body}</Modal.Body>
  }
  renderModalHeader() {
    return (
      <Modal.Header closeButton={this.state.closeButton} >
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal.Header>
    )
  }
  renderModalFooter() {
    return <Modal.Footer>{this.state.footer}</Modal.Footer>
  }
  render() {
    const { children, componentClass: Component } = this.props;
    const { body, closeButton, footer, modalProps } = this.state;
    return (
      <Component>
        {children}
        <Modal show={!!body} onHide={this.hideModal} { ...modalProps } >
          {(title || closeButton) && this.renderModalHeader()}
          {body && this.renderModalBody()}
          {footer && this.renderModalFooter()}
        </Modal>
      </Component
    )
  }
}

ModalProvider.childContextTypes = {modalProvider: React.PropTypes.object.isRequired};
ModalProvider.defaultProps = {componentClass: 'div'};
ModalProvider.propTypes = {componentClass: React.PropTypes.string};
export default ModalProvider;
