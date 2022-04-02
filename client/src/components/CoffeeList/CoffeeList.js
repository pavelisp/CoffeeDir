import "./CoffeeList.scss";
import { Link } from "react-router-dom";


const CoffeeList = (props) => {
  return (
    <ul className="CoffeeList">
      <div className="CoffeeList__user-coffees">
        Show My Coffees
      </div>
      <header className="CoffeeList__header">
        <span className="CoffeeList__header-name">Name</span>
        <span className="CoffeeList__header-roaster">Roaster</span>
        <span className="CoffeeList__header-origin">Origin</span>
        <span className="CoffeeList__header-score">Score</span>
        <span className="CoffeeList__header-price">Price</span>
        <span className="CoffeeList__header-link">Link</span>
      </header>
      {props.coffees &&
        props.coffees.map((coffee) => {
          
          const { _id, name: coffeeName, roaster, origin, price, link, score } = coffee;

          return (
              <li key={coffee._id} className="CoffeeList__item">
                <Link className="CoffeeList__item--name"to={`/coffee/${_id}`} >
                  <span className="CoffeeList__item--name_title">COFFEE: </span>{coffeeName}</Link>
                <span className="CoffeeList__item--roaster"><span className="CoffeeList__item--roaster_title">Roaster: </span> {roaster}</span> 
                <span className="CoffeeList__item--origin"><span className="CoffeeList__item--origin_title">Origin: </span> {origin}</span>
                <span className="CoffeeList__item--score"><span className="CoffeeList__item--score_title">Score: </span> {score}</span>
                <span className="CoffeeList__item--price"><span className="CoffeeList__item--price_title">Price: </span>${price}</span>
                <span className="CoffeeList__item--link"><a href={link} target='_blank' rel='noreferrer'>Buy</a></span>
              </li>
        )}
        
      )}
    </ul>
  );
};

export default CoffeeList;
