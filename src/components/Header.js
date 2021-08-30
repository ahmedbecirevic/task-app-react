import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
  const clickHandler = () => console.log('click');
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        className='btn'
        color='green'
        text='Add'
        onClick={clickHandler}
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