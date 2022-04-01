import './Header.scss';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';

const Header = (props) => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const navigator = useNavigate();

  const { loggedIn, handleLogout } = props;
  return ( 
    <header className='Header'>
      <Link className={scroll? `logo-rotate logo-link`: `logo-link`} to="/">
        <img className={`Header__logo `} src={Logo} alt="Coffee Directory" />
      </Link>
      <nav>
        <div className='Header__nav'>
          {!loggedIn ? (
            <>
              <Link className='Button Header__nav-link' to="/login">Login</Link>
              <Link className='Button Button--secondary Header__nav-link' to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link className='Button Header__nav-link' to="/add-coffee">Add coffee</Link>
              <span onClick={()=>{handleLogout(navigator)}} className='Button Button--secondary Header__nav-link'>Log Out</span>
            </>
          )}
        </div>
      </nav>
    </header>
   );
}

 
export default Header;