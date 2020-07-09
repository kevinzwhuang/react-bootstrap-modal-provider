import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ModalProviderContext from './ModalProviderContext';

const warnMissingBody = () =>
  console.warn(
    "'body' was missing from the options provided to showModal - this is required in order to display a modal.",
  );

function getModalProviderInitialOptions() {
  return {
    _closing: false,
    body: null,
    closeButton: null,
    footer: null,
    modalProps: {},
    title: null,
  };
}

function ModalProvider({ children, componentClass: Component, modalProps }) {
  const [modalProviderOptions, setModalProviderOptions] = useState(
    getModalProviderInitialOptions,
  );
  const hideModal = () => {
    setModalProviderOptions(options => ({ ...options, _closing: true }));
  };
  const showModal = options => {
    const defaultOptions = getModalProviderInitialOptions();
    if (typeof options === 'function') {
      const newOptions = options({ hideModal, showModal });
      if (!newOptions.body) {
        return warnMissingBody();
      }
      return setModalProviderOptions({ ...defaultOptions, ...newOptions });
    }
    if (!options.body) {
      return warnMissingBody();
    }
    return setModalProviderOptions({ ...defaultOptions, ...options });
  };
  const modalProviderContextValue = { hideModal, showModal };
  const handleExited = () => {
    setModalProviderOptions(getModalProviderInitialOptions());
    if (modalProps.onExited) {
      modalProps.onExited();
    }
    if (modalProviderOptions.modalProps.onExited) {
      modalProviderOptions.modalProps.onExited();
    }
  };
  const calculateShow = () => {
    if (modalProviderOptions._closing) {
      return false;
    }
    if (modalProviderOptions.body) {
      return true;
    }
    return false;
  };

  const {
    body,
    closeButton,
    footer,
    modalProps: stateModalProps,
    title,
  } = modalProviderOptions;
  return (
    <ModalProviderContext.Provider value={modalProviderContextValue}>
      <Component>
        {children}
        <Modal
          show={calculateShow()}
          onHide={hideModal}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...stateModalProps}
          onExited={handleExited}
        >
          {(title || closeButton) && (
            <Modal.Header closeButton={modalProviderOptions.closeButton}>
              <Modal.Title>{modalProviderOptions.title}</Modal.Title>
            </Modal.Header>
          )}
          {body && (
            <ModalProvider
              componentClass={Modal.Body}
              modalProps={{
                ...modalProviderOptions.modalProps,
                ...modalProps,
              }}
            >
              {modalProviderOptions.body}
            </ModalProvider>
          )}
          {footer && <Modal.Footer>{modalProviderOptions.footer}</Modal.Footer>}
        </Modal>
      </Component>
    </ModalProviderContext.Provider>
  );
}

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
