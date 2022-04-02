import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.scss';

import axios from 'axios';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Component } from 'react';
import AddCoffee from './pages/AddCoffee';
import Coffee from './pages/Coffee';
import EditCoffee from './pages/EditCoffee';
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

class App extends Component {
  state= {
    user: null,
    failedAuth: true,
    loggedIn: false,
    coffees: []
  }


  setLogin = () => {
    this.setState({loggedIn: true})
  }

  handleAddCoffee = (e, navigate) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/coffee/${this.state.user.id}`, {
      name: e.target.name.value,
      roaster: e.target.roaster.value,
      origin: e.target.origin.value,
      farm: e.target.farm.value,
      description: e.target.description.value,
      flavours: e.target.flavours.value.split(','),
      price: e.target.price.value,
      link: e.target.link.value,
      score: e.target.score.value,
    }).then(() => {
      this.getCoffees();
    }).catch((err) => {
      this.setState({ error: err.response.data.error });
    });
    navigate('/');
  };

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

  handleLogout = (navigate) => {
    // remove that token from sessionStorage
    sessionStorage.removeItem('token');
    // and then set the user to null and some sort of failedAuth message
    this.setState({
      user: null,
      failedAuth: true,
      loggedIn: false,
    })
    navigate('/');
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
        <Wrapper>
          <Header handleLogout={this.handleLogout} loggedIn={this.state.loggedIn}/> 
          <Routes>

              <Route path="/" exact element={<Home user={this.state.user} coffees={this.state.coffees}/>} />
              <Route path="/login" element={<Login setLogin={this.setLogin}/>} />
              <Route path="/register" element={<Register />} />  
              <Route path="/about" element={<About />} />
              <Route path="/add-coffee" element={<AddCoffee handleAddCoffee={this.handleAddCoffee} userId={this.state.user && this.state.user.id}/>} />   
              <Route path="/coffee/:id/edit" element={<EditCoffee getCoffees={this.getCoffees}/>} />
              <Route path="/coffee/:id" element={<Coffee user={this.state.user} loggedIn={this.state.loggedIn}/>} />            
          
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
