import PropTypes from 'prop-types';

const Header = ({ title }) => {
   return (
      <header className='header'>
         <h1>{title}</h1>
         <button>Add</button>
      </header>
   )
}

Header.defaultProps = {
   title: 'Task Tracker App',
}

Header.propTypes = {
   title: PropTypes.string,
}

// const headingStyle = {
//    color: 'red', 
//    backgroundColor: 'black'
// }

export default Header
