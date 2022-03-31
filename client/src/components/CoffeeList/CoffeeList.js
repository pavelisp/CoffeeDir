import './CoffeeList.scss';
import { Link } from 'react-router-dom';

const CoffeeList = (props) => {
  return ( 
    <ul>
      {props.coffees && props.coffees.map(coffee => (
        <li key={coffee._id}>
          <Link to={`/coffee/${coffee._id}`}>
            {coffee.name} {coffee.roaster} {coffee.origin} {coffee.farm} {coffee.description} {coffee.flavours} {coffee.price} {coffee.link} {coffee.score}
          </Link>
        </li>

   ))}
    </ul>
      )};
 
export default CoffeeList;