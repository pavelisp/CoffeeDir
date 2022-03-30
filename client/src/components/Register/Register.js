import { Component } from "react";
import Input from "../Input/Input";
import { Navigate } from 'react-router-dom';

import axios from "axios";

class Register extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
    } = e.target;
    console.log(username, email,password)
    // send a post request to server to register user
    axios.post(`http://localhost:8080/user/register`, {
      username,
      email,
      password,
    })
    .then(()=>{
      this.setState({success: true, error: ""})
    })
    .catch((err)=>{
      console.log(err)
      this.setState({success: false, error: err.response.data})
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.state.success && <Navigate replace to='/login' /> }
        { this.state.error }
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button>REGISTER</button>
      </form>
    );
  }
}

export default Register;
