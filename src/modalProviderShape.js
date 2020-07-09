import PropTypes from "prop-types";

const modalProviderShape = PropTypes.shape({
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
});
export default modalProviderShape;
