import Input from "../components/Input/Input";
import { useNavigate } from 'react-router-dom';
import Wrapper from "../components/Wrapper/Wrapper";
import './AddCoffee.scss';

const AddCoffee = (props) => {

  const navigator = useNavigate();
  
    return (
      <Wrapper>
        <h1 className="AddCoffee__title">Add Coffee</h1>
        <form className="AddCoffee" onSubmit={(e)=>{props.handleAddCoffee(e, navigator)}}>
        <div className="EditCoffee__wrapper">
          <div className="EditCoffee__left">
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="roaster" label="Roaster" />
          <Input type="text" name="origin" label="Origin" />
          <Input type="text" name="farm" label="Farm" />
          </div>
          <div className="EditCoffee__right">
          <Input type="text" name="flavours" label="Flavours (separated by commas)" />
          <Input type="text" name="price" label="Price" />
          <Input type="text" name="score" label="Score" />
          <Input type="text" name="link" label="Link" />
          </div>
             
        </div>

        <Input type="text" name="description" label="Description" />
          <button className="AddCoffee__button">ADD COFFEE</button>
        </form>
      </Wrapper>
    );
}

export default AddCoffee;
