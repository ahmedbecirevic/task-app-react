import { useContext } from 'react';
import { ShowFormContext } from '../App';
import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  const toggleFormDisplay = useContext(ShowFormContext);
  return (
    <button
      onClick={toggleFormDisplay.showAddForm}
      className='btn'
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'navy',
  text: 'Button',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
