import './Footer.scss';
import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return ( 
    <Wrapper>
      <footer className="Footer">
        <div className="Footer__copyright">Copyright &copy; Pavel Ispravnikov</div>
        <Link className="Footer__about" to="/about">About</Link>
      </footer>
    </Wrapper>
   );
}
 
export default Footer;