import axios from "axios";
import { Component } from "react";
import Input from "../components/Input/Input";

class AddCoffee extends Component {
  state = { coffee: {}, error: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)

    axios.post(`http://localhost:8080/coffee/${this.props.userId}`, {
      name: e.target.name.value,
      roaster: e.target.roaster.value,
      origin: e.target.origin.value,
      farm: e.target.farm.value,
      description: e.target.description.value,
      flavours: e.target.flavours.value,
      price: e.target.price.value,
      link: e.target.link.value,
      score: e.target.score.value,
    }).then((res) => {
      this.setState({ coffee: res.data });
    }).catch((err) => {
      this.setState({ error: err.response.data.error });
    });
  };

  render() {
    return (
      <div>
        <h1>Add Coffee</h1>
        <form onSubmit={this.handleSubmit}>
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
}

export default AddCoffee;
