import { Link } from 'react-router-dom';
import './Header.scss';


const Header = (props) => {

  const { loggedIn, handleLogout } = props;
  return ( 
    <header className='Header'>
      <Link to="/">
        Logo
      </Link>
      <nav>
        <ul className='Header__nav'>
          {!loggedIn ? (
            <>
              <li><Link className='Header__nav-link' to="/login">Login</Link></li>
              <li><Link className='Header__nav-link' to="/register">Register</Link></li>
            </>
          ) : (
            <>
              <li><Link className='Header__nav-link' to="/add-coffee">Add coffee</Link></li>
              <li><span onClick={handleLogout} className='Header__nav-link'>Log Out</span></li>
            </>
          )}
        </ul>
      </nav>
    </header>
   );
}

 
export default Header;