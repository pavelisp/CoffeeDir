import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";
import './EditCoffee.scss';
import Wrapper from "../components/Wrapper/Wrapper";

const EditCoffee = (props) => {

  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleDelete = () => {
    axios
      .delete(`/coffee/${id}`)
      .then((res) => {
        props.getCoffees();
        navigate("/");  
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/coffee/${id}`, {
        name: e.target.name.value,
        roaster: e.target.roaster.value,
        origin: e.target.origin.value,
        farm: e.target.farm.value,
        description: e.target.description.value,
        flavours: e.target.flavours.value.split(','),
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
      .get(`/coffee/${id}`)
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
    <Wrapper>
      <h1 className="EditCoffee__title">Edit Coffee</h1>
      <form className="EditCoffee" onSubmit={handleSubmit}>
        <div className="EditCoffee__wrapper">
          <div className="EditCoffee__left">
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
          </div>
          <div className="EditCoffee__right">
          <Input
          type="text"
          name="flavours"
          label="Flavours (comma separated)"
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
          name="score"
          label="Score"
          value={coffee.score}
        />
        <Input
          type="text"
          name="link"
          label="Link"
          value={coffee.link}
        />
          </div>
        
             
        </div>
        
        <Input
          type="text"
          name="description"
          label="Description"
          value={coffee.description}
        />


        <div className="EditCoffee__buttons">
          <span onClick={handleDelete}className="EditCoffee__delete">Delete</span>
          <button className="EditCoffee__confirm">CONFIRM</button>

        </div>
      </form>
    </Wrapper>
  );
};

export default EditCoffee;
