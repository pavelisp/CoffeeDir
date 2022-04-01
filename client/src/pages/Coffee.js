import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import './Coffee.scss';

const Coffee = (props) => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [coffee, setCoffee] = useState({});
  const [error, setError] = useState(null);

  console.log(id);

  const getCoffee = () => {

    axios
      .get(`http://localhost:8080/coffee/${id}`)
      .then((res) => {
        setCoffee( res.data );
      }).catch((err) => {
        setError( err.response.data.error );
      });
  }

  useEffect(() => {
      getCoffee();
  }, []);

  return ( 
    <div className='Coffee'>
     <span className="Coffee__back" onClick={()=>{navigate('/')}}> &lt; Back</span>
     <main className='Coffee__info'>
    <h1 className='Coffee__name'>Name: {coffee.name}</h1>
    <p className='Coffee__roaster'>Roaster: {coffee.roaster}</p>
    <p className='Coffee__origin'>Origin: {coffee.origin}</p>
    <p className='Coffee__farm'>Farm: {coffee.farm}</p>
    <p className='Coffee__description'>Description: {coffee.description}</p>
    <p className='Coffee__flavours'>Flavours: {coffee.flavours}</p>
    <p className='Coffee__price'>Price: ${coffee.price}</p>
    <p className='Coffee__score'>Score: {coffee.score}</p>
    <p className='Coffee__link'><a href={coffee.link} target="_blank" rel="noreferrer">Buy</a></p>
  </main>
  {(props.loggedIn && props.user.id === coffee.user_id)&& <Link className='Coffee__edit' to={`/coffee/${id}/edit`}>edit coffee</Link>}
    </div>

   );
}
 
export default Coffee;