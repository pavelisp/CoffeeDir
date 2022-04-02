import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import portrait from '../../assets/pavel_ispravnikov_portrait.jpg';
import './About.scss';

const About = (props) => {
  
  return ( 
    <Wrapper>
      <Link className="About__back" to="/">&lt; Home</Link>
      <div className="About">
        <div className="About__left">
        <h1 className="About__title">About</h1>
        <p className="About__text">
          This is a simple app that allows you to create and save your own coffees.
          You can also search for coffees by name, roaster, origin, score, price, and link.
          You can also filter your coffees by your own account.
        </p>
        <div className="About__image-credit">
          <p className="About__image-title">Image credits:</p>
          <a className="About__image-link" target="_blank" rel="noreferrer" href="https://www.freepik.com/vectors/coffee-branch">Coffee branch vector created by rattanachomphoo - www.freepik.com</a>
        </div>
        </div>
        <div className="About__right">
          <h2 className="About__author">Author:</h2>
          <img src={portrait} alt="Pavel Ispravnikov" className="About__author-image"/>
          <p className="About__author-text">
            This app was created by Pavel Ispravnikov.
            You can find his GitHub profile <a className="About__author-link" href="https://github.com/pavelisp" target='_blank' rel='noreferrer'>here</a>
          </p>            
        </div>

       
      </div>  
  </Wrapper>
  );
}
 
export default About;