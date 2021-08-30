import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, buttonTextToggle }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        className='btn'
        color={buttonTextToggle ? 'grey' : 'blue'}
        text={buttonTextToggle ? 'Close' : 'Add'}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker App',
};

Header.propTypes = {
  title: PropTypes.string,
};

// const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
// }

export default Header;