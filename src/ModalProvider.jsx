import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';

const modalProviderInitialState = {
  _closing: false,
  body: null,
  closeButton: null,
  footer: null,
  modalProps: {},
  title: null,
};

const warnMissingBody = () => console.warn("'body' was missing from the options provided to showModal - this is required in order to display a modal.");

class ModalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = modalProviderInitialState;
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleExited = this.handleExited.bind(this);
  }
  getChildContext() {
    const modalProvider = { showModal: this.showModal, hideModal: this.hideModal };
    return { modalProvider };
  }
  showModal(options) {
    if (typeof options === 'function') {
      const modalProvider = this.getChildContext().modalProvider;
      const newOptions = options({ ...modalProvider });
      if (!newOptions.body) { return warnMissingBody(); }
      return this.setState(newOptions);
    }
    if (!options.body) { return warnMissingBody(); }
    return this.setState(options);
  }
  hideModal() {
    this.setState({ _closing: true });
  }
  handleExited() {
    this.setState(modalProviderInitialState);
    if (this.props.modalProps.onExited) { this.props.modalProps.onExited(); }
    if (this.state.modalProps.onExited) { this.state.modalProps.onExited(); }
  }
  calculateShow() {
    if (this.state._closing) { return false; }
    if (this.state.body) { return true; }
    return false;
  }
  renderModalHeader() {
    return (
      <Modal.Header closeButton={this.state.closeButton} >
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal.Header>
    );
  }
  renderModalBody() {
    return (
      <ModalProvider
        componentClass={Modal.Body}
        modalProps={{ ...this.state.modalProps, ...this.props.modalProps }}
      >
        {this.state.body}
      </ModalProvider>
    );
  }
  renderModalFooter() {
    return <Modal.Footer>{this.state.footer}</Modal.Footer>;
  }
  render() {
    const { children, componentClass: Component, modalProps } = this.props;
    const { body, closeButton, footer, modalProps: stateModalProps, title } = this.state;
    return (
      <Component>
        {children}
        <Modal
          show={this.calculateShow()}
          onHide={this.hideModal}
          {...modalProps}
          {...stateModalProps}
          onExited={this.handleExited}
        >
          {(title || closeButton) && this.renderModalHeader()}
          {body && this.renderModalBody()}
          {footer && this.renderModalFooter()}
        </Modal>
      </Component>
    );
  }
}

ModalProvider.childContextTypes = {
  modalProvider: PropTypes.object.isRequired,
};
ModalProvider.defaultProps = {
  componentClass: 'div',
  modalProps: {},
};
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  componentClass: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  modalProps: PropTypes.shape({
    animation: PropTypes.bool,
    autoFocus: PropTypes.bool,
    backdrop: PropTypes.oneOf(['static', true, false]),
    bsClass: PropTypes.string,
    bsSize: PropTypes.oneOf(['lg', 'large', 'sm', 'small']),
    className: PropTypes.string,
    dialogClassName: PropTypes.string,
    dialogComponentClass: PropTypes.element,
    enforceFocus: PropTypes.bool,
    keyboard: PropTypes.bool,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onExit: PropTypes.func,
    onExited: PropTypes.func,
    restoreFocus: PropTypes.bool,
  }),
};
export default ModalProvider;
