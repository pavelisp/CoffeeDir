import axios from "axios";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import Input from "../Input/Input";
import Wrapper from "../Wrapper/Wrapper";
import './Login.scss';

class Login extends Component {

  state = {
    error: '',
    success: false
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {email: {value: email}, password: {value: password}} = e.target;

    axios
      .post('/user/login', {
        email,
        password
      })
      .then(res => {
        sessionStorage.setItem('token', res.data.token);
        this.setState({success: true})
        this.props.setLogin();
      })
      .catch(err=>{
        this.setState({ error: err.response.data})
      })
  }

  render(){
    return ( 
    <Wrapper>
      <form className="Login" onSubmit={this.handleSubmit}>
      {this.state.success && <Navigate to="/" />}
      {this.state.error}
      <div className="Login__wrapper">
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
      </div>

      <button className="Login__button">LOGIN</button>
    </form>
      </Wrapper> );
  }
}
 
export default Login;