import { Component } from "react";
import Input from "../components/Input/Input";
import { useNavigate } from 'react-router-dom';

const AddCoffee = (props) => {

  const navigator = useNavigate();
  
    return (
      <div>
        <h1>Add Coffee</h1>
        <form onSubmit={(e)=>{props.handleAddCoffee(e, navigator)}}>
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="roaster" label="Roaster" />
          <Input type="text" name="origin" label="Origin" />
          <Input type="text" name="farm" label="Farm" />
          <Input type="text" name="description" label="Description" />
          <Input type="text" name="flavours" label="Flavours" />
          <Input type="text" name="price" label="Price" />
          <Input type="text" name="link" label="Link" />
          <Input type="text" name="score" label="Score" />
          <button>ADD</button>
        </form>
      </div>
    );
}

export default AddCoffee;
