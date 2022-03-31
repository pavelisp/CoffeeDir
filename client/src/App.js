import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.scss';

import axios from 'axios';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Component } from 'react';
import AddCoffee from './pages/AddCoffee';
import { Navigate } from 'react-router-dom';
import Coffee from './pages/Coffee';
import EditCoffee from './pages/EditCoffee';

class App extends Component {
  state= {
    user: null,
    failedAuth: true,
    loggedIn: false
  }


  setLogin = () => {
    this.setState({loggedIn: true})
  }

  getCoffees = () => {
    axios
    .get('http://localhost:8080/coffee')
    .then(res=> {
      this.setState({coffees: res.data})
    })
    .catch(err=>{
      console.log(err)
    });
  }  

  checkIfLoggedIn = () => {
    
    const token = sessionStorage.getItem('token');

    if(!token){
      return this.setState({failedAuth: true})
    }

    axios
    .get('http://localhost:8080/current', {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(res=> {
      this.setState({user: res.data, loggedIn: true})
    })
    .catch(err=>{
      console.log(err)
    })
  }

  handleLogout = () => {
    // remove that token from sessionStorage
    sessionStorage.removeItem('token');
    // and then set the user to null and some sort of failedAuth message
    this.setState({
      user: null,
      failedAuth: true,
      loggedIn: false,
    }).then(()=>{
      <Navigate to="/" />
    })
  };

  componentDidMount(){

    this.getCoffees();
    this.checkIfLoggedIn();

  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.loggedIn !== this.state.loggedIn){

      const token = sessionStorage.getItem('token');

      if(!token){
        return this.setState({failedAuth: true})
      }
  
      axios
        .get('http://localhost:8080/current', {
          headers: {Authorization: `Bearer ${token}`}
        })
        .then(res=> {
          this.setState({user: res.data, loggedIn: true})
        })
        .catch(err=>{
          console.log(err)
        })
    }
  }

  render (){
    return (
      <Router>
        <Header handleLogout={this.handleLogout} loggedIn={this.state.loggedIn}/> 
        <Routes>
          <Route path="/" exact element={<Home coffees={this.state.coffees}/>} />
          <Route path="/login" element={<Login setLogin={this.setLogin}/>} />
          <Route path="/register" element={<Register />} />  
          <Route path="/add-coffee" element={<AddCoffee userId={this.state.user && this.state.user.id}/>} />   
          <Route path="/coffee/:id/edit" element={<EditCoffee getCoffees={this.getCoffees}/>} />
          <Route path="/coffee/:id" element={<Coffee user={this.state.user} loggedIn={this.state.loggedIn}/>} />            
        </Routes>
      </Router>
    );
  }
}

export default App;
