import React from 'react';
import { Modal } from 'react-bootstrap';

const modalProviderInitialState = {
  body: null,
  childModals: [],
  closeButton: null,
  footer: null,
  modalProps: {},
  title: null,
};

class ModalProvider extends React.Component {
  constructor(props) {
    super(props);
    const { childModals, modalIndex } = props;
    if (childModals && childModals.length > 0 && modalIndex !== -1) {
      this.state = { ...childModals[modalIndex], childModals };
    } else {
      this.state = modalProviderInitialState;
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  getChildContext() {
    const modalProvider = { showModal: this.showModal, hideModal: this.hideModal };
    return { modalProvider };
  }
  componentDidUpdate(prevProps) {
    const { childModals, modalIndex } = this.props;
    if (childModals && prevProps.childModals[modalIndex] !== childModals[modalIndex]) {
      this.showModal({ ...childModals[modalIndex], childModals });
    }
  }
  showModal(options) {
    if (!options.body) { return false; }
    if (this.state.body) {
      const newChildModals = [...this.state.childModals, options];
      return this.setState({ childModals: newChildModals });
    }
    return this.setState(options);
  }
  hideModal() {
    this.setState(modalProviderInitialState);
  }
  renderModalBody() {
    return (
      <ModalProvider
        componentClass={Modal.Body}
        childModals={this.props.childModals || this.state.childModals}
        modalIndex={this.props.modalIndex + 1}
      >
        {this.state.body}
      </ModalProvider>
    );
  }
  renderModalHeader() {
    return (
      <Modal.Header closeButton={this.state.closeButton} >
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal.Header>
    );
  }
  renderModalFooter() {
    return <Modal.Footer>{this.state.footer}</Modal.Footer>;
  }
  render() {
    const { children, componentClass: Component } = this.props;
    const { body, closeButton, footer, modalProps, title } = this.state;
    return (
      <Component>
        {children}
        <Modal show={!!body} onHide={this.hideModal} {...modalProps} >
          {(title || closeButton) && this.renderModalHeader()}
          {body && this.renderModalBody()}
          {footer && this.renderModalFooter()}
        </Modal>
      </Component>
    );
  }
}

ModalProvider.childContextTypes = {
  modalProvider: React.PropTypes.object.isRequired,
};
ModalProvider.defaultProps = {
  childModals: null,
  componentClass: 'div',
  modalIndex: -1,
};
ModalProvider.propTypes = {
  children: React.PropTypes.element.isRequired,
  childModals: React.PropTypes.arrayOf(React.PropTypes.object),
  componentClass: React.PropTypes.element,
  modalIndex: React.PropTypes.number,
};
export default ModalProvider;
