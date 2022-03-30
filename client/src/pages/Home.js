import { Component } from "react";
import axios from 'axios';

class Home extends Component {

  state = {
    user: null,
    failedAuth: false,
    signedIn: false
  }


  handleLogout = () => {
    // remove that token from sessionStorage
    sessionStorage.removeItem('token');
    // and then set the user to null and some sort of failedAuth message
    this.setState({
      user: null,
      failedAuth: true,
      signedIn: false
    });
  };

  componentDidMount(){

    const token = sessionStorage.getItem('token');

    if(!token){
      return this.setState({failedAuth: true})
    }

    axios
      .get('http://localhost:8080/current', {
        headers: {Authorization: `Bearer ${token}`}
      })
      .then(res=> {
        console.log(res)
        this.setState({user: res.data, signedIn: true})
      })
      .catch(err=>{
        console.log(err)
      })

  }

  render(){
    return ( 
    <main>
      <h1>home</h1>
      {this.state.signedIn && <button onClick={this.handleLogout}>LOG OUT</button>}
    </main>
 );
  }
}
 
export default Home;