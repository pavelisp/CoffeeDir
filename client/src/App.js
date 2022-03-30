import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />             
      </Routes>

    </Router>
  );
}

export default App;
