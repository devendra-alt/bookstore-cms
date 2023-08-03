import PropTypes from 'prop-types';

const Button = ({ clickEvent, className, InnerText }) => (
  <button type="button" className={className} onClick={clickEvent}>
    {InnerText}
  </button>
);

Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  InnerText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
