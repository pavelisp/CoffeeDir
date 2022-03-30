import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
  return ( 
    <header>
      <Link to="/">
        Logo
      </Link>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Header;