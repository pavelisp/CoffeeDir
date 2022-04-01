import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";

const EditCoffee = (props) => {

  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/coffee/${id}`, {
        name: e.target.name.value,
        roaster: e.target.roaster.value,
        origin: e.target.origin.value,
        farm: e.target.farm.value,
        description: e.target.description.value,
        flavours: e.target.flavours.value,
        price: e.target.price.value,
        link: e.target.link.value,
        score: e.target.score.value,
      })
      .then((res) => {
        console.log(res)
        setCoffee(res.data);
        props.getCoffees();
        navigate("/coffee/" + id);  
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  const getCoffee = () => {
    axios
      .get(`http://localhost:8080/coffee/${id}`)
      .then((res) => {
        setCoffee(res.data);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  useEffect(() => {
    getCoffee();
  }, []);


  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Name"
        value={coffee.name}
      />
      <Input
        type="text"
        name="roaster"
        label="Roaster"
        value={coffee.roaster}
      />
      <Input
        type="text"
        name="origin"
        label="Origin"
        value={coffee.origin}
      />
      <Input
        type="text"
        name="farm"
        label="Farm"
        value={coffee.farm}
      />
      <Input
        type="text"
        name="description"
        label="Description"
        value={coffee.description}
      />
      <Input
        type="text"
        name="flavours"
        label="Flavours"
        value={coffee.flavours}
      />
      <Input
        type="text"
        name="price"
        label="Price"
        value={coffee.price}
      />
      <Input
        type="text"
        name="link"
        label="Link"
        value={coffee.link}
      />
      <Input
        type="text"
        name="score"
        label="Score"
        value={coffee.score}
      />
      <button className="Button">CONFIRM</button>
    </form>
  );
};

export default EditCoffee;
