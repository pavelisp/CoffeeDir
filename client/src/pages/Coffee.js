import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

const Coffee = (props) => {

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
    <main>
    <h1>{coffee.name}</h1>
    <p>{coffee.roaster}</p>
    <p>{coffee.origin}</p>
    <p>{coffee.farm}</p>
    <p>{coffee.description}</p>
    <p>{coffee.flavours}</p>
    <p>{coffee.price}</p>
    <p>{coffee.link}</p>
    <p>{coffee.score}</p>
    {(props.loggedIn && props.user.id === coffee.user_id)&& <Link to={`/coffee/${id}/edit`}>edit coffee</Link>}
  </main>
   );
}
 
export default Coffee;