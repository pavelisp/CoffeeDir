import axios from "axios";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import Input from "../Input/Input";

class Login extends Component {

  state = {
    error: '',
    success: false
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const {email: {value: email}, password: {value: password}} = e.target;

    axios
      .post('http://localhost:8080/user/login', {
        email,
        password
      })
      .then(res => {
        sessionStorage.setItem('token', res.data.token);
        this.setState({success: true})
      })
      .catch(err=>{
        this.setState({ error: err.response.data})
      })
  }

  render(){
    return ( <form onSubmit={this.handleSubmit}>
      {this.state.success && <Navigate to="/" />}
      {this.state.error}
      <Input type="text" name="email" label="Email" />
      <Input type="password" name="password" label="Password" />
      <button>LOGIN</button>
    </form> );
  }
}
 
export default Login;